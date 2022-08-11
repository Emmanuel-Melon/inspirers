export const port = process.env.PORT || 5000;
export const secret = `SECRET-${process.env.SECRET || "secret"}`;
export const databaseURL =
  process.env.DATABASE_URL;
export const environment: string = process.env.NODE_ENV || "development";
