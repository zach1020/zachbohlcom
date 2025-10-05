'use client';

import React, { createContext, useContext, useRef, useState, useEffect, ReactNode } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  togglePlayPause: () => void;
  currentTime: number;
  duration: number;
  currentTrack: number;
  playlist: string[];
  nextTrack: () => void;
  previousTrack: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const playlist = [
    "Rocking the Boat.mp3",
    "Baplicity Pitched Up Paired Back.mp3",
    "Comeback or Nah_.mp3",
    "Hoping to Be Found.mp3",
    "Twilight Chops.mp3"
  ];

  useEffect(() => {
    if (audioRef.current) {
      // Set the current track
      audioRef.current.src = `/${playlist[currentTrack]}`;
      
      const handleTimeUpdate = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      };
      
      const handleLoadedMetadata = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
        }
      };
      
      const handleEnded = () => {
        // Move to next track when current song ends and keep playing
        if (isPlaying) {
          const nextIndex = (currentTrack + 1) % playlist.length;
          setCurrentTrack(nextIndex);
        }
      };
      
      const handleError = (e: Event) => {
        console.error('Audio error:', e);
      };
      
      const handleCanPlay = async () => {
        // Auto-play if music was playing when track changed
        if (isPlaying && audioRef.current) {
          try {
            await audioRef.current.play();
          } catch (error) {
            console.error('Auto-play failed:', error);
          }
        }
      };
      
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('ended', handleEnded);
      audioRef.current.addEventListener('error', handleError);
      audioRef.current.addEventListener('canplay', handleCanPlay);
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audioRef.current.removeEventListener('ended', handleEnded);
          audioRef.current.removeEventListener('error', handleError);
          audioRef.current.removeEventListener('canplay', handleCanPlay);
        }
      };
    }
  }, [currentTrack, isPlaying]);

  const nextTrack = async () => {
    const nextIndex = (currentTrack + 1) % playlist.length;
    setCurrentTrack(nextIndex);
    if (audioRef.current) {
      const wasPlaying = isPlaying;
      audioRef.current.src = `/${playlist[nextIndex]}`;
      if (wasPlaying) {
        try {
          // Wait for the new track to load before playing
          await new Promise((resolve) => {
            if (audioRef.current) {
              audioRef.current.oncanplay = resolve;
            }
          });
          await audioRef.current.play();
          setIsPlaying(true); // Ensure playing state is set
        } catch (error) {
          console.error('Error playing next track:', error);
          setIsPlaying(false);
        }
      }
    }
  };

  const previousTrack = async () => {
    const prevIndex = currentTrack === 0 ? playlist.length - 1 : currentTrack - 1;
    setCurrentTrack(prevIndex);
    if (audioRef.current) {
      const wasPlaying = isPlaying;
      audioRef.current.src = `/${playlist[prevIndex]}`;
      if (wasPlaying) {
        try {
          // Wait for the new track to load before playing
          await new Promise((resolve) => {
            if (audioRef.current) {
              audioRef.current.oncanplay = resolve;
            }
          });
          await audioRef.current.play();
          setIsPlaying(true); // Ensure playing state is set
        } catch (error) {
          console.error('Error playing previous track:', error);
          setIsPlaying(false);
        }
      }
    }
  };

  const togglePlayPause = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Audio playback error:', error);
        setIsPlaying(false);
      }
    }
  };

  return (
    <MusicContext.Provider value={{ 
      isPlaying, 
      togglePlayPause, 
      currentTime, 
      duration, 
      currentTrack, 
      playlist, 
      nextTrack, 
      previousTrack 
    }}>
      {children}
      {/* Global Audio Element */}
      <audio 
        ref={audioRef} 
        src={`/${playlist[currentTrack]}`}
        preload="metadata"
        onError={(e) => console.error('Audio error:', e)}
        onLoadedData={() => console.log('Audio loaded')}
      />
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}
