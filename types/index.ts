import { MicroCMSImage } from "microcms-js-sdk";

export type Skill = {
  id: string;
  name: string;
  category: "バックエンド" | "フロントエンド" | "その他";
  iconid?: string;
  svg?: MicroCMSImage;
  note?: string;
};

export type Expertise = {
  id: string;
  name: string;
  english_name: string;
  note?: string;
  skills: Skill[];
};

export type Work = {
  id: string;
  name: string;
  sub_name: string;
  body?: string;
  body_html?: string;
  expertise: Expertise;
  skills: Skill[];
  images: ImageCustomField[];
};

export type ImageCustomField = {
  image: MicroCMSImage;
};
