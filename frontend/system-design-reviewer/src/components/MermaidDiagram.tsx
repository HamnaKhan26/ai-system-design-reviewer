import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface Props {
  diagram: string;
}

export default function MermaidDiagram({ diagram }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (diagram && ref.current) {
      mermaid.initialize({ startOnLoad: true });
      ref.current.innerHTML = diagram;
      mermaid.contentLoaded();
    }
  }, [diagram]);

  return <div ref={ref} className="mermaid my-4" />;
}
