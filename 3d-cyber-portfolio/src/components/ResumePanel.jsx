import React from "react";

export default function ResumePanel() {
  return (
    <div
      style={{ width: "100%", maxWidth: 540 }}
      className="text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-6 w-full max-w-[98vw] sm:max-w-[540px] mx-auto"
    >
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 break-words">DUSTIN PERRY</h1>
  <div className="text-sm sm:text-base opacity-80 break-words">
        Indianapolis, IN 46227 • (463) 302-8429 • dperry713@gmail.com
      </div>
  <div className="text-sm sm:text-base mt-1 opacity-80 flex flex-wrap gap-x-2 gap-y-1 items-center break-all">
        <span>LinkedIn: </span>
        <a
          href="https://www.linkedin.com/in/dustin-perry"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline hover:text-cyan-300"
        >
          linkedin.com/in/dustin-perry
        </a>
        <span className="mx-1">•</span>
        <span>GitHub: </span>
        <a
          href="https://www.github.com/dperry713"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline hover:text-cyan-300"
        >
          github.com/dperry713
        </a>
      </div>

      <section className="mt-4">
        <h2 className="font-semibold text-lg sm:text-xl">Professional Summary</h2>
        <p className="text-base sm:text-lg opacity-90">
          Hybrid Full Stack Developer & Cybersecurity Specialist with
          certifications in Frontend & Backend Development and Advanced
          Cybersecurity. Skilled in React, JavaScript, Python, Flask, MySQL,
          threat intelligence, vulnerability scanning, and incident response.
          Combines secure coding practices with proactive threat mitigation to
          deliver robust software solutions.
        </p>
      </section>

      <section className="mt-3">
        <h3 className="font-semibold text-base sm:text-lg">Core Competencies</h3>
        <ul className="text-sm sm:text-base list-disc list-inside">
          <li>
            Full Stack Development: HTML5, CSS3, JavaScript, React, Python,
            Flask, MySQL, REST APIs
          </li>
          <li>
            Cybersecurity: Threat Intelligence, Risk Analysis, Vulnerability
            Management, Linux Security, Compliance
          </li>
          <li>Tools: Git, Linux, API Integration, Agile/Scrum</li>
          <li>Secure DevOps: Code Review, Access Control, Data Encryption</li>
        </ul>
      </section>

      <section className="mt-3">
        <h3 className="font-semibold text-base sm:text-lg">Certifications</h3>
        <ul className="text-sm sm:text-base list-disc list-inside">
          <li>Frontend Development Certificate, Coding Temple — Nov 2024</li>
          <li>Backend Development Certificate, Coding Temple — Nov 2024</li>
          <li>
            Advanced Cybersecurity Certificate, University of Phoenix — Jul 2024
          </li>
        </ul>
      </section>

      <section className="mt-3">
        <h3 className="font-semibold text-base sm:text-lg">Professional Experience</h3>
        <div className="text-sm sm:text-base">
          <strong>Project Manager – Keep It Wet | Indianapolis, IN</strong>{" "}
          <span className="opacity-80">(Mar 2020 – Present)</span>
          <ul className="list-disc list-inside">
            <li>
              Oversaw hybrid projects involving both development and security,
              delivering 98% on time.
            </li>
            <li>
              Integrated secure APIs and implemented access control measures,
              blocking 5 intrusion attempts.
            </li>
            <li>
              Conducted vulnerability tests pre-launch, reducing security issues
              by 30% in production.
            </li>
          </ul>
          <strong className="mt-2 block">
            Service Technician – E-Practical Solutions | Indianapolis, IN
          </strong>{" "}
          <span className="opacity-80">(Feb 2017 – Apr 2019)</span>
          <ul className="list-disc list-inside">
            <li>
              Implemented secure enterprise systems with encryption and
              authentication features.
            </li>
            <li>
              Optimized software deployment processes, reducing downtime by 20%.
            </li>
            <li>
              Ensured compliance with HIPAA and internal IT security policies.
            </li>
          </ul>
          <strong className="mt-2 block">
            Machine Operator – Richardson Molding LLC | Columbus, IN
          </strong>{" "}
          <span className="opacity-80">(Jul 2019 – May 2020)</span>
          <ul className="list-disc list-inside">
            <li>
              Applied operational monitoring strategies aligned with
              cybersecurity uptime tracking.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-3">
        <h3 className="font-semibold text-base sm:text-lg">Education</h3>
        <ul className="text-sm sm:text-base list-disc list-inside">
          <li>Frontend Development Certificate, Coding Temple — Nov 2024</li>
          <li>Backend Development Certificate, Coding Temple — Nov 2024</li>
          <li>
            Advanced Cybersecurity Certificate, University of Phoenix — Jul 2024
          </li>
        </ul>
      </section>

      {/* Removed interactive expansion placeholder */}
    </div>
  );
}
