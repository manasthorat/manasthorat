
import { useState } from 'react';
import { Mail, Phone, Send, MessageSquare } from 'lucide-react';
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
                    <MessageSquare className="text-trading-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Chat Now</h3>
                    <p className="text-gray-400">
                      <a 
                        href="https://wa.me/1234567890" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center bg-green-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-green-700 transition-colors"
                      >
                        <MessageSquare size={18} className="mr-2" />
                        WhatsApp
                      </a>
                    </p>
                  </div>
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
