"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Props = {
  expertises: {
    id: string;
    name: string;
  }[];
};

export default function ExpertiseFilter({ expertises }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentExpertise = searchParams.get("expertise");

  const handleExpertiseChange = useCallback(
    (expertiseId: string) => {
      const params = new URLSearchParams(searchParams);
      if (expertiseId === currentExpertise) {
        params.delete("expertise");
      } else {
        params.set("expertise", expertiseId);
      }
      router.push(`/works?${params.toString()}`);
    },
    [currentExpertise, router, searchParams]
  );

  return (
    <div className="flex flex-wrap gap-3">
      {expertises.map((expertise) => (
        <button
          key={expertise.id}
          onClick={() => handleExpertiseChange(expertise.id)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            currentExpertise === expertise.id
              ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          {expertise.name}
        </button>
      ))}
    </div>
  );
}
