"use client";

import { useState, useEffect } from "react";

// Sunflower SVG Component
const Sunflower = ({ className = "", size = 60, style = {} }: { className?: string; size?: number; style?: React.CSSProperties }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    style={style}
  >
    {/* Petals */}
    {[...Array(12)].map((_, i) => (
      <ellipse
        key={i}
        cx="50"
        cy="20"
        rx="8"
        ry="18"
        fill="#ffc107"
        transform={`rotate(${i * 30} 50 50)`}
        style={{ filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.1))" }}
      />
    ))}
    {/* Center */}
    <circle cx="50" cy="50" r="18" fill="#5d4037" />
    <circle cx="50" cy="50" r="14" fill="#795548" />
    {/* Seeds pattern */}
    {[...Array(8)].map((_, i) => (
      <circle
        key={i}
        cx={50 + 8 * Math.cos((i * 45 * Math.PI) / 180)}
        cy={50 + 8 * Math.sin((i * 45 * Math.PI) / 180)}
        r="2"
        fill="#5d4037"
      />
    ))}
  </svg>
);

// Heart SVG Component
const Heart = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Instagram Icon
const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Timeline data
const timelineEvents = [
  {
    date: "The Beginning",
    title: "We Met on Instagram",
    description: "A simple follow, a casual message, and little did we know that our story was just beginning. The universe had its own plans for us. 💫",
    icon: "instagram",
    emoji: "📱",
  },
  {
    date: "December 13, 2025",
    title: "Hey Stranger ☺️",
    description: "A couple of random texts, funny comments, great conversations later, long phone calls and even deeper conversations. Quite rare to connect intellectually these days. A willingness to build a friendship and an interest to build a relationship. 💬",
    icon: "heart",
    emoji: "💕",
  },
  {
    date: "December 26, 2025",
    title: "Boxing Day Revelation",
    description: "\"Okay God I see you\" - Is this who I've been prepared for? A few more FaceTime calls and virtual movie dates later, I knew God had just brought me my wife. 🙏",
    icon: "heart",
    emoji: "✨",
  },
  {
    date: "New Year's Eve 2025",
    title: "The Prayer",
    description: "On one of our calls, a heartfelt prayer dedicating our new journey to knowing each other, we went before God. How refreshing. �💫",
    icon: "heart",
    emoji: "�",
  },
  {
    date: "January 15, 2026",
    title: "You Became My Girlfriend",
    description: "The best day of my life. You said yes, and in that moment, my world became complete. You are my sunshine, my everything. ☀️",
    icon: "heart",
    emoji: "💖",
  },
  {
    date: "First Meeting",
    title: "Seeing You in the Flesh",
    description: "Our first day of meeting, seeing the love of my life in the flesh for the first time. Feeling like a dream. Nervous not just meeting you but Juliet and Kamsi too. Amazing feeling, still got a lot more family members to go 🤣",
    icon: "heart",
    emoji: "🥰",
  },
  {
    date: "Our Symbol",
    title: "The Sunflower & The Sun",
    description: "Just like sunflowers follow the sun wherever it goes, we follow each other. Through every season, every moment, we're drawn to each other. Our love blooms eternal. 🌻",
    icon: "sunflower",
    emoji: "🌻",
  },
];

export default function ValentinePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNoHover = () => {
    const maxX = 200;
    const maxY = 100;
    setNoButtonPosition({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    });
    setNoAttempts((prev) => prev + 1);
  };

  const noButtonMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Please? 🥺",
    "Don't do this 💔",
    "I'll be sad 😢",
    "You're breaking my heart!",
    "Fine... Just kidding! Try again!",
    "Okay okay, I get it... NOT!",
  ];

  const renderTimeline = () => (
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-orange-400 to-pink-400 rounded-full" />

        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } animate-fadeInUp`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Content */}
            <div
              className={`ml-20 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-yellow-200">
                <span className="text-4xl mb-2 block">{event.emoji}</span>
                <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                  {event.date}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Icon */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
              <div className="w-10 h-10 bg-white rounded-full border-4 border-yellow-400 flex items-center justify-center shadow-lg animate-sway">
                {event.icon === "instagram" ? (
                  <span className="text-pink-500">
                    <InstagramIcon size={20} />
                  </span>
                ) : event.icon === "sunflower" ? (
                  <span className="text-2xl">🌻</span>
                ) : (
                  <Heart size={20} className="text-pink-500 animate-pulse-heart" />
                )}
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-5/12" />
          </div>
        ))}
      </div>
    </div>
  );

  const renderSunflowerField = () => (
    <div className="relative h-40 overflow-hidden">
      <div className="absolute bottom-0 w-full flex justify-center items-end gap-4">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center animate-sway"
            style={{
              animationDelay: `${i * 0.2}s`,
              height: `${80 + Math.random() * 60}px`,
            }}
          >
            <Sunflower size={40 + Math.random() * 20} />
            <div
              className="w-1 bg-green-600 rounded-full"
              style={{ height: `${30 + Math.random() * 30}px` }}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-green-600 to-green-500 rounded-t-full" />
    </div>
  );

  const renderQuestion = () => (
    <div
      className={`text-center transition-all duration-1000 ${
        showQuestion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {answer === null ? (
        <>
          <div className="mb-8">
            <Heart size={80} className="mx-auto text-pink-500 animate-pulse-heart" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Will You Be My Valentine?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Every love story is beautiful, but ours is my favorite. 🌻
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
            <button
              onClick={() => setAnswer("yes")}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Yes! 💖
            </button>
            <button
              onMouseEnter={handleNoHover}
              onClick={handleNoHover}
              className="px-12 py-4 bg-gray-300 text-gray-700 text-xl font-bold rounded-full shadow-lg transition-all duration-300"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              }}
            >
              {noButtonMessages[Math.min(noAttempts, noButtonMessages.length - 1)]}
            </button>
          </div>
          {noAttempts > 3 && (
            <p className="mt-6 text-pink-500 font-medium animate-bounce">
              Hehe, nice try! The No button is a bit shy 😊
            </p>
          )}
        </>
      ) : (
        <div className="animate-fadeInUp">
          <div className="text-8xl mb-6">🎉</div>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 mb-4">
            Yay!!!
          </h2>
          <p className="text-2xl text-gray-700 mb-4">
            You just made me the happiest person ever! 🥰
          </p>
          <p className="text-xl text-gray-600 mb-8">
            I can&apos;t wait to celebrate Valentine&apos;s Day with you, my sunflower 🌻
          </p>
          <div className="flex justify-center gap-4 text-6xl">
            {["🌻", "💖", "🌻", "💖", "🌻"].map((emoji, i) => (
              <span
                key={i}
                className="animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
          <div className="mt-12 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl max-w-lg mx-auto border border-pink-200">
            <p className="text-lg text-gray-700 italic">
              &ldquo;Like a sunflower follows the sun, I will always follow you. Through every 
              season of life, my heart points towards you. You are my sunshine, 
              my warmth, my everything.&rdquo;
            </p>
            <p className="mt-4 text-pink-500 font-semibold">
              Forever yours 💕
            </p>
          </div>

          {/* Our Song - YouTube Player */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border-2 border-pink-300">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl">🎵</span>
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-800">My Heart to You</p>
                  <p className="text-base text-pink-500">First Time - Teeks 💕</p>
                </div>
                <span className="text-3xl">🎵</span>
              </div>
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/2yUouC9iXDg"
                title="First Time by Teeks"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl shadow-md"
              />
              <p className="text-sm text-center text-gray-500 mt-4">Press Play 🎧</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Suppress hydration warning for random values
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Floating sunflowers background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <Sunflower size={40 + i * 10} />
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section
        className={`min-h-screen flex flex-col items-center justify-center px-4 py-12 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Sunflower size={120} className="animate-sway" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 mb-4">
            Our Love Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            A journey of two hearts finding their way to each other 💕
          </p>
        </div>

        {renderSunflowerField()}

        <div className="mt-8 animate-bounce">
          <button
            onClick={() => {
              setCurrentSection(1);
              document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-white/80 backdrop-blur-sm text-orange-500 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            See Our Journey
            <span className="text-2xl">↓</span>
          </button>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="min-h-screen py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Journey Together 🌻
          </h2>
          <p className="text-xl text-gray-600">
            Every moment with you is a treasure
          </p>
        </div>

        {renderTimeline()}
      </section>

      {/* Sunflower Walk Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-yellow-50/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Walking Through Sunflower Fields 🌻
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-yellow-200">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              I dream of us walking hand in hand through endless sunflower fields, 
              surrounded by golden petals that mirror the warmth of our love. 
              Just like these beautiful flowers turn towards the sun, 
              my heart always turns towards you.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              The sunflower has become our symbol - a testament to how we follow 
              each other, support each other, and grow together. No matter where 
              life takes us, we&apos;ll always find our way back to each other. 
              You are my sun, and I am your sunflower. 🌻☀️
            </p>
          </div>
          
          {/* Animated sunflower row */}
          <div className="mt-12 flex justify-center gap-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="animate-sway"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <Sunflower size={60 + Math.sin(i) * 20} />
              </div>
            ))}
          </div>

          {/* Continue Button */}
          <div className="mt-12">
            <button
              onClick={() => {
                setShowQuestion(true);
                setTimeout(() => {
                  document.getElementById("question")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Continue to Something Special ✨
            </button>
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section id="question" className="min-h-screen flex items-center justify-center py-20 px-4">
        {renderQuestion()}
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600">
        <div className="flex justify-center gap-2 mb-4">
          <Sunflower size={30} className="animate-sway" />
          <Heart size={30} className="text-pink-500 animate-pulse-heart" />
          <Sunflower size={30} className="animate-sway" style={{ animationDelay: "0.5s" }} />
        </div>
        <p className="text-lg">Made with love for my special sunflower 🌻</p>
        <p className="text-sm mt-2 text-gray-500">February 2026</p>
      </footer>
    </main>
  );
}
