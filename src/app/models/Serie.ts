import {Editor} from "./Editor";

export interface Serie {
  id: bigint;
  name: string;
  image: string;
  editor: Editor;
}
