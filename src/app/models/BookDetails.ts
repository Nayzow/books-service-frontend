import {Serie} from "./Serie";

export interface BookDetails {
  id: bigint;
  title: string;
  tome: number;
  image: string;
  serie: Serie;
}
