"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import * as Icons from "lucide-react";
import emailjs from "emailjs-com";
import {
  GraduationCap,
  Mail,
  ShieldCheck,
  Clock,
  Pencil,
  BookOpen,
  Code,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Section Wrapper
type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16 md:py-24 scroll-mt-20">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-pink-600"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className="mt-2 text-base md:text-lg text-slate-700">{subtitle}</p>
      )}
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-20 backdrop-blur border-b border-pink-200/60 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-pink-500 text-white grid place-items-center shadow">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-semibold tracking-tight text-pink-700">
              Academic Commission 
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#hero" className="hover:text-pink-600">Home</a>
            <a href="#services" className="hover:text-pink-600">Services</a>
            <a href="#how-i-work" className="hover:text-pink-600">How I Work</a>
            <a href="#faq" className="hover:text-pink-600">FAQ</a>
            <a href="#contact" className="hover:text-pink-600">Contact</a>
          </nav>

          {/* CTA Button (Desktop only) */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-xl bg-pink-500 text-white shadow hover:shadow-md"
          >
            <Mail className="w-4 h-4" />
            Get a Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-pink-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-pink-200">
            <nav className="flex flex-col p-4 gap-4 text-sm">
              <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-pink-600">
                Services
              </a>
              <a href="#how-i-work" onClick={() => setMenuOpen(false)} className="hover:text-pink-600">
                How I Work
              </a>
              <a href="#faq" onClick={() => setMenuOpen(false)} className="hover:text-pink-600">
                FAQ
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-pink-600">
                Contact
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-xl bg-pink-500 text-white shadow hover:shadow-md"
              >
                <Mail className="w-4 h-4" />
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </header>


      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-pink-700"
              >
                Academic, Design, and Solutions — All in One Place
              </motion.h1>

              <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                As your <span className="font-semibold">Academic Commissioner</span>, I provide clear, reliable support in three areas:
                <br />• <span className="font-semibold">Website Development</span> — front-end, back-end, and full-stack projects.
                <br />• <span className="font-semibold">Editing & Design</span> — logo, report, and infographic.
                <br />• <span className="font-semibold">Math & Science Solutions</span> — from basic math to calculus, physics, and chemistry.
              </p>
                
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#services"
                  className="px-5 py-3 rounded-2xl bg-pink-500 text-white font-medium shadow"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-2xl border border-pink-300 font-medium text-pink-700"
                >
                  Get in Touch
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Trusted academic partnership.
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Fast and dependable results.
                </div>
              </div>
            </div>
      
            <div className="flex justify-center md:justify-end">
              <Image
                src="/hero-img.jpg"      
                alt="Academic Commissioner"
                width={420}
                height={520}
                className="rounded-2xl shadow-lg w-auto h-auto object-cover"
                priority
                sizes="(min-width: 768px) 420px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Services */}
      <section id="services" className="py-16 bg-pink-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">Services</h2>
          <p className="text-gray-700 mb-10">
            Clear deliverables, collaborative process, student-first values.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Editing & Design */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-left 
                            transition transform hover:-translate-y-2 hover:scale-105 
                            hover:shadow-lg hover:shadow-pink-200">
              <div className="flex items-center mb-4">
                <Pencil className="w-6 h-6 text-pink-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Design & Editing
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Logos</li>
                <li>Resumes</li>
                <li>Brochures</li>
                <li>Infographics</li>
                <li>PowerPoint</li>
                <li>Report Formatting</li>
                <li>UI/UX</li>
                <li>Graphics</li>
              </ul>
            </div>

            {/* Math & Science Solutions */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-left 
                            transition transform hover:-translate-y-2 hover:scale-105 
                            hover:shadow-lg hover:shadow-pink-200">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-pink-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Math & Science Solutions
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Calculus</li>
                <li>Basic Math</li>
                <li>General Math</li>
                <li>Math in the Modern World</li>
                <li>Statistics & Probability</li>
                <li>Algebra</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-left 
                            transition transform hover:-translate-y-2 hover:scale-105 
                            hover:shadow-lg hover:shadow-pink-200">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-pink-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Web Development
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Front-end</li>
                <li>Back-end</li>
                <li>Full-stack</li>
                <li>System Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* How I Work */}
      <Section
        id="how-i-work"
        title="How I Work"
        subtitle="A simple, transparent process so you know exactly what to expect."
      >
        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-7 left-0 w-full h-0.5 bg-pink-200 z-0" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                step: "1",
                title: "Consultation",
                desc: "We discuss your goals, whether it’s tutoring, editing, or a web project. Clear understanding comes first.",
                icon: "MessageSquare",
              },
              {
                step: "2",
                title: "Proposal",
                desc: "I share a clear plan — scope, timeline, and expected outcomes. For tutoring, this means a study plan; for projects, a roadmap.",
                icon: "FileText",
              },
              {
                step: "3",
                title: "Collaboration",
                desc: "We work together. Sessions are interactive, and project progress is shared openly with feedback opportunities.",
                icon: "Users",
              },
              {
                step: "4",
                title: "Delivery & Feedback",
                desc: "Final results are shared. Tutoring notes or project files are delivered, with space for revisions or reflection.",
                icon: "CheckCircle2",
              },
            ].map((item, index) => {
              const Icon = Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex flex-col items-start md:items-center text-left md:text-center"
                >
                  {/* Circle with Icon + Step Number */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: index * 0.2 + 0.1,
                    }}
                    viewport={{ once: true }}
                    className="relative w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center border-2 border-pink-300 z-10"
                  >
                    {Icon && <Icon className="w-6 h-6 text-pink-600" />}
                    <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-pink-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {item.step}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="mt-4 font-semibold text-pink-700">{item.title}</div>
                  <p className="mt-2 text-sm text-slate-600 max-w-xs">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>


      {/* Contact */}
      <Section
        id="contact"
        title="Contact Us"
        subtitle="Fill out the form below and we'll get back to you within 24 hours."
      >
        <Card className="rounded-3xl border bg-white shadow-sm">
          <CardContent className="p-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.target as HTMLFormElement;

                // Add current time 
                const timeInput = document.createElement("input");
                timeInput.type = "hidden";
                timeInput.name = "time";
                timeInput.value = new Date().toLocaleString(); 
                form.appendChild(timeInput);

                emailjs
                  .sendForm(
                    "service_tl8pilq",   // EmailJS Service ID
                    "template_w9yxgzv",  // EmailJS Template ID
                    e.target as HTMLFormElement,
                    "8NVS0TuDBOESA4o2A" // Public Key 
                  )
                  .then(() => {
                    setFormMessage({ text: "Message sent successfully!", type: "success" });
                    form.reset();

                    // Clear message after 5 seconds
                    setTimeout(() => setFormMessage(null), 5000);
                  })
                  .catch((error) => {
                    console.error(error);
                    setFormMessage({ text: "Failed to send message. Please try again.", type: "error" });
                  });
              }}
              className="grid md:grid-cols-2 gap-6"
            >
                {/* Name */}
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label className="text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    name="reply_to"
                    required
                    placeholder="you@email.com"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-sm font-medium">Select a services</label>
                  <select
                    name="services"
                    required
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
                  >
                    <option value="">Select one...</option>
                    <option value="design and editing">🎨 Design and Editing</option>
                    <option value="solutions">📚 Solutions</option>
                    <option value="web">💻 Web Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    required
                    placeholder="What do you need help with?"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
                  />
                </div>
            
                {/* Button */}
                <div className="md:col-span-2"></div>
                  <Button
                    type="submit"
                    className="w-40 rounded-xl bg-white text-pink-600 font-semibold 
                              border-2 border-pink-500 border-b-4 
                              py-2 shadow-sm hover:bg-pink-50 
                              transition-all duration-300 disabled:opacity-60"
                  >
                    Send Message
                  </Button>

                  {/* Success/Error message */}
                  {formMessage && (
                    <p
                      className={`mt-3 text-sm ${
                        formMessage.type === "success" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {formMessage.text}
                    </p>
                  )}  
            </form>
          </CardContent>
        </Card>
      </Section>


      {/* Footer */}
      <footer className="border-t bg-pink-50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-slate-700">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-5 h-5 text-pink-600" />
              <span className="font-semibold text-pink-700">Academic Commission</span>
            </div>
            <p className="text-slate-600">
              Helping students and organizations with clear solutions in design,
              tutoring, and web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-pink-700 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-pink-600">Services</a></li>
              <li><a href="#how-i-work" className="hover:text-pink-600">How I Work</a></li>
              <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-pink-700 mb-3">Get in Touch</h4>
            <p>
              Email:{" "}
              <a
                href="mailto:lexiecommission@gmail.com"
                className="text-pink-600 hover:underline hover:text-pink-700"
              >
                lexiecommission@gmail.com
              </a>
            </p>

            <p className="mt-2">Office Hours: Monday - Friday, 9am – 10pm</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/lexcommission"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-pink-600"
              >
                <Icons.Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/lexiecomms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-pink-600"
              >
                <Icons.Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t text-center py-4 text-xs text-slate-500">
          © {new Date().getFullYear()} LEXIE. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
