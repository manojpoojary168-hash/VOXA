type Props = {
  onClick: () => void;
  loading: boolean;
};

export default function GenerateButton({
  onClick,
  loading,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? (
        <>
          <svg
            className="h-5 w-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="white"
              strokeWidth="4"
              strokeOpacity="0.25"
            />

            <path
              d="M22 12a10 10 0 0 1-10 10"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          Generating...
        </>
      ) : (
        <>✨ Generate Voice</>
      )}
    </button>
  );
}