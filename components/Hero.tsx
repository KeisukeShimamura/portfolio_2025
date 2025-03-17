"use client";

import { motion } from "motion/react";

export default function Hero() {
  const title = "Fullstack Web Engineer";
  const subtitle = "KEISUKE SHIMAMURA";
  const description =
    "I'm a freelance web engineer. Building Innovative Digital Experiences websites.";

  // タイプライターアニメーション
  const typingVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05, // 文字ごとの遅延時間
        duration: 0,
      },
    }),
  };

  return (
    <section className="h-screen flex items-center justify-center bg-[#222] text-white">
      <div className="container mx-auto px-4 md:px-0">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-8xl font-objective font-bold mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05, // 各文字ごとの表示タイミングを制御
              },
            },
          }}
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={typingVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl font-objective font-bold text-stroke-sm text-[#222] mb-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: title.length * 0.05 + 0.5, // タイトルの表示が終わってからサブタイトルを表示
                duration: 0.5,
              },
            },
          }}
        >
          {subtitle}
        </motion.p>
        <motion.p
          className="text-sm md:text-base lg:text-lg font-objective font-medium"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: title.length * 0.05 + 1, // タイトルとサブタイトルが表示された後に説明文を表示
                duration: 0.5,
              },
            },
          }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
