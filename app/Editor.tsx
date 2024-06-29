import { Highlight, themes } from "prism-react-renderer";
import React, { useState } from "react";

type Props = {
  theme: string;
  lang: string;
};

function Editor({ theme = "oneDark", lang = "jsx" }: Props) {
  const [code, setCode] = useState('console.log("Hello, World!");');

  return (
    <section className="relative text-base font-mono mx-auto">
      <textarea
        name="code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="absolute min-w-40 md:min-w-80 min-h-96 text-base border-none w-full h-full bg-transparent outline-none resize-none text-transparent caret-white "
      ></textarea>

      <Highlight theme={Object(themes)[theme]} code={code} language={lang}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className.concat(" min-w-40 md:min-w-80 min-h-96")}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="absolute -translate-x-full text-slate-900 dark:text-slate-200">
                  {i + 1}{" "}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </section>
  );
}

export default Editor;
