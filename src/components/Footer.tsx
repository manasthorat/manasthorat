
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-trading-dark py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Manas Thorat</h3>
            <p className="text-gray-400">
              Expert Pine Script Developer & Python Automation Specialist for Trading Systems
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-trading-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-trading-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-trading-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-trading-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-trading-accent transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-trading-accent transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-trading-accent transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-trading-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact</h3>
            <p className="text-gray-400">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <p className="text-gray-400">
              Email: contact@example.com
            </p>
            <Link to="/contact" className="btn-outline mt-4">Get in Touch</Link>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} Manas Thorat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
