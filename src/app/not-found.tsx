import Link from "next/link";
import { ArrowLeft, Sparkles, Compass } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | Kivo",
  description: "The requested page could not be found on Kivo.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden selection:bg-white/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-lg text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-neutral-400 font-mono">
          <Compass className="w-3.5 h-3.5 text-blue-400" />
          <span>404 • Resource Not Found</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight font-sans">
          This automation node does not exist.
        </h1>

        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
          The link you followed may be broken or the page may have been moved to another coordinate.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-xs hover:bg-neutral-200 transition-all shadow-lg shadow-white/5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Kivo Home</span>
          </Link>
          <a
            href="https://app.kivo.codes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/[0.08] font-medium text-xs transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Open Studio Canvas</span>
          </a>
        </div>
      </div>
    </div>
  );
}
