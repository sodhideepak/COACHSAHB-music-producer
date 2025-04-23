
import React from 'react';
import { Mail, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-dark to-purple-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Have questions or ready to start your project? Reach out to us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info Card 1 */}
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl animate-slide-up">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple/10 text-purple mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Our team is always ready to assist you with any inquiries.
              </p>
              <a 
                href="mailto:info@rhythmandmuse.com" 
                className="text-purple hover:text-purple-dark transition-colors duration-300"
              >
                info@rhythmandmuse.com
              </a>
            </div>

            {/* Info Card 2 */}
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple/10 text-purple mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Have a quick question? Give us a call during business hours.
              </p>
              <a 
                href="tel:+15551234567" 
                className="text-purple hover:text-purple-dark transition-colors duration-300"
              >
                +1 (555) 123-4567
              </a>
            </div>

            {/* Info Card 3 */}
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple/10 text-purple mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Schedule a visit to our studio to see our facilities in person.
              </p>
              <address className="text-purple not-italic">
                123 Music Lane<br />
                Los Angeles, CA 90001
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="heading-secondary mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="animate-slide-in-right h-full min-h-[400px]">
              <div className="glass-card h-full rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="heading-secondary mb-4">Book a Session</h2>
            <p className="text-gray-600 text-lg">
              Ready to bring your musical vision to life? Schedule a session with our team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 shadow-lg animate-fade-in">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="booking-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="booking-name" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="booking-email" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="booking-phone" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed
                    </label>
                    <select 
                      id="booking-service" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent bg-white"
                    >
                      <option value="" disabled selected>Select a service</option>
                      <option value="production">Music Production</option>
                      <option value="mixing">Mixing & Mastering</option>
                      <option value="recording">Recording Session</option>
                      <option value="development">Artist Development</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="booking-date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      id="booking-date" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <select 
                      id="booking-time" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent bg-white"
                    >
                      <option value="" disabled selected>Select a time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (1PM - 5PM)</option>
                      <option value="evening">Evening (6PM - 10PM)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="booking-details" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea 
                    id="booking-details" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    placeholder="Tell us about your project and any specific requirements..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                >
                  Book Appointment
                </button>
                <p className="text-sm text-gray-500 text-center">
                  By booking, you agree to our terms of service and cancellation policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-purple text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Follow us on social media for updates, behind-the-scenes content, and more.
          </p>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={32} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={32} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={32} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors duration-300"
              aria-label="Youtube"
            >
              <Youtube size={32} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
