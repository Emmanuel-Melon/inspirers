export const port = process.env.PORT || 5000;
export const secret = `${process.env.SECRET || "secret"}`;
export const databaseURL = process.env.DATABASE_URL;
export const environment: string = process.env.NODE_ENV || "development";
export const arenaPort: string = process.env.NODE_ENV || "development";
export const redisHost: string = process.env.NODE_ENV || "development";
export const redisPassword: string = process.env.NODE_ENV || "development";
export const redisPort: string = process.env.NODE_ENV || "development";
