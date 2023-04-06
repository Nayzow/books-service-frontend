import {Editor} from "./Editor";

export interface SerieDetails {
  id: bigint;
  name: string;
  description: string;
  image: string;
  editor: Editor;
}
