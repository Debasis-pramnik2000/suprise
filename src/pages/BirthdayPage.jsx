import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaBirthdayCake,
  FaHeart,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaMusic,
} from "react-icons/fa";

import Page from "../components/Page";
import Navigation from "../components/Navigation";

// ====== LYRICS ARRAY - ADDED THIS ======
const lyrics = [
  "Happy", "Birthday", "to", "You",
  "Happy", "Birthday", "to", "You",
  "Happy", "Birthday", "Dear", "Bipasa",
  "Happy", "Birthday", "to", "You!",
  "🎉", "🎂", "🎁", "🎈"
];

function BirthdayPage({ nextPage, previousPage }) {
  // Music state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showLyrics, setShowLyrics] = useState(false);
  const [currentNote, setCurrentNote] = useState(0);
  const audioRef = useRef(null);

  // ====== FIXED: Create audio element with MP3 ======
  useEffect(() => {
    // Create audio element
    const audio = new Audio();
    
    // Option 1: Use local MP3 file (put in public/music/ folder)
    audio.src = '/music/hello.mp3';
    
    // Option 2: If file doesn't exist, use free online URL
    // audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    
    audio.loop = true;
    audio.volume = volume;
    audio.muted = isMuted;
    audioRef.current = audio;

    // Try to auto-play
    const startMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Browser autoplay policy may block sound until user interacts
        console.log('Autoplay blocked. User must click play.');
        setIsPlaying(false);
      }
    };

    startMusic();

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []); // Empty dependency array - runs once on mount

  // ====== PLAY/PAUSE TOGGLE ======
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
        // Simulate lyrics changing (if using MP3, we can't sync exactly)
        // So we'll just cycle through lyrics for display
        const interval = setInterval(() => {
          setCurrentNote(prev => (prev + 1) % lyrics.length);
        }, 800);
        // Store interval for cleanup
        window.lyricsInterval = interval;
      } catch (error) {
        console.log('Play error:', error);
        setIsPlaying(false);
      }
    }
  };

  // ====== MUTE TOGGLE ======
  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (audioRef.current) {
      audioRef.current.muted = newMuted;
    }
  };

  // ====== VOLUME CHANGE ======
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // ====== CLEANUP INTERVAL ON UNMOUNT ======
  useEffect(() => {
    return () => {
      if (window.lyricsInterval) {
        clearInterval(window.lyricsInterval);
      }
    };
  }, []);

  // ====== UPDATE LYRICS WHEN PLAYING ======
  useEffect(() => {
    if (isPlaying) {
      // Start cycling lyrics
      if (window.lyricsInterval) {
        clearInterval(window.lyricsInterval);
      }
      window.lyricsInterval = setInterval(() => {
        setCurrentNote(prev => (prev + 1) % lyrics.length);
      }, 800);
    } else {
      // Stop cycling lyrics
      if (window.lyricsInterval) {
        clearInterval(window.lyricsInterval);
        window.lyricsInterval = null;
      }
    }
  }, [isPlaying]);

  // Get current lyric
  const currentLyric = lyrics[currentNote % lyrics.length] || "🎵";

  return (
    <Page className="birthday-page">

      <div className="balloon balloon-a">🎈</div>
      <div className="balloon balloon-b">🎈</div>
      <div className="balloon balloon-c">🎈</div>

      <motion.div
        className="birthday-confetti"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        ✦ ✧ ✦ ✧ ✦
      </motion.div>

      <div className="birthday-content">

        <motion.div
          className="cake-icon"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaBirthdayCake />
        </motion.div>

        <span className="eyebrow">🎂 The Special Day 🎂</span>

        <motion.h2
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Happy <span>Birthday</span>
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ color: '#ff6b6b', fontSize: '2.5rem', marginTop: '-10px' }}
        >
          🎉 Debaprita! 🎉
        </motion.h2>

        <p>
          Today is a little more beautiful
          because it celebrates
          <strong> YOU, Debaprita! 💖</strong>
        </p>

        {/* Current Lyric Display */}
        <motion.div
          key={currentNote}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: '1.8rem',
            color: '#fff',
            fontWeight: 'bold',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            marginTop: '10px',
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isPlaying ? `🎤 ${currentLyric}` : '🎵 Click Play to Sing Along!'}
        </motion.div>

        <div className="birthday-heart">
          <FaHeart />
        </div>

        {/* ====== MUSIC CONTROLS ====== */}
        <div className="music-controls" style={styles.musicControls}>
          <button 
            onClick={togglePlay} 
            style={styles.musicBtn}
            className="music-btn"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button 
            onClick={toggleMute} 
            style={styles.musicBtn}
            className="music-btn"
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            style={styles.volumeSlider}
            className="volume-slider"
          />

          <span style={styles.volumeText}>
            {Math.round(volume * 100)}%
          </span>

          <button 
            onClick={() => setShowLyrics(!showLyrics)} 
            style={{...styles.musicBtn, background: showLyrics ? 'rgba(255,107,107,0.5)' : 'rgba(255,255,255,0.3)'}}
            className="music-btn"
            title="Show Lyrics"
          >
            <FaMusic />
          </button>
        </div>

        {/* Full Lyrics Display */}
        {showLyrics && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={styles.lyricsBox}
          >
            <h4 style={{ color: '#fff', marginBottom: '10px' }}>🎵 Happy Birthday Bipasa 🎵</h4>
            {lyrics.map((word, index) => (
              <span
                key={index}
                style={{
                  ...styles.lyricWord,
                  color: index === currentNote % lyrics.length ? '#ffeb3b' : '#fff',
                  transform: index === currentNote % lyrics.length ? 'scale(1.2)' : 'scale(1)',
                }}
              >
                {word}
              </span>
            ))}
          </motion.div>
        )}

        <div style={styles.statusText}>
          {isPlaying ? '🎵 Happy Birthday Debaprita!' : '🎂 Click Play to Celebrate!'}
        </div>

      </div>

      <Navigation
        nextPage={nextPage}
        previousPage={previousPage}
      />

    </Page>
  );
}

// ====== STYLES ======
const styles = {
  musicControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '20px',
    padding: '12px 20px',
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '50px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  musicBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(255,255,255,0.3)',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  volumeSlider: {
    width: '100px',
    height: '4px',
    borderRadius: '10px',
    accentColor: '#ff6b6b',
    cursor: 'pointer',
  },
  volumeText: {
    color: '#fff',
    fontSize: '12px',
    fontWeight: 'bold',
    minWidth: '40px',
  },
  statusText: {
    marginTop: '8px',
    color: 'rgba(255,255,255,0.8)',
    fontSize: '14px',
    fontWeight: '500',
  },
  lyricsBox: {
    marginTop: '15px',
    padding: '15px 20px',
    background: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  lyricWord: {
    display: 'inline-block',
    margin: '4px 6px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  },
};

// Add hover effects via CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .music-btn:hover {
    transform: scale(1.1);
    background: rgba(255,255,255,0.5);
  }
  .volume-slider:hover {
    opacity: 0.8;
  }
`;
document.head.appendChild(styleSheet);

export default BirthdayPage;