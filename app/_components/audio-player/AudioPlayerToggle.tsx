"use client";

import { PiMusicNote, PiX } from "react-icons/pi";
import type { IAudioPlayerToggleProps } from "@/_types/audio-provider.types";
import "./audio-player.css";

export default function AudioPlayerToggle({
  isVisible,
  setIsVisible,
}: IAudioPlayerToggleProps) {
  const toggleAudioPlayer = () => {
    setIsVisible((prevState: boolean) => !prevState);
  };

  return (
    <div className="audio-toggle-container">
      <button onClick={toggleAudioPlayer} className="audio-toggle-button">
        {isVisible ? (
          <PiX size={40} color="#593736" />
        ) : (
          <PiMusicNote size={48} color="#593736" />
        )}
        <label className="audio-toggle-label" style={{ color: "#593736" }}>
          {isVisible ? "Hide Player" : "Show Player"}
        </label>
      </button>
    </div>
  );
}
