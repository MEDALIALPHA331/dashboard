import type { NextApiRequest, NextApiResponse } from "next/types";
import data from "./fake-data.json";
import type { Profile } from "./types";

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse<Profile[]>
) {
  res.status(200).json(data);
}
