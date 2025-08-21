"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  slug: string;
};

export const ViewCounter: React.FC<Props> = ({ slug }) => {
  const [views, setViews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(`/api/views/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setViews(data.views);
        }
      } catch (error) {
        console.error("Failed to fetch views:", error);
        setViews(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchViews();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="mx-auto mt-6 flex items-center justify-center gap-2 text-zinc-400">
        <Eye className="w-5 h-5" />
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-6 flex items-center justify-center gap-2 text-zinc-400">
      <Eye className="w-5 h-5" />
      <span className="text-sm">
        {views?.toLocaleString() || 0} {views === 1 ? 'view' : 'views'}
      </span>
    </div>
  );
};