"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

interface Project {
  title: string;
  description: string;
  longDesc: string;
  tech: string[];
  github: string;
  live: string;
  emoji: string;
  color: string;
  featured?: boolean;
  category: string;
}

const projects: Project[] = [
  {
    title: "MultitaskAR",
    description:
      "Android productivity app with notes, reminders, music, news, and voice assistant integration.",
    longDesc:
      "A comprehensive Android productivity application that combines multiple utilities — notes management, smart reminders, music player, live news feed, and an integrated voice assistant — all in one seamless experience.",
    tech: ["Android", "Java", "Firebase", "Android Studio", "REST APIs"],
    github: "https://github.com/rahulkittur/multitaskar",
    live: "#",
    emoji: "🤖",
    color: "#3DDC84",
    featured: true,
    category: "Mobile",
  },
  {
    title: "Mobile Test Recorder",
    description:
      "Captures user interactions using Android AccessibilityService for automation testing.",
    longDesc:
      "An automation-focused Android tool that records user interactions using AccessibilityService, generating replayable test scripts similar to Appium. Designed for QA engineers and developers who need mobile test automation.",
    tech: ["Android", "Java", "AccessibilityService", "Automation"],
    github: "https://github.com/rahulkittur/mobile-test-recorder",
    live: "#",
    emoji: "🎬",
    color: "#6366f1",
    featured: true,
    category: "Mobile",
  },
  {
    title: "React Dashboard",
    description:
      "A modern analytics dashboard with real-time data visualization and responsive design.",
    longDesc:
      "Full-featured analytics dashboard built with React and TypeScript. Features interactive charts, data tables, dark mode, and a clean component architecture using Redux for state management.",
    tech: ["React", "TypeScript", "Redux", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/rahulkittur",
    live: "#",
    emoji: "📊",
    color: "#8b5cf6",
    featured: true,
    category: "Web",
  },
  {
    title: "Next.js E-Commerce",
    description:
      "Full-stack e-commerce platform with product listings, cart, and checkout flow.",
    longDesc:
      "A performant e-commerce application built with Next.js App Router, featuring SSR product pages, a shopping cart with Redux, Firebase authentication, and a clean checkout experience.",
    tech: ["Next.js", "TypeScript", "Firebase", "Redux", "Tailwind CSS"],
    github: "https://github.com/rahulkittur",
    live: "#",
    emoji: "🛒",
    color: "#f59e0b",
    category: "Web",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application with location detection and 7-day forecast.",
    longDesc:
      "A clean weather app using the OpenWeatherMap API with geolocation support, animated weather icons, hourly and 7-day forecasts, and a beautiful glassmorphism UI.",
    tech: ["React", "JavaScript", "REST APIs", "CSS Modules"],
    github: "https://github.com/rahulkittur",
    live: "#",
    emoji: "🌤️",
    color: "#38bdf8",
    category: "Web",
  },
  {
    title: "Data Analysis Toolkit",
    description:
      "Python-based data analysis and visualization tool using NumPy, Pandas, and Matplotlib.",
    longDesc:
      "A data analysis toolkit that processes CSV datasets, generates statistical summaries, and creates publication-quality visualizations using NumPy, Pandas, and Matplotlib.",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/rahulkittur",
    live: "#",
    emoji: "📈",
    color: "#10b981",
    category: "Data",
  },
];

const categories = ["All", "Web", "Mobile", "Data"];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="glass rounded-2xl overflow-hidden group relative"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium">
          <Star size={10} fill="currentColor" />
          Featured
        </div>
      )}

      {/* Project preview */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ background: `${project.color}10` }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.color}40, transparent 70%)`,
          }}
        />
        <motion.div
          className="text-6xl"
          animate={hovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {project.emoji}
        </motion.div>

        {/* Category badge */}
        <div
          className="absolute bottom-3 left-3 px-2 py-1 rounded-lg text-xs font-medium"
          style={{
            background: `${project.color}20`,
            border: `1px solid ${project.color}30`,
            color: project.color,
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {hovered ? project.longDesc : project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:text-white hover:border-white/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon size={14} />
            Code
          </motion.a>
          {project.live !== "#" && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white font-medium transition-all"
              style={{
                background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
                border: `1px solid ${project.color}30`,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={14} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
              What I&apos;ve built
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              A selection of projects that showcase my skills across web and
              mobile development.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 mb-10 flex-wrap"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>

          {/* GitHub CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <motion.a
              href="https://github.com/rahulkittur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-500/30 text-indigo-400 rounded-xl hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GithubIcon size={18} />
              View all projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
