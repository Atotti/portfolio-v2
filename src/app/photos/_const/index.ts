import { PhotoData } from "@/lib/photo";
import dataKiroro from "./kiroro";

interface Photo {
  title: string;
  data?: PhotoData;
}

export const photos: Photo[] = [
  {
    title: "キロロ",
    data: dataKiroro,
  },
];
