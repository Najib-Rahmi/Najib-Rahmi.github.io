"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ROUTES = ["about", "skills", "projects", "experience", "contact"];

export default function NotFound() {
  const pathname = usePathname();
  const [typed, setTyped] = useState("");
  const command = `cd ${pathname}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(command.slice(0, i));
      if (i >= command.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, [command]);

  const doneTyping = typed.length === command.length;

  return (
    <main className="min-h-svh flex items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-xl">
        <p className="mb-3 pl-1 font-mono text-xs text-muted-foreground">
          # error 404 — route does not exist
        </p>

        <div className="overflow-hidden rounded-lg border border-border/60 bg-zinc-950 shadow-2xl shadow-cyan-500/5">
          {/* window chrome */}
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-zinc-900/80 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-[11px] text-zinc-500">
              zsh — 80×24
            </span>
          </div>

          {/* terminal body */}
          <div className="px-5 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
            <div className="text-zinc-400">
              <span className="text-cyan-400">visitor</span>
              <span className="text-zinc-600">@portfolio</span>
              <span className="text-zinc-600"> ~ % </span>
              <span className="text-zinc-100">{typed}</span>
              <span
                className={`ml-0.5 inline-block h-[1em] w-1.75px translate-y-1px bg-cyan-400 ${
                  doneTyping ? "animate-pulse" : ""
                }`}
              />
            </div>

            {doneTyping && (
              <>
                <p className="mt-2 text-red-400/90">
                  zsh: no such file or directory: {pathname}
                </p>

                <p className="mt-4 text-zinc-500">
                  visitor@portfolio ~ % ls sections/
                </p>
                <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1.5">
                  <Link
                    href="/"
                    className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                    ~/
                  </Link>
                  {ROUTES.map((r) => (
                    <Link
                      key={r}
                      href={`/#${r}`}
                      className="text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4">
                      {r}/
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {doneTyping && (
          <div className="mt-6 flex justify-center">
            <Button
              asChild
              className="bg-cyan-500 hover:bg-cyan-600 text-white">
              <Link href="/">cd ~</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
