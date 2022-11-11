export const port = process.env.PORT || 5000;
export const secret = `${process.env.SECRET || "secret"}`;
export const databaseURL = process.env.DATABASE_URL;
export const environment: string = process.env.NODE_ENV || "development";
export const arenaPort: number = +(process.env.ARENA_PORT || 4545);
export const redisHost: string = process.env.REDIS_HOST || "localhost";
export const redisPassword: string = process.env.REDIS_PASSWORD || "password";
export const redisPort: number = +(process.env.ARENA_PORT || 6379);
export const sendGridAPIKey: string = process.env.SENDGRID_API_KEY || "sendgrid";
export const fromEmailAddress = process.env.FROM_EMAIL_ADDRESS || "emmanuelgatwech@gmail.com";
export const host = process.env.HOST || "localhost:3000";