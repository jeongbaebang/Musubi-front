import type { NextApiRequest, NextApiResponse } from "next";

import { status } from "../config";
import { setAuthCookie } from "src/lib/cookies";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  setAuthCookie({ res }, req.body.token);
  res.send(status.OK);
}
