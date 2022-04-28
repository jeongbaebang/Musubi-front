import type { NextApiRequest, NextApiResponse } from "next";

import { status } from "../config";
import { destroyAuthCookie } from "src/lib/cookies";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  destroyAuthCookie({ res });
  return res.send(status.OK);
}
