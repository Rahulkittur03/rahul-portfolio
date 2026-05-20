"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { fadeInUp, stagger } from "./variants";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  emoji: string;
  color: string;
  bullets: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Freelance / Client Projects",
    location: "Remote",
    period: "2023 – Present",
    type: "Freelance",
    emoji: "💻",
    color: "#6366f1",
    current: true,
    bullets: [
      "Built and delivered multiple client web applications using React.js, Next.js, and Tailwind CSS",
      "Implemented responsive UI components with a focus on performance and accessibility",
      "Integrated REST APIs and Firebase for real-time data and authentication",
    ],
  },
  {
    role: "Android Developer Intern",
    company: "Tech Startup",
    location: "India",
    period: "2022 – 2023",
    type: "Internship",
    emoji: "🤖",
    color: "#3DDC84",
    bullets: [
      "Developed MultitaskAR — a productivity Android app with notes, reminders, music, and voice assistant",
      "Built Mobile Test Recorder using Android AccessibilityService for UI automation testing",
      "Collaborated with the team on code reviews, bug fixes, and feature planning",
    ],
  },
  {
    role: "MCA Student & Developer",
    company: "University",
    location: "India",
    period: "2021 – 2023",
    type: "Education",
    emoji: "🎓",
    color: "#f59e0b",
    bullets: [
      "Completed Master of Computer Applications with focus on software engineering",
      "Built academic projects in Java, Android, and web technologies",
      "Explored data analysis using Python, NumPy, Pandas, and Matplotlib",
    ],
  },
];

function TimelineItem({
  exp,
  index,
  isLast,
}: {
  exp: Experience;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 z-10"
          style={{
            background: `${exp.color}15`,
            border: `2px solid ${exp.color}40`,
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {exp.emoji}
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-0.5 flex-1 mt-2"
            style={{ background: `linear-gradient(to bottom, ${exp.color}40, transparent)` }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-10">
        <motion.div
          className="glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all group"
          whileHover={{ y: -3 }}
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors">
                  {exp.role}
                </h3>
                {exp.current && (
                  <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-medium">
                    Current
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <Briefcase size={13} />
                  {exp.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={13} />
                  {exp.location}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="flex items-center gap-1 text-sm text-slate-400">
                <Calendar size={13} />
                {exp.period}
              </span>
              <span
                className="px-2 py-0.5 rounded-full text-xs font-medium"
                style={{
                  background: `${exp.color}15`,
                  border: `1px solid ${exp.color}30`,
                  color: exp.color,
                }}
              >
                {exp.type}
              </span>
            </div>
          </div>

          {/* Bullets */}
          <ul className="space-y-2">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: exp.color }}
                />
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-[#0a0a14]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
              My journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              A timeline of my professional journey, projects, and growth as a
              developer.
            </p>
          </motion.div>

          {/* Timeline */}
          <div>
            {experiences.map((exp, i) => (
              <TimelineItem
                key={exp.role}
                exp={exp}
                index={i}
                isLast={i === experiences.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
