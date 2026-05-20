"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { fadeInUp, stagger } from "./variants";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rahulkittur3@email.com",
    href: "mailto:rahulkittur3@email.com",
    color: "#6366f1",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/rahulkittur",
    href: "https://linkedin.com/in/rahul-kittur/",
    color: "#0A66C2",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/rahulkittur",
    href: "https://github.com/Rahulkittur03",
    color: "#ffffff",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
    color: "#10b981",
  },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending — replace with your actual API call (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all text-sm";

  return (
    <section id="contact" className="section-padding bg-[#0a0a14]">
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
              Let&apos;s connect
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Have a project in mind, a job opportunity, or just want to say hi?
              My inbox is always open.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={stagger} className="space-y-6">
              <motion.div variants={fadeInUp}>
                <h3 className="text-white font-bold text-xl mb-2">
                  Let&apos;s build something together
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  I&apos;m currently open to new opportunities — whether
                  it&apos;s a full-time role, freelance project, or an
                  interesting collaboration. I&apos;ll get back to you within 24
                  hours.
                </p>
              </motion.div>

              <motion.div variants={stagger} className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    variants={fadeInUp}
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:border-indigo-500/30 transition-all group"
                    whileHover={{ x: 4 }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-indigo-400 transition-colors">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Availability badge */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
              >
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse shrink-0" />
                <p className="text-green-400 text-sm font-medium">
                  Available for new opportunities — response within 24h
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm"
                  >
                    <CheckCircle size={16} />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                  whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                >
                  {status === "sending" ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
