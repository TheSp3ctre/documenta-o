import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface Props {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg border border-sage bg-code-bg">
      <div className="flex items-center justify-between border-b border-sage/70 px-4 py-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-forest/70">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-muted-foreground opacity-0 transition-all duration-150 hover:bg-sage-soft hover:text-forest group-hover:opacity-100"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[13.5px] leading-relaxed">
        <code className="text-foreground">{code}</code>
      </pre>
    </div>
  );
}
