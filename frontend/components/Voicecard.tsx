"use client";

import { RefObject } from "react";

type Props = {
  name: string;
  description: string;
  selected: boolean;
  onClick: () => void;

  playingVoice: string | null;
  setPlayingVoice: React.Dispatch<
    React.SetStateAction<string | null>
  >;

  currentAudio: RefObject<HTMLAudioElement | null>;
};

export default function VoiceCard({
  name,
  description,
  selected,
  onClick,
  playingVoice,
  setPlayingVoice,
  currentAudio,
}: Props) {
  const playPreview = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    if (
      currentAudio.current &&
      playingVoice === name
    ) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;

      setPlayingVoice(null);

      return;
    }

    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }

    const audio = new Audio(`/previews/${name}.wav`);

    currentAudio.current = audio;

    setPlayingVoice(name);

    audio.play();

    audio.onended = () => {
      setPlayingVoice(null);
    };
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={`w-full cursor-pointer rounded-2xl border p-5 text-left transition-all duration-300 ${
        selected
          ? "border-violet-500 bg-violet-500/10 shadow-lg shadow-violet-500/20"
          : "border-zinc-800 bg-zinc-900 hover:-translate-y-1 hover:border-violet-400"
      }`}
    >
      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-lg font-semibold">
            {name}
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            {description}
          </p>

        </div>

        <div className="flex items-center gap-3">

          <button
            type="button"
            onClick={playPreview}
            className={`rounded-full p-2 transition ${
              playingVoice === name
                ? "bg-violet-600 text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-violet-600 hover:text-white"
            }`}
            aria-label={`Preview ${name}`}
          >
            {playingVoice === name ? "⏸" : "🔊"}
          </button>

          {selected && (
            <span className="text-xl text-violet-400">
              ✓
            </span>
          )}

        </div>

      </div>

    </div>
  );
}