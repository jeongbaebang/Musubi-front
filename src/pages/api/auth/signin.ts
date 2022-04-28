import type { NextApiRequest, NextApiResponse } from "next";

import { errorHandler, server, status } from "../config";

interface Data {
  message: string[];
  username: string;
  token: string;
}

export interface RequestPayload {
  username: string;
  password: string;
}

export interface ResponsePayload {
  data: Data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { data } = await server.post<RequestPayload, ResponsePayload>("/auth/signin", req.body);
    return res.status(status.OK).json(data);
  } catch (err) {
    return errorHandler(res, err);
  }
}
