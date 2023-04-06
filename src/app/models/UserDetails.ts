import {Library} from "./Library";

export interface UserDetails {
  id: bigint;
  email: string;
  username: string;
  password: string;
  image: string;
  role: string;
  library: Library;
}
