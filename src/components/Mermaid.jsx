import React, { useEffect } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  
});

const FlowchartRenderer = ({ mermaidCode }) => {
  useEffect(() => {
    mermaid.contentLoaded();
  }, [mermaidCode]);

  console.log(mermaidCode)
  return (
    <div className="mermaid">
      {mermaidCode}
    </div>
  );
};

export default FlowchartRenderer;
