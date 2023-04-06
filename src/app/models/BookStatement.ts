import {Book} from "./Book";

export interface BookStatement {
  id: bigint;
  statement: string;
  book: Book;
}
