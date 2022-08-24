import type { NextApiRequest, NextApiResponse } from "next";

import { getAuthCookie } from "src/lib/cookies";
import { errorHandler, server, status } from "../config";

interface Data {
  message: string[];
  user: string;
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
  const Authentication = getAuthCookie({ req });

  try {
    const { data } = await server.get("auth/check", {
      headers: {
        cookie: `Authentication=${Authentication}`,
      },
    });
    return res.status(status.OK).json(data);
  } catch (err) {
    return errorHandler(res, err);
  }
}
