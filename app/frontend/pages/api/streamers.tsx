import { NextApiRequest, NextApiResponse } from "next";

export interface streamer {
  avatarUrl: string;
  streamerName: string;
}

const streamersList: streamer[] = [
  {
    avatarUrl:
      "data:image/jpeg;base64,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",
    streamerName: "쌍베",
  },
  {
    avatarUrl:
      "data:image/jpeg;base64,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",
    streamerName: "침착맨",
  },
];

Object.freeze(streamersList);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(streamersList);
  }
}
