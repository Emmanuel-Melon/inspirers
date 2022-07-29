export const port = process.env.PORT || 5000;
export const secret = `SECRET-${process.env.SECRET || "secret"}`;
export const databaseURL =
  process.env.DATABASE_URL || "mysql://root@127.0.0.1:3309/biti";
export const environment: string = process.env.NODE_ENV || "development";
