export const backendUrl = process.env.NEXT_BASE_URL || "http://localhost:5000/api";
export const secret = `${process.env.SECRET || "secret"}`;
export const facebookClientId = process.env.FACEBOOK_ID || "";
export const facebookClientSecret = process.env.FACEBOOK_SECRET || "";
export const githubClientSecret = process.env.GITHUB_SECRET || "";
export const githubClientId = process.env.GITHUB_ID || "";
export const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || "";
export const googleClientId = process.env.GOOGLE_CLIENT_ID || "";
export const authUrl = process.env.NEXT_BASE_URL || "http://localhost:5000/auth";
export const databaseUrl = process.env.DATABASE_URL || "postgresql://postgres:password@localhost:5432/inspirers";
export const JWT_EXPIRES_IN = "1d";
export const JWT_COOKIE_EXPIRES_IN = 1;
export const JWT_COOKIE_NAME = "inspirers-jwt";
export const JWT_COOKIE_DOMAIN = "localhost";
export const JWT_COOKIE_SECURE = false;
export const JWT_COOKIE_SAME_SITE = "lax";
export const JWT_COOKIE_PATH = "/";
export const JWT_COOKIE_HTTP_ONLY = true;
export const JWT_COOKIE_MAX_AGE = 60 * 60 * 24 * 1;
export const JWT_COOKIE_OVERWRITE = true;
export const JWT_COOKIE_SIGNED = true;
export const JWT_COOKIE_ENCODING = "base64json";
export const JWT_COOKIE_KEYS = ["secret"]; 
export const JWT_COOKIE_KEY = "secret";
export const jwtSecret = "secret";