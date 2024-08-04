import { NextApiRequest } from "next";

export type ApiRequest<T extends Record<string, unknown> = {}> = Omit<
  NextApiRequest,
  "body"
> & {
  body: T;
};
