import {Serie} from "./Serie";

export interface EditorDetails {
  id: bigint;
  name: string;
  image: string;
  series: Serie[];
}
