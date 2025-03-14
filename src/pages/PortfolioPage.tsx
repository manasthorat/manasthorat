import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import ChartBackground from '@/components/ChartBackground';
import YouTubeEmbed from '@/components/YouTubeEmbed';

// Define portfolio items and their categories
const portfolioItems = [
  {
    id: 1,
    title: 'Advanced MACD Strategy',
    description: 'A Pine Script strategy that combines MACD with volume analysis for enhanced signal accuracy.',
    categories: ['pine-script', 'strategy'],
    image: 'https://images.unsplash.com/photo-1642790551116-18e150f248e4?ixlib=rb-4.0.3',
    link: '#',
  },
  {
    id: 2,
    title: 'Crypto Arbitrage Bot',
    description: 'Python-based bot that identifies and executes on arbitrage opportunities across multiple exchanges.',
    categories: ['python', 'bot'],
    image: 'https://images.unsplash.com/photo-1642790456351-558440324a99?ixlib=rb-4.0.3',
    link: '#',
  },
  {
    id: 3,
    title: 'Multi-Timeframe Indicator',
    description: 'Custom Pine Script indicator that analyzes trends across multiple timeframes for confluence.',
    categories: ['pine-script', 'indicator'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3',
    link: '#',
  },
  {
    id: 4,
    title: 'Options Volatility Scanner',
    description: 'Python tool that scans for unusual options activity and volatility patterns.',
    categories: ['python', 'analysis'],
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3',
    link: '#',
  },
  {
    id: 5,
    title: 'Fibonacci Trading System',
    description: 'Complete trading system based on Fibonacci retracements and extensions with auto-detection.',
    categories: ['pine-script', 'strategy'],
    image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3',
    link: '#',
  },
  {
    id: 6,
    title: 'MT5 Expert Advisor',
    description: 'Python-based expert advisor for MetaTrader 5 with custom risk management rules.',
    categories: ['python', 'bot'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3',
    link: '#',
  },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  
  // Filter items based on selected category
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categories.includes(filter));
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-trading-dark overflow-hidden">
        <ChartBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Portfolio</h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore my custom trading solutions, from Pine Script indicators to Python trading bots
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Filters */}
      <section className="py-12 bg-trading-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full transition-colors ${
                filter === 'all' 
                  ? 'bg-trading-accent text-white' 
                  : 'bg-trading-chart text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('pine-script')}
              className={`px-5 py-2 rounded-full transition-colors ${
                filter === 'pine-script' 
                  ? 'bg-trading-accent text-white' 
                  : 'bg-trading-chart text-gray-300 hover:bg-gray-700'
              }`}
            >
              Pine Script
            </button>
            <button 
              onClick={() => setFilter('python')}
              className={`px-5 py-2 rounded-full transition-colors ${
                filter === 'python' 
                  ? 'bg-trading-accent text-white' 
                  : 'bg-trading-chart text-gray-300 hover:bg-gray-700'
              }`}
            >
              Python
            </button>
            <button 
              onClick={() => setFilter('strategy')}
              className={`px-5 py-2 rounded-full transition-colors ${
                filter === 'strategy' 
                  ? 'bg-trading-accent text-white' 
                  : 'bg-trading-chart text-gray-300 hover:bg-gray-700'
              }`}
            >
              Strategies
            </button>
            <button 
              onClick={() => setFilter('indicator')}
              className={`px-5 py-2 rounded-full transition-colors ${
                filter === 'indicator' 
                  ? 'bg-trading-accent text-white' 
                  : 'bg-trading-chart text-gray-300 hover:bg-gray-700'
              }`}
            >
              Indicators
            </button>
            <button 
              onClick={() => setFilter('bot')}
              className={`px-5 py-2 rounded-full transition-colors ${
                filter === 'bot' 
                  ? 'bg-trading-accent text-white' 
                  : 'bg-trading-chart text-gray-300 hover:bg-gray-700'
              }`}
            >
              Trading Bots
            </button>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="portfolio-item group">
                <div className="relative overflow-hidden rounded-md mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-trading-dark to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      <span className="text-white font-medium">View Details</span>
                      <div className="flex gap-2">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-trading-accent p-1">
                          <ExternalLink size={20} />
                        </a>
                        <a href="#" className="text-white hover:text-trading-accent p-1">
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.categories.map((cat) => (
                    <span 
                      key={cat} 
                      className="text-xs px-2 py-1 bg-trading-chart text-gray-300 rounded-full"
                    >
                      {cat.split('-').join(' ')}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Case Study */}
      <section className="py-24 bg-trading-dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Featured Case Study</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <YouTubeEmbed 
                videoId="qr_fB_FPfKA" 
                title="MACD Strategy Demonstration" 
                className="rounded-lg shadow-xl mb-4" 
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1642790551116-18e150f248e4?ixlib=rb-4.0.3" 
                    alt="MACD Strategy Chart" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixlib=rb-4.0.3" 
                    alt="Backtesting Results" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Advanced MACD Strategy</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-trading-chart text-gray-300 rounded-full">
                  Pine Script
                </span>
                <span className="text-xs px-2 py-1 bg-trading-chart text-gray-300 rounded-full">
                  Strategy
                </span>
                <span className="text-xs px-2 py-1 bg-trading-chart text-gray-300 rounded-full">
                  Trend Following
                </span>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  This project involved developing a sophisticated MACD-based trading strategy for a client who wanted to improve their trend-following system with better entry and exit signals.
                </p>
                
                <h4 className="text-xl font-semibold text-white mt-6">Challenge</h4>
                <p>
                  The client's existing MACD strategy had too many false signals in choppy markets, resulting in numerous small losses that eroded overall performance.
                </p>
                
                <h4 className="text-xl font-semibold text-white mt-6">Solution</h4>
                <p>
                  I developed a custom Pine Script strategy that:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Combined MACD with volume analysis to filter out low-quality signals</li>
                  <li>Added adaptive parameters that adjusted based on market volatility</li>
                  <li>Implemented smart trailing stops that locked in profits while giving trades room to breathe</li>
                  <li>Integrated market regime filters to avoid trading during unfavorable conditions</li>
                </ul>
                
                <h4 className="text-xl font-semibold text-white mt-6">Results</h4>
                <p>
                  The enhanced strategy significantly improved performance:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>48% increase in win rate</li>
                  <li>35% reduction in drawdown</li>
                  <li>67% increase in risk-adjusted returns</li>
                  <li>Consistent performance across multiple market conditions</li>
                </ul>
                
                <div className="mt-8">
                  <div className="bg-trading-chart rounded-md p-4 mt-8">
                    <div className="flex items-center mb-3 text-xs text-gray-400">
                      <div className="flex space-x-1.5 mr-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <div>Pine Script</div>
                    </div>
                    
                    <div className="space-y-1.5">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-trading-accent text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in a Custom Trading Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you build a trading system tailored to your specific needs and goals.
          </p>
          <Link to="/contact" className="bg-white text-trading-accent px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 inline-block text-center font-semibold">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
