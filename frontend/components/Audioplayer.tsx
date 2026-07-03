"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  audioUrl: string;
  voice: string;
};

export default function AudioPlayer({
  audioUrl,
  voice,
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioUrl) return;

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(audioUrl);

    audioRef.current = audio;

    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    };

    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.onended = () => {
      setPlaying(false);
      setCurrentTime(0);
    };

    return () => {
      audio.pause();
    };
  }, [audioUrl]);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <button
          onClick={toggleAudio}
          className={`rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 ${
            playing
              ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/20"
              : "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 text-white hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/30"
          }`}
        >
          {playing ? "⏸ Pause Audio" : "▶ Play Audio"}
        </button>

        <div className="text-center sm:text-right">

          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Playback
          </p>

          <p className="mt-1 text-lg font-semibold">
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>

        </div>

      </div>

      <div className="mt-6">

        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={(e) => {
            if (!audioRef.current) return;

            audioRef.current.currentTime =
              Number(e.target.value);

            setCurrentTime(Number(e.target.value));
          }}
          className="w-full cursor-pointer accent-violet-500"
        />

      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row">

        <a
          href={audioUrl}
          download={`Voxa-${voice}.wav`}
          className="flex-1 rounded-2xl border border-violet-500 py-4 text-center text-lg font-semibold text-violet-300 transition hover:bg-violet-500 hover:text-white"
        >
          ⬇ Download Audio
        </a>

      </div>

    </div>
  );
}