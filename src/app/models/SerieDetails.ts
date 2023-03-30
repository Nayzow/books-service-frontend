import {Editor} from "./Editor";

export interface SerieDetails {
  id: bigint;
  name: string;
  image: string;
  editor: Editor;
}
