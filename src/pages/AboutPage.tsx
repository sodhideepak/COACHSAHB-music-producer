
import React from 'react';
import { Check } from 'lucide-react';

const AboutPage: React.FC = () => {
  const milestones = [
    
      {
        year: 2020,
        title: "Hustle and Learning",
        description: "Coachsahb began his journey into music production, mastering professional software and refining his unique sound."
      },
      {
        year: 2021,
        title: "Remixing the Legends Hits",
        description: "He started remixing iconic tracks, paying tribute to legendary artists while adding his own creative flair."
      },
      {
        year: 2022,
        title: "Breakthrough Hits",
        description: "Delivered major hits like 'Jeona Morh' and 'Do Pall', gaining recognition across the industry and among fans."
      },
      {
        year: 2023,
        title: "Collaborations & Growth",
        description: "Collaborated with emerging artists across genres, expanding his creative network and production influence."
      },
      {
        year: 2024,
        title: "Gold Record Milestone",
        description: "His original works and productions reached gold record status, cementing his reputation in the music industry."
      },
      {
        year: 2025,
        title: "Working with the Best",
        description: "Currently collaborating with renowned professionals, pushing boundaries and continuing to shape the sound of modern music."
      }
    
    
  ];

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Industry Hits', value: '10+' },
    { label: 'Happy Clients', value: '20+' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-dark to-purple-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300">
              Meet the team behind CoachSahb and discover our journey in music production.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="heading-secondary mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 text-lg">
              Coachsahb is a seasoned music professional with over 5 years of industry experience, delivering numerous hit productions across a wide range of genres. Known for a dynamic sound and innovative approach, Coachsahb has worked on multiple high-impact projects, shaping tracks that resonate with audiences worldwide. 
              </p>
              <p className="text-gray-700 mb-6 text-lg">
              From soulful melodies to hard-hitting beats, every production reflects a deep understanding of music and a commitment to quality.


              </p>
            
              <p className="text-gray-700 text-lg">
                Today, CoachSahb stands as a testament to our dedication to the craft of music production and our passion for creating impactful sound experiences.
              </p>
            </div>
            <div className="relative h-[500px] animate-slide-in-right">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" 
                  alt="Recording studio" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                  alt="Music production" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
                <p className="text-white/80 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="heading-secondary mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 text-lg">
              We're committed to excellence in music production and artist development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple/10 text-purple mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Artistic Integrity</h3>
              <p className="text-gray-600">
                We respect and nurture the unique vision of each artist we work with, ensuring their artistic voice remains authentic throughout the production process.
              </p>
            </div>

            {/* Value 2 */}
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple/10 text-purple mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="m7 10 3 3 7-7"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in technical execution, utilizing cutting-edge equipment and innovative techniques to create premium quality productions.
              </p>
            </div>

            {/* Value 3 */}
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple/10 text-purple mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborative Spirit</h3>
              <p className="text-gray-600">
                We believe that the best music emerges from true collaboration, where ideas are freely shared and refined through open communication and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="heading-secondary mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">
              Rhythm & Muse's evolution through the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple/20 rounded-full"></div>
            
            {/* Timeline events */}
            <div className="space-y-20">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-1/2"></div>
                  <div className="relative flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple rounded-full z-10 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-1/2 px-8">
                    <div className="glass-card p-6 shadow-md">
                      <span className="text-purple font-semibold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-semibold mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}



          <section className="py-20 bg-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="heading-secondary mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-lg">
            The talented professionals behind CoachSahb.
          </p>
        </div>

        {/* Centered grid with 50% width */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Member 2 */}
          <div className="glass-card overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="aspect-w-1 aspect-h-1 relative">
            <img 
              src="images/WhatsApp Image 2025-05-27 at 00.24.05.jpeg" 
              alt="Sarah Phillips - Senior Sound Engineer" 
              style={{ height: '320px', width: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">GURSHAAN SINGH HUNDAL</h3>
              <p className="text-purple mb-4"> Lead Remix Producer </p>
              <p className="text-gray-600">
              Gurshaan leads the creative direction of all remix projects, bringing energy, style, and innovation to every track.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="glass-card overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-w-1 aspect-h-1 relative">
              <img 
                src="images/WhatsApp Image 2025-05-27 at 01.07.27.jpeg" 
                alt="Michael Brown - Music Director" 
                style={{ height: '320px', width: '100%', objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">SURAJ PRATAP SINGH</h3>
              <p className="text-purple mb-4">Project Coordinator</p>
              <p className="text-gray-600">
              Suraj manages timelines, communication, and collaboration across the remix team, ensuring smooth execution of every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* CTA Section */}
      <section className="py-16 bg-purple text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Let's create something extraordinary together. Contact us today to discuss your music production needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact#booking" className="btn-primary bg-white text-purple hover:bg-gray-100">
              Book a Session
            </a>
            <a href="/contact" className="btn-secondary text-white border-white hover:bg-white/10">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
