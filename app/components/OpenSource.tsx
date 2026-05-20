"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { fadeInUp, stagger } from "./variants";

const pinnedRepos = [
  {
    name: "MultitaskAR",
    description:
      "Android productivity app with notes, reminders, music, news, and voice assistant integration.",
    language: "Java",
    langColor: "#ED8B00",
    stars: 12,
    forks: 3,
    url: "https://github.com/Rahulkittur03/multitaskar",
  },
  {
    name: "Mobile Test Recorder",
    description:
      "Captures user interactions using Android AccessibilityService for automation testing.",
    language: "Java",
    langColor: "#ED8B00",
    stars: 8,
    forks: 2,
    url: "https://github.com/Rahulkittur03",
  },
  {
    name: "React Dashboard",
    description:
      "Modern analytics dashboard with real-time data visualization built with React & TypeScript.",
    language: "TypeScript",
    langColor: "#3178C6",
    stars: 15,
    forks: 4,
    url: "https://github.com/Rahulkittur03",
  },
  {
    name: "Next.js Portfolio",
    description:
      "Personal portfolio built with Next.js 16, Framer Motion, and Tailwind CSS.",
    language: "TypeScript",
    langColor: "#3178C6",
    stars: 6,
    forks: 1,
    url: "https://github.com/Rahulkittur03",
  },
];

const githubStats = [
  { label: "Public Repos", value: "20+", icon: "📦" },
  { label: "Total Stars", value: "50+", icon: "⭐" },
  { label: "Contributions", value: "500+", icon: "🔥" },
  { label: "Followers", value: "30+", icon: "👥" },
];

export default function OpenSource() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="opensource" className="section-padding bg-[#0f0f0f]">
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
              Open source
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
              GitHub <span className="gradient-text">Activity</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              I code outside of work too. Here&apos;s a snapshot of my GitHub
              activity and pinned repositories.
            </p>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          >
            {githubStats.map(({ label, value, icon }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="glass rounded-2xl p-5 text-center group hover:border-indigo-500/30 transition-all"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-3xl mb-2">{icon}</div>
                <div className="text-2xl font-bold gradient-text">{value}</div>
                <div className="text-slate-400 text-sm mt-1">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub Contribution Graph */}
          <motion.div
            variants={fadeInUp}
            className="glass rounded-2xl p-6 mb-12 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <GithubIcon size={18} className="text-indigo-400" />
                Contribution Graph
              </h3>
              <a
                href="https://github.com/Rahulkittur03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 text-sm hover:text-indigo-300 flex items-center gap-1"
              >
                View on GitHub <ExternalLink size={12} />
              </a>
            </div>

            {/* Embed GitHub contribution graph */}
            <div className="rounded-xl overflow-hidden bg-[#0d1117] p-4">
              <img
                src="https://ghchart.rshah.org/6366f1/rahulkittur"
                alt="Rahul Kittur GitHub contribution chart"
                className="w-full h-auto opacity-90"
                style={{ filter: "brightness(1.1)" }}
              />
              <p className="text-slate-500 text-xs text-center mt-3">
                Replace &quot;rahulkittur&quot; with your actual GitHub username
              </p>
            </div>
          </motion.div>

          {/* Pinned Repos */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="text-indigo-400">📌</span> Pinned Repositories
            </h3>
            <motion.div
              variants={stagger}
              className="grid sm:grid-cols-2 gap-4"
            >
              {pinnedRepos.map((repo) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  className="glass rounded-xl p-5 hover:border-indigo-500/30 transition-all group block"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <GithubIcon size={16} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
                      <span className="text-white font-semibold text-sm group-hover:text-indigo-400 transition-colors">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0" />
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {repo.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: repo.langColor }}
                      />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={12} />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} />
                      {repo.forks}
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
