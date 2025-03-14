
import React from 'react';

const ChartBackground: React.FC = () => {
  // Generate random candlesticks for the background
  const generateCandlesticks = () => {
    const sticks = [];
    for (let i = 0; i < 40; i++) {
      const height = Math.floor(Math.random() * 40) + 10; // Random height between 10 and 50
      const isDown = Math.random() > 0.5; // Randomly determine if it's a down candlestick
      
      sticks.push(
        <div 
          key={i}
          className={`candlestick ${isDown ? 'down' : ''}`}
          style={{ height: `${height}px` }}
        />
      );
    }
    return sticks;
  };

  // Generate multiple rows of candlesticks
  const generateChartRows = () => {
    const rows = [];
    for (let i = 0; i < 10; i++) {
      rows.push(
        <div key={i} className="flex items-end h-16 my-4 animate-chart-move">
          {generateCandlesticks()}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="chart-background">
      {generateChartRows()}
    </div>
  );
};

export default ChartBackground;
