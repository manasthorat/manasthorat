
import { Lightbulb, Code, Terminal, LineChart, Repeat, Zap, Wrench, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChartBackground from '@/components/ChartBackground';

const ServicesPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-trading-dark overflow-hidden">
        <ChartBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Specialized trading solutions tailored to your specific needs, from custom indicators to full algorithmic systems.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="py-16 bg-trading-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="service-card p-8">
              <div className="text-trading-accent mb-6">
                <Code size={48} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Pine Script Development</h2>
              <p className="text-gray-400 mb-6">
                Expert development of custom TradingView indicators, strategies, and automated alert systems.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Lightbulb className="text-trading-accent mt-1 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-300">Custom technical indicators for identifying specific market conditions</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="text-trading-accent mt-1 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-300">Automated trading strategies with precise entry and exit rules</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="text-trading-accent mt-1 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-300">Alert systems that notify you of potential trading opportunities</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="text-trading-accent mt-1 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-300">Customization of existing indicators to match your trading style</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary">Request This Service</Link>
            </div>
            
            <div className="service-card p-8">
              <div className="text-trading-accent mb-6">
                <Terminal size={48} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Python Trading Bots</h2>
              <p className="text-gray-400 mb-6">
                Automated trading systems that integrate with popular exchanges for 24/7 execution.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Lightbulb className="text-trading-accent mt-1 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-300">Custom algorithmic trading bots with your specific strategy</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="text-trading-accent mt-1 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-300">API integrations with major exchanges (Binance, Coinbase, etc.)</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="text-trading-accent mt-1 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-300">MT4/MT5 automation through Python</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="text-trading-accent mt-1 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-300">Real-time monitoring dashboards and notification systems</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary">Request This Service</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-trading-dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card">
              <div className="flex items-start p-6">
                <div className="mr-4 text-trading-accent">
                  <LineChart size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Backtesting & Optimization</h3>
                  <p className="text-gray-400">
                    Rigorous testing of trading strategies against historical data to validate performance and optimize parameters.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="service-card">
              <div className="flex items-start p-6">
                <div className="mr-4 text-trading-accent">
                  <Zap size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Strategy Development</h3>
                  <p className="text-gray-400">
                    End-to-end trading strategy design with robust risk management for forex, crypto, and options markets.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="service-card">
              <div className="flex items-start p-6">
                <div className="mr-4 text-trading-accent">
                  <Wrench size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">System Maintenance & Updates</h3>
                  <p className="text-gray-400">
                    Ongoing support, updates, and improvements to existing trading systems to adapt to changing market conditions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="service-card">
              <div className="flex items-start p-6">
                <div className="mr-4 text-trading-accent">
                  <Rocket size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Trading Education</h3>
                  <p className="text-gray-400">
                    Personalized coaching on algorithmic trading, Pine Script, and Python for trading applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-trading-darker">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">My Process</h2>
          
          <div className="relative">
            {/* Process line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-trading-chart hidden md:block"></div>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-semibold text-white mb-3">1. Consultation & Requirements</h3>
                  <p className="text-gray-400">
                    We'll discuss your trading goals, specific needs, and the challenges you're facing. This helps me understand exactly what solution will work best for you.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex justify-center">
                  <div className="bg-trading-accent rounded-full h-16 w-16 flex items-center justify-center border-4 border-trading-dark relative z-10">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative flex justify-center order-1">
                  <div className="bg-trading-accent rounded-full h-16 w-16 flex items-center justify-center border-4 border-trading-dark relative z-10">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                </div>
                <div className="order-2">
                  <h3 className="text-xl font-semibold text-white mb-3">2. Strategy Design</h3>
                  <p className="text-gray-400">
                    I'll design a comprehensive plan for your custom solution, outlining the approach, technologies, and expected outcomes.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-semibold text-white mb-3">3. Development & Testing</h3>
                  <p className="text-gray-400">
                    I'll build your custom solution and rigorously test it against historical data to ensure reliability and performance.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex justify-center">
                  <div className="bg-trading-accent rounded-full h-16 w-16 flex items-center justify-center border-4 border-trading-dark relative z-10">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative flex justify-center order-1">
                  <div className="bg-trading-accent rounded-full h-16 w-16 flex items-center justify-center border-4 border-trading-dark relative z-10">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                </div>
                <div className="order-2">
                  <h3 className="text-xl font-semibold text-white mb-3">4. Implementation & Support</h3>
                  <p className="text-gray-400">
                    I'll help you implement the solution and provide ongoing support to ensure everything runs smoothly and continues to perform as markets evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-trading-accent text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Trading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact me today to discuss your project and take your trading to the next level.
          </p>
          <Link to="/contact" className="bg-white text-trading-accent px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 inline-block text-center font-semibold">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
