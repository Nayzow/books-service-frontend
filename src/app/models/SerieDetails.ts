import {Editor} from "./Editor";
import {Book} from "./Book";

export interface SerieDetails {
  id: bigint;
  name: string;
  description: string;
  image: string;
  editor: Editor;
  books: Book[];
}
