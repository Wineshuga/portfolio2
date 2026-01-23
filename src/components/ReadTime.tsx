import { useMemo } from "react";

type ReadTimeProps = {
  content?: string;
  textColor?: string;
};

const ReadTime = ({ content = "", textColor }: ReadTimeProps) => {
  const WORDS_PER_MINUTE = 225;

  const readingTime = useMemo(() => {
    if (!content.trim()) return 0;

    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  }, [content]);

  return (
    <span className={textColor ? "text-black" : "text-[#ddd]"}>
      ~ {readingTime} min read
    </span>
  );
};

export default ReadTime;
