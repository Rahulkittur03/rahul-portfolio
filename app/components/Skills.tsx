"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerFast } from "./variants";

interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
}

const skillCategories: { category: string; skills: Skill[] }[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "⚛️", level: 90, color: "#61DAFB" },
      { name: "Next.js", icon: "▲", level: 85, color: "#ffffff" },
      { name: "TypeScript", icon: "TS", level: 82, color: "#3178C6" },
      { name: "JavaScript", icon: "JS", level: 90, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: "🌊", level: 88, color: "#38BDF8" },
      { name: "Material UI", icon: "🎨", level: 78, color: "#007FFF" },
    ],
  },
  {
    category: "Mobile & Backend",
    skills: [
      { name: "Android (Java)", icon: "🤖", level: 80, color: "#3DDC84" },
      { name: "Java", icon: "☕", level: 82, color: "#ED8B00" },
      { name: "Firebase", icon: "🔥", level: 75, color: "#FFCA28" },
      { name: "MySQL", icon: "🗄️", level: 72, color: "#4479A1" },
      { name: "REST APIs", icon: "🔌", level: 85, color: "#6366f1" },
      { name: "Redux", icon: "🔄", level: 78, color: "#764ABC" },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", icon: "🐙", level: 88, color: "#F05032" },
      { name: "Android Studio", icon: "🛠️", level: 80, color: "#3DDC84" },
      { name: "NumPy", icon: "🔢", level: 65, color: "#013243" },
      { name: "Pandas", icon: "🐼", level: 65, color: "#150458" },
      { name: "Matplotlib", icon: "📊", level: 60, color: "#11557C" },
      { name: "CI/CD", icon: "⚙️", level: 68, color: "#6366f1" },
    ],
  },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="glass rounded-xl p-4 group hover:border-indigo-500/30 transition-all cursor-default"
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold shrink-0"
          style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
        >
          <span style={{ color: skill.color }}>{skill.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold truncate">{skill.name}</p>
          <p className="text-slate-500 text-xs">{skill.level}%</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerFast}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
              What I work with
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
              Skills & <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              A curated set of tools and technologies I use to build modern
              applications.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="space-y-12">
            {skillCategories.map(({ category, skills }) => (
              <motion.div key={category} variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-lg font-semibold text-white">{category}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
                </div>
                <motion.div
                  variants={staggerFast}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
                >
                  {skills.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.p
            variants={fadeInUp}
            className="text-center text-slate-500 text-sm mt-12"
          >
            Always learning — currently exploring{" "}
            <span className="text-indigo-400">Rust</span> and{" "}
            <span className="text-violet-400">Three.js</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
