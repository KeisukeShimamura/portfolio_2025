"use client";

type ContentProps = {
  content: string;
};

export default function Content({ content }: ContentProps) {
  return (
    <div
      className="prose prose-sm max-w-none mb-4 text-[#222] prose-h2:font-bold prose-h2:text-lg prose-h3:font-normal prose-h3:text-base"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
