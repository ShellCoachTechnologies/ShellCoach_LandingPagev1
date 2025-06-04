
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1C2C] text-white font-sans">
      <Head>
        <title>ShellCoach Technologies | Master Linux. Command Your Future.</title>
        <meta name="description" content="ShellCoach Technologies is an AI-powered Linux learning platform designed to help beginners and career switchers master Linux through hands-on simulations, real-time command explanations, and career-ready labs." />
        <meta name="keywords" content="Linux training, AI terminal, ShellCoach, Linux simulator, Linux education, CompTIA Linux+, tech careers" />
        <meta name="author" content="ShellCoach Technologies" />
        <meta property="og:title" content="ShellCoach Technologies" />
        <meta property="og:description" content="Master Linux. Command Your Future with the world's first AI-powered Linux terminal simulator." />
        <meta property="og:image" content="/ShellCoach-Technologies-PrimaryLogo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shellcoach.tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <img src="/ShellCoach-Technologies-PrimaryLogo.png" alt="ShellCoach Logo" className="h-14" />
        <nav className="space-x-6 text-sm md:text-base">
          <a href="#demo" className="text-gray-300 hover:text-white">Product</a>
          <a href="#students" className="text-gray-300 hover:text-white">Testimonials</a>
          <a href="#get-started" className="text-cyan-400 font-semibold hover:underline">Get Started</a>
        </nav>
      </header>

      <section className="text-center py-32 px-4 bg-gradient-to-b from-[#0B1C2C] to-[#122A3C]">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Master Linux. <br className="md:hidden" /> Command Your Future.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          The world’s first AI-powered Linux learning simulator. Built for beginners, designed for career-changers, trusted by instructors.
        </p>
        <a href="#demo" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-xl text-lg transition">
          Try the ShellCoach Demo
        </a>
      </section>

      <section className="bg-[#122A3C] py-20 px-6" id="demo">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What is ShellCoach?</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            ShellCoach Technologies delivers modern Linux education through an immersive, browser-based terminal with AI coaching and real-world lab practice.
          </p>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">🧠 AI-Powered Command Guidance</h3>
              <p className="text-gray-400">Each command you type is explained in real-time, turning every session into a teachable moment.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">💻 Real Linux Simulations</h3>
              <p className="text-gray-400">No installations, no setup. Learn in a browser using a simulated Linux environment that mirrors the real world.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">🚀 Career-Ready Labs</h3>
              <p className="text-gray-400">Practice sysadmin tasks and prepare for certification exams with our curated lab scenarios.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1C2C] py-24 px-6" id="students">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What Our Students Say</h2>
          <blockquote className="text-xl italic text-gray-200 mb-4">“I went from zero Linux knowledge to landing a sysadmin job in 90 days. ShellCoach changed my life.”</blockquote>
          <p className="text-cyan-400 font-medium">— J. Thompson, Former Student</p>
        </div>
      </section>

      <section className="bg-cyan-600 py-24 px-6 text-center" id="get-started">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Start Your Linux Journey Today</h2>
        <p className="text-lg text-white mb-8 max-w-xl mx-auto">
          Download our free Linux Starter Kit and get instant access to the ShellCoach simulator.
        </p>
        <a href="#" className="bg-white text-cyan-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 text-lg transition">
          Download Starter Kit
        </a>
      </section>

      <footer className="bg-[#08141E] text-gray-400 py-8 text-center text-sm">
        © {new Date().getFullYear()} ShellCoach Technologies. All rights reserved.
      </footer>
    </div>
  );
}
