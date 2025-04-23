
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarClock, Music, Headphones, Check } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-b from-dark to-dark/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Elevate Your Sound <span className="text-purple-light">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Premium music production for artists who demand excellence. Transform your musical vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="btn-primary">
                Explore Our Work
              </Link>
              <Link to="/contact#booking" className="btn-secondary text-white border-white hover:bg-white/10">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <h2 className="heading-secondary mb-4">Our Music Production Services</h2>
            <p className="text-gray-600 text-lg">
              We offer comprehensive music production services tailored to your unique sound and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple/10 text-purple mb-6">
                <Music size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Music Production</h3>
              <p className="text-gray-600">
                Full-service music production from concept to final master, bringing your artistic vision to life.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple/10 text-purple mb-6">
                <Headphones size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mixing & Mastering</h3>
              <p className="text-gray-600">
                Professional mixing and mastering to ensure your music sounds pristine on all platforms.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple/10 text-purple mb-6">
                <Music size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Recording Sessions</h3>
              <p className="text-gray-600">
                State-of-the-art recording facilities and expertise for vocals, instruments, and full bands.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple/10 text-purple mb-6">
                <CalendarClock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Artist Development</h3>
              <p className="text-gray-600">
                Comprehensive artist development services to help you grow and refine your musical identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-dark to-purple">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center text-white animate-fade-in">
              <h3 className="text-5xl font-bold mb-2">200+</h3>
              <p className="text-white/80 text-lg">Satisfied Clients</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center text-white animate-fade-in" style={{animationDelay: '0.1s'}}>
              <h3 className="text-5xl font-bold mb-2">500+</h3>
              <p className="text-white/80 text-lg">Projects Completed</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center text-white animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-5xl font-bold mb-2">15+</h3>
              <p className="text-white/80 text-lg">Years Experience</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center text-white animate-fade-in" style={{animationDelay: '0.3s'}}>
              <h3 className="text-5xl font-bold mb-2">20+</h3>
              <p className="text-white/80 text-lg">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="heading-secondary mb-6">Ready to Work Together?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Book a session with our experienced team and take the first step towards bringing your musical vision to life.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 pt-1"><Check size={20} /></span>
                  <span className="text-gray-700">Free initial consultation to discuss your project</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 pt-1"><Check size={20} /></span>
                  <span className="text-gray-700">Flexible scheduling to fit your timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 pt-1"><Check size={20} /></span>
                  <span className="text-gray-700">State-of-the-art equipment and studio space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 pt-1"><Check size={20} /></span>
                  <span className="text-gray-700">Experienced producers and engineers</span>
                </li>
              </ul>
              <Link to="/contact#booking" className="btn-primary">
                Schedule Appointment
              </Link>
            </div>

            <div className="glass-card p-8 shadow-lg animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-6 text-center">Book A Session</h3>
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
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent bg-white"
                  >
                    <option value="" disabled selected>Select a service</option>
                    <option value="production">Music Production</option>
                    <option value="mixing">Mixing & Mastering</option>
                    <option value="recording">Recording Session</option>
                    <option value="development">Artist Development</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
