import axios from "axios";
import { NextApiResponse } from "next";

export enum status {
  OK = 200,
  SERVER_ERROR = 500,
}

export const server = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export const client = axios.create({
  baseURL: "http://localhost:3000",
});

export const errorHandler = (res: NextApiResponse, err: any) => {
  if (!err.response) {
    return res.status(status.OK).json({
      errorStatus: status.SERVER_ERROR,
      iserror: true,
      message: ["서버에러발생"],
    });
  }
  /**
   * statusCode {number}
   * message {string[]}
   */
  const { statusCode, message } = err.response.data;
  return res.status(status.OK).json({
    errorStatus: statusCode,
    iserror: true,
    message: message,
  });
};
