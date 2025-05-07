"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 100%", "end -50%"]
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  // 使用正则表达式匹配"Web3 social platform"，并用特殊标记替换
  // 但这个标记不会出现在最终的UI中
  const highlightPhrase = "Web3 social platform";
  
  // 确保用分词而不是分字符，保留原始空格
  // 使用正则表达式查找"Web3 social platform"并给它一个特殊标记
  const processedContent = children.split(" ").map(word => {
    if (word === "Web3") {
      const nextTwoWords = children.indexOf("Web3 social platform");
      if (nextTwoWords >= 0) {
        return "___HIGHLIGHT_START___";
      }
    } else if (word === "social" && children.includes("Web3 social platform")) {
      return "___HIGHLIGHT_MIDDLE___";
    } else if (word === "platform" && children.includes("Web3 social platform")) {
      return "___HIGHLIGHT_END___";
    }
    return word;
  });

  return (
    <div ref={targetRef} className={cn("relative", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl leading-relaxed text-center">
        {processedContent.map((word, i) => {
          // 计算非常慢的动画区间
          const totalWords = processedContent.length;
          // 使每个单词占用更大的滚动区间
          const segment = 0.5 / totalWords; 
          const start = i * segment * 0.5; // 每个词在滚动的早期就开始显示
          const end = start + 0.1; // 让每个词有更长的淡入时间
          
          // 处理特殊的高亮词组
          let actualWord = word;
          let isHighlighted = false;
          
          if (word === "___HIGHLIGHT_START___") {
            actualWord = "Web3";
            isHighlighted = true;
          } else if (word === "___HIGHLIGHT_MIDDLE___") {
            actualWord = "social";
            isHighlighted = true;
          } else if (word === "___HIGHLIGHT_END___") {
            actualWord = "platform";
            isHighlighted = true;
          }
          
          return (
            <Word 
              key={i} 
              progress={scrollYProgress} 
              range={[start, end]}
              highlight={isHighlighted}
            >
              {actualWord}
            </Word>
          );
        })}
      </h2>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  highlight?: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, highlight = false }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const textClass = highlight ? "text-purple-400" : "";
  
  return (
    <span className="inline-block mx-1">
      <motion.span
        style={{ opacity }}
        className={textClass}
      >
        {children}
      </motion.span>
    </span>
  );
}; 