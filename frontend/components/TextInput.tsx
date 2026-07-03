type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function TextInput({
  text,
  setText,
}: Props) {
  const characters = text.length;

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const estimatedSeconds = Math.max(
    1,
    Math.round((words / 150) * 60)
  );

  const minutes = Math.floor(estimatedSeconds / 60);
  const seconds = estimatedSeconds % 60;

  const sampleScript = `Welcome to Voxa!

Turn your ideas into natural AI voices in seconds.

Perfect for YouTube videos, podcasts, presentations, audiobooks, and much more.`;

  return (
    <div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">

          <label className="text-xl font-semibold">
            Your Script
          </label>

          <button
            type="button"
            onClick={() => setText(sampleScript)}
            className="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 transition hover:bg-violet-600 hover:text-white"
          >
            ✨ Try Sample
          </button>

        </div>

        <span className="w-fit rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
          {characters} / 5000
        </span>

      </div>

      <textarea
        value={text}
        maxLength={5000}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Type or paste your script here...

Perfect for YouTube videos, podcasts,
audiobooks, presentations,
advertisements and more.`}
        className="h-64 w-full rounded-2xl border border-zinc-700 bg-zinc-950 p-4 text-base leading-7 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/20 sm:p-6 sm:text-lg sm:leading-8"
      />

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-xl bg-zinc-900 p-5 text-center">

          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Words
          </p>

          <p className="mt-2 text-2xl font-bold">
            {words}
          </p>

        </div>

        <div className="rounded-xl bg-zinc-900 p-5 text-center">

          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Characters
          </p>

          <p className="mt-2 text-2xl font-bold">
            {characters}
          </p>

        </div>

        <div className="rounded-xl bg-zinc-900 p-5 text-center">

          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Voice Length
          </p>

          <p className="mt-2 text-2xl font-bold">
            {minutes > 0
              ? `${minutes}m ${seconds}s`
              : `${seconds}s`}
          </p>

        </div>

      </div>

    </div>
  );
}