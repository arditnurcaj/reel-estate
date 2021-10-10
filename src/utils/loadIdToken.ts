import { NextApiRequest } from "next";

import verifyIdToken from "./verifyIdToken";

const loadIdToken = async (
  req: NextApiRequest
): Promise<string | null> => {
  if (!req.cookies.token) return null;
  const decoded = await verifyIdToken(req.cookies.token);
  if (!decoded) return null;
  return decoded.uid;
};

export default loadIdToken;