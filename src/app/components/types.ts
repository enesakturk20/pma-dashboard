export type UserStatus = "Active" | "Pending" | "Inactive";

export interface User {
  id: number;
  name: string;
  email: string;
  type: string;
  status: UserStatus;
  city: string;
}
