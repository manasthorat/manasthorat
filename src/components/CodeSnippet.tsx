
import React from 'react';

interface CodeSnippetProps {
  language?: 'pine' | 'python';
  className?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ language = 'pine', className = '' }) => {
  return (
    <div className={`bg-trading-chart rounded-md p-4 ${className}`}>
      {/* Header with language indicator */}
      <div className="flex items-center mb-3 text-xs text-gray-400">
        <div className="flex space-x-1.5 mr-3">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
        </div>
        <div>{language === 'pine' ? 'Pine Script' : 'Python'}</div>
      </div>
      
      {/* Code content */}
      <div className="space-y-1.5">
        {language === 'pine' ? (
          <>
            <div className="text-blue-400 text-sm">// Pine Script Strategy</div>
            <div className="text-gray-300 text-sm">strategy(<span className="text-green-400">"MACD Strategy"</span>, overlay=<span className="text-yellow-400">true</span>)</div>
            <div className="text-gray-300 text-sm font-mono">
              <span className="text-purple-400">fastLength</span> = input(<span className="text-yellow-400">12</span>)
            </div>
            <div className="text-gray-300 text-sm font-mono">
              <span className="text-purple-400">slowLength</span> = input(<span className="text-yellow-400">26</span>)
            </div>
            <div className="text-gray-300 text-sm font-mono">
              <span className="text-purple-400">signalLength</span> = input(<span className="text-yellow-400">9</span>)
            </div>
            <div className="text-gray-300 text-sm font-mono">
              [<span className="text-purple-400">macd</span>, <span className="text-purple-400">signal</span>, <span className="text-purple-400">hist</span>] = macd(<span className="text-purple-400">close</span>, <span className="text-purple-400">fastLength</span>, <span className="text-purple-400">slowLength</span>, <span className="text-purple-400">signalLength</span>)
            </div>
          </>
        ) : (
          <>
            <div className="text-green-400 text-sm"># Python Trading Bot</div>
            <div className="text-gray-300 text-sm font-mono">
              <span className="text-blue-400">import</span> ccxt, pandas <span className="text-blue-400">as</span> pd, numpy <span className="text-blue-400">as</span> np
            </div>
            <div className="text-gray-300 text-sm font-mono">
              <span className="text-blue-400">def</span> <span className="text-yellow-400">calculate_ema</span>(data, period):
            </div>
            <div className="text-gray-300 text-sm font-mono pl-4">
              <span className="text-blue-400">return</span> pd.Series(data).ewm(span=period).mean()
            </div>
            <div className="text-gray-300 text-sm font-mono">
              <span className="text-blue-400">class</span> <span className="text-yellow-400">TradingBot</span>:
            </div>
            <div className="text-gray-300 text-sm font-mono pl-4">
              <span className="text-blue-400">def</span> <span className="text-yellow-400">__init__</span>(self, exchange, symbol):
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CodeSnippet;
