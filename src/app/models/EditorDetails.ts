import {Serie} from "./Serie";

export interface EditorDetails {
  id: bigint;
  name: string;
  description: string;
  image: string;
  series: Serie[];
}
