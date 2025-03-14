
import { Link } from 'react-router-dom';
import { Award, BookOpen, ChevronsRight, Code, FileText, Github, Linkedin, Mail, Monitor, Terminal } from 'lucide-react';
import ChartBackground from '@/components/ChartBackground';

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-trading-dark overflow-hidden">
        <ChartBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
            <p className="text-xl text-gray-300">
              A passionate trading solutions expert specializing in algorithmic trading systems.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16 bg-trading-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3" 
                  alt="Manas Thorat" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-8 -right-8 bottom-8 -left-8 bg-trading-accent/10 rounded-lg -z-0"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Manas Thorat</h2>
              <h3 className="text-xl text-trading-accent font-medium">
                Trading Solutions Expert
              </h3>
              
              <p className="text-gray-300">
                I'm a specialized developer with expertise in Pine Script (TradingView) and Python-based trading systems. My journey in the financial markets began over 6 years ago, where I discovered my passion for combining programming with trading strategies.
              </p>
              
              <p className="text-gray-300">
                Today, I help traders and financial institutions automate their trading strategies, develop custom indicators, and build robust backtesting systems. My focus is on creating reliable, efficient solutions that provide measurable results and help my clients gain an edge in the markets.
              </p>
              
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-outline py-2">
                  <Github size={20} className="mr-2" /> Github
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-outline py-2">
                  <Linkedin size={20} className="mr-2" /> LinkedIn
                </a>
                <a href="mailto:contact@example.com" className="btn-outline py-2">
                  <Mail size={20} className="mr-2" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise */}
      <section className="py-16 bg-trading-dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">My Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card p-6">
              <div className="text-trading-accent mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Pine Script Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ChevronsRight size={16} className="text-trading-accent mr-2 flex-shrink-0" />
                  <span>Custom indicators & strategies</span>
                </li>
                <li className="flex items-center">
                  <ChevronsRight size={16} className="text-trading-accent mr-2 flex-shrink-0" />
                  <span>Optimization & performance tuning</span>
                </li>
                <li className="flex items-center">
                  <ChevronsRight size={16} className="text-trading-accent mr-2 flex-shrink-0" />
                  <span>Alert systems & automation</span>
                </li>
              </ul>
            </div>
            
            <div className="service-card p-6">
              <div className="text-trading-accent mb-4">
                <Terminal size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Python Trading Systems</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ChevronsRight size={16} className="text-trading-accent mr-2 flex-shrink-0" />
                  <span>Algorithmic trading bots</span>
                </li>
                <li className="flex items-center">
                  <ChevronsRight size={16} className="text-trading-accent mr-2 flex-shrink-0" />
                  <span>Exchange API integrations</span>
                </li>
                <li className="flex items-center">
                  <ChevronsRight size={16} className="text-trading-accent mr-2 flex-shrink-0" />
                  <span>Data analysis & visualization</span>
                </li>
              </ul>
            </div>
            
            <div className="service-card p-6">
              <div className="text-trading-accent mb-4">
                <Monitor size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Trading Strategy Design</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ChevronsRight size={16} className="text-trading-accent mr-2 flex-shrink-0" />
                  <span>Trend following & mean reversion</span>
                </li>
                <li className="flex items-center">
                  <ChevronsRight size={16} className="text-trading-accent mr-2 flex-shrink-0" />
                  <span>Risk management systems</span>
                </li>
                <li className="flex items-center">
                  <ChevronsRight size={16} className="text-trading-accent mr-2 flex-shrink-0" />
                  <span>Multi-market strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience & Education */}
      <section className="py-16 bg-trading-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Award className="mr-3 text-trading-accent" /> Experience
              </h2>
              
              <div className="space-y-12">
                <div className="relative pl-8 border-l border-gray-700">
                  <div className="absolute w-4 h-4 bg-trading-accent rounded-full -left-2 top-0"></div>
                  <div className="mb-1 text-trading-accent">2021 - Present</div>
                  <h3 className="text-lg font-semibold text-white">Independent Trading Solutions Developer</h3>
                  <p className="text-gray-400 mt-2">
                    Developing custom Pine Script indicators, Python trading systems, and algorithmic strategies for traders and financial firms worldwide.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l border-gray-700">
                  <div className="absolute w-4 h-4 bg-trading-accent rounded-full -left-2 top-0"></div>
                  <div className="mb-1 text-trading-accent">2019 - 2021</div>
                  <h3 className="text-lg font-semibold text-white">Trading Systems Developer at XYZ Trading</h3>
                  <p className="text-gray-400 mt-2">
                    Led the development of proprietary trading algorithms and backtesting frameworks, helping the firm achieve a 42% improvement in strategy performance.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l border-gray-700">
                  <div className="absolute w-4 h-4 bg-trading-accent rounded-full -left-2 top-0"></div>
                  <div className="mb-1 text-trading-accent">2017 - 2019</div>
                  <h3 className="text-lg font-semibold text-white">Python Developer at FinTech Solutions</h3>
                  <p className="text-gray-400 mt-2">
                    Built data analysis tools and trading systems integrations for institutional clients in the forex and cryptocurrency markets.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <BookOpen className="mr-3 text-trading-accent" /> Education & Certifications
              </h2>
              
              <div className="space-y-12">
                <div className="relative pl-8 border-l border-gray-700">
                  <div className="absolute w-4 h-4 bg-trading-accent rounded-full -left-2 top-0"></div>
                  <div className="mb-1 text-trading-accent">2020</div>
                  <h3 className="text-lg font-semibold text-white">Advanced Algorithmic Trading</h3>
                  <p className="text-gray-400 mt-2">
                    Certification in advanced algorithmic trading strategies and system development.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l border-gray-700">
                  <div className="absolute w-4 h-4 bg-trading-accent rounded-full -left-2 top-0"></div>
                  <div className="mb-1 text-trading-accent">2018</div>
                  <h3 className="text-lg font-semibold text-white">Python for Financial Analysis</h3>
                  <p className="text-gray-400 mt-2">
                    Specialized certification focusing on Python applications in financial markets and trading.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l border-gray-700">
                  <div className="absolute w-4 h-4 bg-trading-accent rounded-full -left-2 top-0"></div>
                  <div className="mb-1 text-trading-accent">2016</div>
                  <h3 className="text-lg font-semibold text-white">B.Tech in Computer Science</h3>
                  <p className="text-gray-400 mt-2">
                    Bachelor's degree with specialization in algorithmic development and data structures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-trading-dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">What Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-trading-chart p-6 rounded-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Manas developed a custom Pine Script indicator that completely transformed my trading. The accuracy of the signals and the clean, intuitive design made it easy to implement in my strategy."
              </p>
              <div className="font-semibold text-white">John D.</div>
              <div className="text-sm text-gray-400">Forex Trader</div>
            </div>
            
            <div className="bg-trading-chart p-6 rounded-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "The Python trading bot Manas built for our cryptocurrency trading desk has been incredibly reliable. His attention to detail and focus on risk management really sets him apart from other developers we've worked with."
              </p>
              <div className="font-semibold text-white">Sarah M.</div>
              <div className="text-sm text-gray-400">Crypto Fund Manager</div>
            </div>
            
            <div className="bg-trading-chart p-6 rounded-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Working with Manas has been a game-changer for our trading firm. His expertise in both Pine Script and Python allowed us to implement a comprehensive trading system that has significantly improved our results."
              </p>
              <div className="font-semibold text-white">Michael K.</div>
              <div className="text-sm text-gray-400">Hedge Fund Analyst</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-trading-accent text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you build or optimize your trading systems.
          </p>
          <Link to="/contact" className="bg-white text-trading-accent px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 inline-block text-center font-semibold">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
