
import { Link } from 'react-router-dom';
import { ArrowRight, Code, LineChart, Terminal, Zap } from 'lucide-react';
import CodeSnippet from '@/components/CodeSnippet';
import ChartBackground from '@/components/ChartBackground';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-gradient">
        <ChartBackground />
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Expert <span className="text-trading-accent">Pine Script</span> Developer & <span className="text-trading-accent">Python</span> Trading Systems
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Specialized in creating custom trading indicators, algorithmic strategies, and automated bots for financial markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link to="/portfolio" className="btn-outline">
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="relative animate-float">
              <CodeSnippet language="pine" className="shadow-lg shadow-blue-500/10" />
              <div className="absolute -right-6 -bottom-6 z-0">
                <CodeSnippet language="python" className="shadow-lg shadow-blue-500/10 transform scale-95 opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-trading-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Trading Expertise</h2>
            <p className="text-gray-400">
              Providing custom solutions for traders and financial institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-trading-accent mb-4">
                <Code size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Pine Script Development</h3>
              <p className="text-gray-400 mb-4">
                Custom indicators, strategies, and alert systems for TradingView.
              </p>
              <Link to="/services" className="text-trading-accent flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="service-card transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-trading-accent mb-4">
                <Terminal size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Python Trading Bots</h3>
              <p className="text-gray-400 mb-4">
                Algorithmic bots that integrate with exchanges for automated trading.
              </p>
              <Link to="/services" className="text-trading-accent flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="service-card transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-trading-accent mb-4">
                <LineChart size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Backtesting & Optimization</h3>
              <p className="text-gray-400 mb-4">
                Rigorous testing of strategies against historical data for performance analysis.
              </p>
              <Link to="/services" className="text-trading-accent flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="service-card transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-trading-accent mb-4">
                <Zap size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Strategy Development</h3>
              <p className="text-gray-400 mb-4">
                End-to-end trading strategies with risk management for various markets.
              </p>
              <Link to="/services" className="text-trading-accent flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Work */}
      <section className="py-24 bg-trading-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Work</h2>
            <p className="text-gray-400">
              A selection of my recent trading system development projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="portfolio-item group">
              <div className="relative overflow-hidden rounded-md mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1642790551116-18e150f248e4?ixlib=rb-4.0.3" 
                  alt="Trading View Chart" 
                  className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-trading-dark to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Advanced MACD Strategy
              </h3>
              <p className="text-gray-400">
                A Pine Script strategy that combines MACD with volume analysis for enhanced signal accuracy.
              </p>
            </div>
            
            <div className="portfolio-item group">
              <div className="relative overflow-hidden rounded-md mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1642790456351-558440324a99?ixlib=rb-4.0.3" 
                  alt="Python Trading Bot" 
                  className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-trading-dark to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Crypto Arbitrage Bot
              </h3>
              <p className="text-gray-400">
                Python-based bot that identifies and executes on arbitrage opportunities across multiple exchanges.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-trading-accent text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Trading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how custom trading solutions can help you achieve better results
          </p>
          <Link to="/contact" className="bg-white text-trading-accent px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 inline-block text-center font-semibold">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
