import {SerieDetails} from "./SerieDetails";

export interface BookDetails {
  id: bigint;
  tome: number;
  title: string;
  author: string;
  illustrator: string;
  date: string;
  image: string;
  description: string;
  serie: SerieDetails;
}
