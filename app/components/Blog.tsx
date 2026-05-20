"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { fadeInUp, stagger } from "./variants";

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  emoji: string;
  color: string;
  url: string;
}

const articles: Article[] = [
  {
    title: "5 Things I Learned Optimizing a React App to 98 Lighthouse Score",
    excerpt:
      "Performance optimization is an art. Here's what I discovered while pushing a React app from 72 to 98 on Lighthouse — from code splitting to image optimization.",
    date: "Jan 2024",
    readTime: "8 min read",
    tags: ["React", "Performance", "Lighthouse"],
    emoji: "⚡",
    color: "#f59e0b",
    url: "#",
  },
  {
    title: "Building a Mobile Test Recorder with Android AccessibilityService",
    excerpt:
      "How I built a tool that records user interactions on Android and replays them — similar to Appium but built from scratch using AccessibilityService.",
    date: "Nov 2023",
    readTime: "12 min read",
    tags: ["Android", "Java", "Automation"],
    emoji: "🤖",
    color: "#3DDC84",
    url: "#",
  },
  {
    title: "Next.js App Router: What Changed and Why It Matters",
    excerpt:
      "A practical guide to migrating from Pages Router to App Router in Next.js — covering Server Components, layouts, and data fetching patterns.",
    date: "Sep 2023",
    readTime: "10 min read",
    tags: ["Next.js", "React", "TypeScript"],
    emoji: "▲",
    color: "#6366f1",
    url: "#",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
              Thoughts & learnings
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
              Blog & <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              I write about React, Android, performance, and things I learn
              while building software.
            </p>
          </motion.div>

          {/* Articles */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((article) => (
              <motion.a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="glass rounded-2xl overflow-hidden group block hover:border-indigo-500/30 transition-all"
                whileHover={{ y: -5 }}
              >
                {/* Article header */}
                <div
                  className="h-32 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `${article.color}10` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 30% 50%, ${article.color}20, transparent 70%)`,
                    }}
                  />
                  <span className="text-5xl relative z-10">{article.emoji}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="flex items-center gap-1 text-indigo-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <p className="text-slate-400 mb-4">
              More articles coming soon. Follow me for updates.
            </p>
            <motion.a
              href="https://dev.to/rahulkittur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-500/30 text-indigo-400 rounded-xl hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all articles
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
