'use client';

import { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';

interface AudioPlayerProps {
  audioUrl: string;
  trackTitle: string;
  isPlaying: boolean;
  onPlayPause: (trackTitle: string) => void;
}

export default function AudioPlayer({ audioUrl, trackTitle, isPlaying, onPlayPause }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    onPlayPause(trackTitle);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="w-full">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={handlePlayPause}
          className="p-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
        >
          {isPlaying ? (
            <PauseIcon className="h-4 w-4 text-white" />
          ) : (
            <PlayIcon className="h-4 w-4 text-white" />
          )}
        </button>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <SpeakerWaveIcon className="h-4 w-4" />
            <span>{formatTime(currentTime)}</span>
            <div className="flex-1 mx-2">
              <input
                type="range"
                min="0"
                max="100"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleSeek}
                className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #9333ea 0%, #9333ea ${duration ? (currentTime / duration) * 100 : 0}%, #4b5563 ${duration ? (currentTime / duration) * 100 : 0}%, #4b5563 100%)`
                }}
              />
            </div>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 