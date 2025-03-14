
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import ChartBackground from '@/components/ChartBackground';
import { toast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-trading-dark overflow-hidden">
        <ChartBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300">
              Let's discuss how I can help you create custom trading solutions
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-trading-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-trading-chart p-3 rounded-lg mr-4">
                    <Mail className="text-trading-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <p className="text-gray-400">
                      <a href="mailto:contact@example.com" className="hover:text-trading-accent transition-colors">
                        contact@example.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-trading-chart p-3 rounded-lg mr-4">
                    <Phone className="text-trading-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <p className="text-gray-400">
                      <a href="tel:+1234567890" className="hover:text-trading-accent transition-colors">
                        +1 (234) 567-890
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-trading-chart p-3 rounded-lg mr-4">
                    <MapPin className="text-trading-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Location</h3>
                    <p className="text-gray-400">Remote / Worldwide</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-trading-chart p-3 rounded-lg text-gray-400 hover:text-trading-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-trading-chart p-3 rounded-lg text-gray-400 hover:text-trading-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-trading-chart p-3 rounded-lg text-gray-400 hover:text-trading-accent transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-8">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="contact-input"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map or Additional Info */}
      <section className="py-16 bg-trading-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-trading-chart rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Common Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-trading-accent mb-3">How long does a typical project take?</h3>
                <p className="text-gray-300">
                  Most custom indicator or strategy projects are completed within 1-2 weeks. More complex systems like complete trading bots may take 3-4 weeks depending on requirements.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-trading-accent mb-3">Do you offer ongoing support?</h3>
                <p className="text-gray-300">
                  Yes, I provide support packages to ensure your trading systems continue to work optimally and can be adjusted as markets evolve.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-trading-accent mb-3">What information do you need to start?</h3>
                <p className="text-gray-300">
                  To begin, I need a clear description of your trading approach, specific requirements for your indicators or systems, and details about which markets you're trading.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-trading-accent mb-3">Do you provide source code?</h3>
                <p className="text-gray-300">
                  Yes, all custom projects come with full source code and documentation so you can understand how your system works and make minor adjustments if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
