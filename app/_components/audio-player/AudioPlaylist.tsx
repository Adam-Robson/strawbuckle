"use client";

import { useAudioContext } from "@/_contexts/AudioProvider";
import { playlist } from "@/_contexts/AudioProvider";
import { ISong } from "@/_types/audio-provider.types";
import "./audio-controls.css";

export default function AudioPlaylist() {
  const { currentIndex, handleSongChange } = useAudioContext() ?? {};
  return (
    <div className="audio-playlist flex flex-col justify-start items-center p-4">
      <ul className="list-none p-2">
        {playlist.map((track: ISong, index: number) => (
          <li
            key={track.id}
            className={`audio-playlist-item ${
              currentIndex === index ? "active" : ""
            }`}
          >
            <button
              className="audio-playlist-button"
              onClick={() => handleSongChange && handleSongChange(index)}
            >
              {track.title} | {track.album} | {track.artist}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
