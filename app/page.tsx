"use client";

import { themes } from "prism-react-renderer";
import { useState } from "react";
import Editor from "./Editor";

const languages = [
  "markup",
  "jsx",
  "tsx",
  "swift",
  "kotlin",
  "objectivec",
  "js-extras",
  "reason",
  "rust",
  "graphql",
  "yaml",
  "go",
  "cpp",
  "markdown",
  "python",
];

export default function Home() {
  const [theme, setTheme] = useState("oneDark");
  const [lang, setLang] = useState("jsx");

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 md:gap-8 p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing code below
        </p>

        <select
          value={theme}
          className="dark:bg-slate-800 rounded-sm text-center h-8"
          onChange={(e) => setTheme(e.target.value)}
        >
          {Object.keys(themes).map((val, i) => (
            <option key={i} value={val}>
              {val.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}
            </option>
          ))}
        </select>

        <select
          value={lang}
          className="dark:bg-slate-800 rounded-sm text-center h-8"
          onChange={(e) => setLang(e.target.value)}
        >
          {languages.map((lang, i) => (
            <option key={i} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <Editor lang={lang} theme={theme} />
    </main>
  );
}
