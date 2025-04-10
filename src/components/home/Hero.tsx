import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const phrases = [
  "Stunning Visuals",
  "Amazing Videos",
  "Powerful Content"
];

const TYPING_SPEED = 100; // Delay between each character typing (ms)
const PAUSE_DURATION = 2000; // Pause after the full phrase is displayed (ms)
const DELETION_SPEED = 50; // Delay between each character deletion (ms)

/**
 * Custom hook for the typewriter effect.
 *
 * @param phrases - Array of phrases to animate.
 * @param typingSpeed - Speed at which characters are typed.
 * @param deletionSpeed - Speed at which characters are deleted.
 * @param pauseDuration - Pause duration after a phrase is fully displayed.
 * @returns The current text to display.
 */
function useTypewriter(
  phrases: string[],
  typingSpeed: number,
  deletionSpeed: number,
  pauseDuration: number
) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const currentPhrase = phrases[currentIndex];

    if (isTyping) {
      // Continue typing if the phrase is not complete.
      if (displayedText.length < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(current => current + currentPhrase[displayedText.length]);
        }, typingSpeed);
      } else {
        // Pause before starting to delete the text.
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      // Delete text one character at a time.
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(current => current.slice(0, -1));
        }, deletionSpeed);
      } else {
        // Once deletion is complete, reset to typing mode with the next phrase.
        setIsTyping(true);
        setCurrentIndex(prevIndex => (prevIndex + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentIndex, phrases, typingSpeed, deletionSpeed, pauseDuration]);

  return displayedText;
}

const Hero: React.FC = React.memo(() => {
  const displayedText = useTypewriter(phrases, TYPING_SPEED, DELETION_SPEED, PAUSE_DURATION);

  return (
    <>
      {/* Background Elements - Fixed Position */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          style={{ opacity: 0.3 }}
          aria-hidden="true"
        />
        {/* Ambient Light Effects */}
        <div
          className="absolute -bottom-32 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-20 leading-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]">
            GEN  STUDIO  X
          </h1>

          {/* Sub Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight">
            AI Generated Content Automation
            <br />
            <span className="inline-block">
              {displayedText}
              <span className="animate-blink">|</span>
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto">
            Optimize your workflow and gain deep insights with ease. Join leading businesses transforming their operations through our cutting-edge AI solutions.
          </p>

          {/* CTA Button */}
          <Link
            to="/template"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </>
  );
});

export default Hero;
