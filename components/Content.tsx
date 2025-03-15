"use client";

type ContentProps = {
  content: string;
};

export default function Content({ content }: ContentProps) {
  return (
    <article
      className="prose prose-base prose-slate max-w-none mb-4"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
