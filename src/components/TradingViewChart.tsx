
import React, { useEffect, useRef } from 'react';

interface TradingViewChartProps {
  symbol?: string;
  width?: string | number;
  height?: string | number;
  chartId: string;
  scriptUrl?: string;
  isScript?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
  autosize?: boolean;
  enablePublishing?: boolean;
  hideSideToolbar?: boolean;
  hideTopToolbar?: boolean;
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({
  symbol = 'BINANCE:BTCUSDT',
  width = '100%',
  height = 400,
  chartId,
  scriptUrl,
  isScript = false,
  className = '',
  theme = 'dark',
  autosize = false,
  enablePublishing = false,
  hideSideToolbar = false,
  hideTopToolbar = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script element for TradingView widget
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined') {
        if (isScript && scriptUrl) {
          // Create script chart
          new window.TradingView.widget({
            "autosize": autosize,
            "width": autosize ? "100%" : width,
            "height": autosize ? "100%" : height,
            "symbol": symbol,
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": theme,
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": enablePublishing,
            "hide_top_toolbar": hideTopToolbar,
            "allow_symbol_change": true,
            "studies": ["MASimple@tv-basicstudies"],
            "container_id": chartId,
            "hide_side_toolbar": hideSideToolbar,
            "withdateranges": true,
            "save_image": false,
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650",
            "published_src": scriptUrl
          });
        } else {
          // Create regular chart
          new window.TradingView.widget({
            "autosize": autosize,
            "width": autosize ? "100%" : width,
            "height": autosize ? "100%" : height,
            "symbol": symbol,
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": theme,
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": enablePublishing,
            "hide_top_toolbar": hideTopToolbar,
            "allow_symbol_change": true,
            "studies": ["MASimple@tv-basicstudies", "MACD@tv-basicstudies"],
            "container_id": chartId,
            "hide_side_toolbar": hideSideToolbar
          });
        }
      }
    };
    document.head.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Clean up any TradingView elements
      const widgetContainer = document.getElementById(chartId);
      if (widgetContainer) {
        widgetContainer.innerHTML = '';
      }
    };
  }, [symbol, width, height, chartId, scriptUrl, isScript, theme, autosize, enablePublishing, hideSideToolbar, hideTopToolbar]);

  return (
    <div className={`tradingview-chart-container rounded-lg overflow-hidden border border-trading-chart ${className}`}>
      <div id={chartId} ref={containerRef} style={{ height: autosize ? '100%' : height }} />
    </div>
  );
};

export default TradingViewChart;
