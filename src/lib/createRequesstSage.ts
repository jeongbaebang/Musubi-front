/* eslint-disable @typescript-eslint/no-explicit-any */
import { startLoading, finishLoading } from "@/modules/loading";
import { call, put } from "redux-saga/effects";

/**
 * @param type 디스패치될 액션을 전달합니다.
 * @param fetch 액션 생성 함수 객체를 전달합니다. (request, success, failure)
 * @param request 비동기 요청 함수를 전달합니다.
 * @returns 사가를 반환합니다.
 */
export const createRequesstSage = <
  T extends string,
  Fetch extends { request: any; success: any; failure: any },
  API extends { data: any } | null
>(
  type: T,
  fetch: Fetch,
  request: (args: any | null) => Promise<API>
) => {
  return function* (action: ReturnType<typeof fetch.request>) {
    yield put(startLoading(type));
    try {
      const {
        data,
      }: {
        data: API;
      } = yield call(request, action.payload);

      yield put(fetch.success(data));
    } catch (error: any) {
      const message: string[] | undefined = error?.response.data.message;

      if (message) {
        yield put(fetch.failure(message));
      } else {
        yield put(fetch.failure(["서버 오류가 발생했습니다.", " 관리자에게 문의 부탁드립니다."]));
      }
    }
    yield put(finishLoading(type));
  };
};
