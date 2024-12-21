"use client";

import { useState } from "react";
import AudioControls from "./AudioControls";
import AudioPlaylist from "./AudioPlaylist";
import AudioPlayerToggle from "./AudioPlayerToggle";
import "./audio-player.css";
import { useAudioContext } from "@/_contexts/AudioProvider";

export default function AudioPlayer() {
  const [isVisible, setIsVisible] = useState(false);
  const { song, playback, elapsed, duration } = useAudioContext() ?? {};
  return (
    <div className="audio-player-component">
      <div
        className={`audio-player-card shadow-xl ${isVisible ? "visible" : ""}`}
      >
        <AudioPlaylist />
        <div className="now-playing-container">
          {playback && (
            <div>
              <div>{song.title}</div>
              <div>
                {elapsed} / {duration}
              </div>
            </div>
          )}
        </div>
        <AudioControls />
      </div>
      <AudioPlayerToggle isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
}
