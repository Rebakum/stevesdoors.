export interface IUser {
  _id?: string; 
  name: string;
  email: string;
  password?: string;
  role: "user" | "admin";
  image?: string;
  iat?: number;
  exp?: number;
}