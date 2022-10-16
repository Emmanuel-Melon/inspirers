export const backendUrl =
  process.env.NEXT_BASE_URL || "http://localhost:4001/api";
export const secret = `${process.env.SECRET || "secret"}`;
export const facebokClientId = process.env.FACEBOOK_ID || "";
export const facebokClientSecret = process.env.FACEBOOK_SECRET || "";
