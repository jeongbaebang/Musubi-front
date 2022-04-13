/**
 * @param type 액션타입을 매개변수로 전달합니다.
 * @returns 각 액션타입을 튜플 형태로 반환합니다.
 */
interface ActionTypesProps {
  <T extends string>(type: T): [T, `${T}_SUCCESS`, `${T}_FAILURE`];
}

export const createActionTypes: ActionTypesProps = type => {
  const SUCCESS = `${type}_SUCCESS` as const;
  const FAILURE = `${type}_FAILURE` as const;

  return [type, SUCCESS, FAILURE];
};
