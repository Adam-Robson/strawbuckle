"use client";

import { PiMusicNoteSimple, PiX } from "react-icons/pi";
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
        {isVisible ? <PiX size={40} /> : <PiMusicNoteSimple size={48} />}
        <label className="audio-toggle-label">
          {isVisible ? "Hide Player" : "Show Player"}
        </label>
      </button>
    </div>
  );
}
