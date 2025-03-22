"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Content from "./Content";
import { Expertise } from "@/types"; // 型定義をインポート

type Props = {
  expertises: Expertise[];
};

export function ExpertiseList({ expertises }: Props) {
  return (
    <div className="flex flex-col gap-48 max-w-4xl mx-auto">
      {expertises.map((expertise, index) => (
        <motion.div
          key={expertise.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`flex flex-col w-full lg:w-3/5 ${
            index % 2 === 1 ? "lg:ml-auto" : ""
          }`}
        >
          <h3 className="text-2xl mb-4 font-bold flex flex-col gap-2">
            <span className="font-objective">
              {index + 1}. {expertise.english_name}
            </span>
            <span className="text-sm">{expertise.name}</span>
          </h3>
          <Content content={expertise.note || ""} />
          <div className="flex flex-wrap gap-2">
            {expertise.skills.map((skill) => (
              <div className="flex items-center gap-3" key={skill.id}>
                {skill.iconid ? (
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.iconid}`}
                    alt={skill.name}
                    width={32}
                    height={32}
                  />
                ) : skill.svg ? (
                  <Image
                    src={skill.svg.url}
                    alt={skill.name}
                    width={32}
                    height={32}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
