import {Library} from "./Library";
import {BookStatement} from "./BookStatement";

export interface Borrowing {
  id: bigint;
  duration: string,
  library: Library;
  bookStatement: BookStatement;
}
