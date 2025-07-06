import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeViz, setActiveViz] = useState("none");
  const [activeExperience, setActiveExperience] = useState(null);

  const experiences = [
    {
      title: "Specialist, Talent Analytics & Assessment",
      company: "Chicago Transportation Authority (CTA)",
      time: "July 2024 – Present",
      bullets: [
        "Data Cleaning & Attention to Detail - Led quality control checks and analyzed applicant data using VLookups and conditional formatting to ensure candidates were moved to the correct step in the hiring process, achieving 100% accuracy in applicant tracking for over 1,000 candidates per month.",
        "Data Analysis & Project/Client Management - Analyzed cross-departmental survey data to design and deliver tailored selection plans that enhanced role-person fit, improved hiring decisions, and reduced turnover by 5%.",
        "Quantitative Analysis & Statistical Methods - Analyzed internal client survey data from validation meetings, to ensure appropriate cut scores, resulting in a 10% improvement in the accuracy of candidate-job fit.",
        "Stakeholder Communication - Coordinated with multiple clients at a time to schedule testing for candidates using Taleo, increasing the efficiency of the hiring process by 15% and reducing delays in moving candidates."
      ]
    },
    {
      title: "Talent Analyst",
      company: "Trim-Tex",
      time: "May 2023 - January 2024 (Contract Role)",
      bullets: [
        "Data Storytelling - Influenced decision-making by communicating job analysis findings and recommendations to non-technical internal clients to outline new change initiatives for implementation across 4 departments.",
        "Research & Survey Analysis - Led the strategic alignment of roles with Trim-Tex's organizational values by conducting internal research and analyzing surveys to establish talent metrics such as functional competencies, boosting team alignment metrics by 20%."
      ]
    },
    {
      title: "Alternative Investments Arbitrage Analyst",
      company: "HypeHub",
      time: "August 2019 - January 2022",
      bullets: [
        "Client Communication - Created and delivered analytical guides on alternative arbitrage investments to 75+ clients, doubling engagement and supporting organizational growth over two years.",
        "Predictive Analysis - Leveraged in-depth analysis of sales market data points to synthesize insights and develop recommendations for future alternative arbitrage investments, boosting company performance by 40%."
      ]
    }
  ];

  return (
    <main className="bg-gray-950 text-white min-h-screen font-sans scroll-smooth">
      {/* Navigation Bookmarks */}
      <nav className="fixed top-4 right-4 z-50 flex gap-4 text-blue-500">
        <a href="#about" className="hover:underline">About</a>
        <a href="#experience" className="hover:underline">Experience</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 text-blue-500"
        >
          Akaash Khusal
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl text-gray-400"
        >
          A problem solver who happens to use data
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg text-gray-300 max-w-2xl text-center mt-4"
        >
          I'm an I/O Psychology professional with a passion for helping organizations to leverage their people/talent data to deliver unique recommendations and solutions. I love going deep and thinking about how to solve problems, as well as creating insightful visualizations to help bring actionable insights to life.
        </motion.p>
      </section>

      {/* About Me */}
      <motion.section id="about" {...fadeInUp} viewport={{ once: true }} className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2 text-blue-500">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, my name's Akaash and I'm passionate about using data to help organizations drive decision-making regarding its people. I first got into the People Analytics/data field after taking a class where I learned R during my Master's program. To others, I seemed to have a knack for it, and for me, I just felt like it clicked, so I wanted to learn more.<br/><br/>

          To that end, since learning R, I've gone on to teach myself/complete projects in SQL, PowerBi, Tableau, Excel, Visier, and even AI/LLMs.<br/><br/>

          I'm someone who loves to learn and find new and innovative ways to solve problems. In this day and age, I like to believe that any problem can be solved if researched thoroughly enough. I created this website because, honestly, in a sea of boring portfolios, I wanted to stand out, and I hope that I was able to accomplish that.<br/><br/>

          Aside from all of the work stuff, I live in Chicago and enjoy trying all of the fabulous restaurants here, playing volleyball/hanging out with my friends, playing chess, and watching TV (I'm currently watching Solo Leveling).
        </p>
      </motion.section>

      {/* Experience */}
      <motion.section id="experience" {...fadeInUp} viewport={{ once: true }} className="py-20 px-6 bg-gray-900 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2 text-blue-500">Experience</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          {experiences.map((exp, idx) => (
            <Button
              key={idx}
              variant="outline"
              className={`text-white border-gray-700 bg-gray-800 hover:bg-blue-600 ${activeExperience === idx ? "bg-blue-500 text-white" : ""}`}
              onClick={() => setActiveExperience(idx)}
            >
              {exp.title}
            </Button>
          ))}
        </div>
        {activeExperience !== null && (
          <motion.div {...fadeInUp} viewport={{ once: true }} className="mt-6">
            <h3 className="text-xl font-bold text-blue-500">{experiences[activeExperience].title} – {experiences[activeExperience].company}</h3>
            <p className="text-gray-400">{experiences[activeExperience].time}</p>
            <ul className="mt-6 text-gray-300 list-disc list-outside pl-6 space-y-4">
              {experiences[activeExperience].bullets.map((point, i) => (
                <li key={i} className="leading-relaxed">{point}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.section>

      {/* Projects */}
      <motion.section id="projects" {...fadeInUp} viewport={{ once: true }} className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2 text-blue-500">Projects</h2>
        <div className="grid gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Data Visualizations</h3>
            <p className="text-gray-300 mb-4">Built dashboards to visualize employee engagement and HR metrics.</p>
            <div className="flex gap-4">
              <Button onClick={() => setActiveProject(activeProject === 'powerbi1' ? null : 'powerbi1')} className="bg-blue-600 text-white hover:bg-blue-500">PowerBI - Workforce Strategies</Button>
              <Button onClick={() => setActiveProject(activeProject === 'powerbi2' ? null : 'powerbi2')} className="bg-blue-600 text-white hover:bg-blue-500">PowerBI - Sneaker Data</Button>
              <Button onClick={() => setActiveProject(activeProject === 'tableau' ? null : 'tableau')} className="bg-blue-600 text-white hover:bg-blue-500">Tableau</Button>
            </div>
            {activeProject === 'powerbi1' && (
              <div className="text-gray-300 mt-4 space-y-2">
                <p>This dashboard visualizes employee engagement scores across departments and tenure groups.</p>
                <ul className="list-disc list-inside">
                  <li>Created with Power BI using DAX and page navigation</li>
                  <li>Interactive filtering by role, manager, and location</li>
                  <li>Presented to the CHRO to support retention initiatives</li>
                </ul>
                <img src="/images/powerbi_engagement.png" alt="Power BI Engagement Dashboard" className="rounded-md border border-gray-700 mt-2" />
              </div>
            )}
            {activeProject === 'powerbi2' && (
  <div className="text-gray-300 mt-4">
    <p>In this project, I created a visualization of sneaker resale data to uncover trends in the secondary sneaker market. The dashboard highlights which sneakers have historically delivered the highest resale value over time. I also integrated commodity data (e.g., gold, silver) to compare returns and analyze whether sneakers or traditional investments offered better long-term ROI.</p>
    <img src="/images/stockx.png" alt="Sneaker Data Visualization" className="rounded-md border border-gray-700 mt-4" />
    <a
      href="/files/stockx-analysis.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 text-blue-400 underline hover:text-blue-300"
    >
      View Full Analysis PDF
    </a>
  </div>
)}
            {activeProject === 'tableau' && (
              <p className="text-gray-300 mt-2">Created interactive Tableau dashboards showcasing training completion, employee demographics, and tenure distribution across job families.</p>
            )}
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">R Projects</h3>
            <p className="text-gray-300 mb-4">Turnover prediction and workforce segmentation using logistic regression and clustering.</p>
            <div className="flex gap-4">
              <Button onClick={() => setActiveProject(activeProject === 'cleaning' ? null : 'cleaning')} className="bg-blue-600 text-white hover:bg-blue-500">Cleaning Data in R</Button>
              <Button onClick={() => setActiveProject(activeProject === 'burnout' ? null : 'burnout')} className="bg-blue-600 text-white hover:bg-blue-500">Measuring Burnout in R</Button>
            </div>
            {activeProject === 'cleaning' && (
              <div className="text-gray-300 mt-4 space-y-2">
                <p>Cleaned and transformed messy survey data using dplyr and tidyr for downstream analysis and dashboard reporting.</p>
                <ul className="list-disc list-inside">
                  <li>Standardized missing values, factor levels, and text responses</li>
                  <li>Recoded variables for easier analysis and visualization</li>
                  <li>Prepared final tidy dataset used in reporting dashboards</li>
                </ul>
                <img src="/images/cleaning_project.png" alt="Cleaning Project Screenshot" className="rounded-md border border-gray-700 mt-2" />
              </div>
            )}
            {activeProject === 'burnout' && (
              <p className="text-gray-300 mt-2">Used PCA and k-means clustering to identify employees with high engagement but low motivation, signaling potential burnout.</p>
            )}
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">SQL Projects</h3>
            <p className="text-gray-300">Compensation benchmarking and recruitment KPIs using complex queries.</p>
            <div className="mt-4">
              <Button onClick={() => setActiveProject(activeProject === 'sqltest' ? null : 'sqltest')} className="bg-blue-600 text-white hover:bg-blue-500">Candidate Test Check</Button>
            </div>
            {activeProject === 'sqltest' && (
              <p className="text-gray-300 mt-2">SQL scripts that checked test eligibility by comparing dates, pass/fail history, and Taleo IDs for over 1,000 candidates.</p>
            )}
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Excel Tools</h3>
            <p className="text-gray-300">Dynamic tools with pivot tables and formulas for workforce analysis.</p>
          </div>
        </div>
      </motion.section>

      {/* Technical Skills */}
      <motion.section id="skills" {...fadeInUp} viewport={{ once: true }} className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2 text-blue-500">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { name: 'R Studio', src: '/logos/rstudio.png' },
            { name: 'SQL', src: '/logos/sql.png' },
            { name: 'Excel', src: '/logos/excel.png' },
            { name: 'Tableau', src: '/logos/tableau.png' }
          ].map((tool, i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-md">
              <img src={tool.src} alt={tool.name} className="h-16 mb-2" />
              <span className="text-gray-300 text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" {...fadeInUp} viewport={{ once: true }} className="py-16 px-6 text-center bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Let’s Connect</h2>
        <p className="text-white mb-6 max-w-xl mx-auto">
          I’m currently exploring analyst opportunities and always open to collaborations, analytics challenges, or a good coffee chat. If you have a position, collaboration, or referral in mind, I’d love to hear from you!
        </p>
        <form className="max-w-xl mx-auto text-left space-y-6">
          <div>
            <label className="block text-gray-400 mb-1">Name</label>
            <input type="text" className="w-full px-4 py-2 bg-gray-800 text-white rounded-md" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 bg-gray-800 text-white rounded-md" placeholder="Your email" />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Message</label>
            <textarea rows="5" className="w-full px-4 py-2 bg-gray-800 text-white rounded-md" placeholder="Your message"></textarea>
          </div>
          <Button type="submit" className="text-lg border border-white px-6 py-2 rounded-md">Send Message</Button>
        </form>
      </motion.section>
    </main>
  );
}
