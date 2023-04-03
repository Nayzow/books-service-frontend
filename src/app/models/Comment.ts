import {User} from "./User";

export interface Comment {
  id: bigint;
  content: string;
  date: string;
  user: User;
}
