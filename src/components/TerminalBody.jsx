import React, { useState, useEffect } from 'react';

const TerminalBody = () => {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const terminalData = [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: 'kartik_sharma (Software Engineer)' },
    { type: 'cmd', text: 'locate --skills' },
    { type: 'out', text: 'Java 17, Spring Boot, React, Azure' },
    { type: 'cmd', text: 'cat status.log' },
    { type: 'out', text: 'Currently optimizing ANZ Bank loan systems...' },
  ];

  useEffect(() => {
    if (currentLineIndex < terminalData.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, terminalData[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, terminalData[currentLineIndex].type === 'cmd' ? 600 : 300);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  return (
    <div className="font-mono text-[13px] leading-relaxed">
      {lines.map((line, i) => (
        <div key={i} className="mb-1">
          {line.type === 'cmd' && <span className="text-blue-500 mr-2">❯</span>}
          <span className={line.type === 'cmd' 
            ? "text-slate-800 dark:text-slate-100 font-bold" 
            : "text-slate-500 dark:text-slate-400"}>
            {line.text}
          </span>
        </div>
      ))}
      {currentLineIndex < terminalData.length && (
        <div className="flex items-center gap-1">
          <span className="text-blue-500">❯</span>
          <span className="w-2 h-4 bg-blue-500 animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default TerminalBody;