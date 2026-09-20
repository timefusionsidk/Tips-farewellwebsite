"use client";
import { useSyncExternalStore } from "react";
import { useAudio } from "./AudioManagerProvider";
export function AudioIndicator() {
  const audio = useAudio();
  const playing = useSyncExternalStore(
    audio.subscribe,
    () => audio.playing,
    () => false,
  );
  const available = useSyncExternalStore(
    audio.subscribe,
    () => audio.available,
    () => audio.available,
  );
  if (!available) return null;
  return (
    <button
      className="audio-indicator"
      aria-label={playing ? "Pause music" : "Enable music"}
      aria-pressed={playing}
      onClick={() => (playing ? audio.pause() : audio.resume())}
      title={playing ? "Pause music" : "Enable music"}
    >
      {playing ? "Ⅱ" : "♪"}
    </button>
  );
}
