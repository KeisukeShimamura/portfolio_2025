import { createClient } from "microcms-js-sdk";
import { Expertise, Skill, Work } from "@/types";

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

export const getExpertises = async () => {
  const response = await client.getList<Expertise>({
    endpoint: "expertises",
    queries: { orders: "createdAt" },
  });
  return response.contents;
};

export const getSkills = async () => {
  const response = await client.getList<Skill>({
    endpoint: "skills",
  });
  return response.contents;
};

export const getWorks = async (queries?: { limit?: number }) => {
  const response = await client.getList<Work>({
    endpoint: "works",
    queries: {
      limit: queries?.limit,
    },
  });
  return response.contents;
};

export const getWork = async (id: string) => {
  const work = await client.getListDetail<Work>({
    endpoint: "works",
    contentId: id,
  });
  return work;
};
