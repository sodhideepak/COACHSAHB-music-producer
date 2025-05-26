
import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  artist: string;
  category: string;
  image: string;
  streamingLinks: {
    spotify?: string;
    appleMusic?: string;
    soundCloud?: string;
  };
  videosrc?: string;
  credits: string[];
  description: string;
}

const portfolioData: PortfolioItem[] = [
  // {
  //   id: 1,
  //   title: "DO PALL",
  //   artist: "Surinder Kaur",
  //   category: "Pop",
  //   image: "https://i.ytimg.com/vi/MXprAR_7Omc/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGMgZShOMA8=&rs=AOn4CLCu3RDVhWLGgu1353nTYzdDcx_Bkg",
    
  //   streamingLinks: {
  //     spotify: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbl9tVVQzcUYyQjJKOXNoSDE0WXdueHdvYzF6UXxBQ3Jtc0tuU1g4eEh5TlkxZDZMLUdULXpzeUJFZHAyQy1tTk50OWx0RXBteGQyeFBwQjM4ZERud1JjZTM3dWp2SFNVYXdhUnRXTml2MjJqU3g2RVpLdkFIcDdNUmF3ZWRXWGFSNGM4eFdWR001NVEtRkcxckJmVQ&q=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F37Yn2x4PABhKnsgo3hMMmY%3Fsi%3DHZp8ahJlR_GyJ2RbAcw-Gw%26context%3Dspotify%253Aalbum%253A57qYgk019OMuVJM5Bc5Q13&v=MXprAR_7Omc",
  //     appleMusic: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazVDV2pZMXM2WTJveWJDZ3pQRjVTRVFzUnAwUXxBQ3Jtc0tud2tkRTRMV1QyWWJQcWp6OGZUMDhRQnJYX2ZibkF6ejlFOHJyVGVVcEV6WlRIaE9IOHNORmNqRnh5SnRNR19xT3luaDhVRkFhSy05bWlWS20xVFd1LWZ2eFlSbzU5TmI1VERzYWpWeERoYmJnN0RuRQ&q=https%3A%2F%2Fmusic.apple.com%2Fin%2Falbum%2Fdo-pall%2F1747532315%3Fi%3D1747532328&v=MXprAR_7Omc",
  //     soundCloud: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa1RTU1RNMGJFQXFHVGxwOTZ1c0FzOVlyZldMQXxBQ3Jtc0ttWDV2ODVwcDdkN3JJTU52REZpcThhWDFqZzBKYmhINVowNDZXU1U4WHd5c3NUSVJuNWlGYlp0ZHpOQUxiS05Dd1M0c3kxeUtLUk9hNnVOUjdsUkFmby1pSHRCSFliVUhoU29xbXhURW5oYlF5dURyYw&q=https%3A%2F%2Fsoundcloud.com%2Fcoachsahb%2Fdo-pall-surinder-kaur&v=MXprAR_7Omc"
  //   },
  //   credits: [
  //     "Artist- Surinder Kaur"
  //   ],
  //   description: "A pop anthem with catchy melodies and powerful vocals. This project was a collaboration with Sarah Johnson, focusing on creating a radio-ready hit with contemporary production techniques."
  // },
  {
    id: 1,
    title: "DO PALL",
    artist: "Surinder Kaur",
    category: "Pop",
    image: "https://i.ytimg.com/vi/MXprAR_7Omc/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGMgZShOMA8=&rs=AOn4CLCu3RDVhWLGgu1353nTYzdDcx_Bkg",
    
    streamingLinks: {
      spotify: "https://open.spotify.com/track/37Yn2x4PABhKnsgo3hMMmY",
      appleMusic: "https://music.apple.com/in/album/do-pall/1747532315?i=1747532328",
      soundCloud: "https://soundcloud.com/coachsahb/do-pall-surinder-kaur"
    },
    
    videosrc: "https://www.youtube.com/embed/MXprAR_7Omc?si=vWzhFhRhCk66Xmqf" ,
  
    credits: [
      "Artist- Surinder Kaur"
    ],
    
    description: "A pop anthem with catchy melodies and powerful vocals. This project was a collaboration with Sarah Johnson, focusing on creating a radio-ready hit with contemporary production techniques."
  },  
  {
    id: 2,
    title: "Urban Echoes",
    artist: "Marcus King",
    category: "Hip Hop",
    image: "https://images.unsplash.com/photo-1571173159696-e5c0829d970f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    streamingLinks: {
      spotify: "https://spotify.com",
      soundCloud: "https://soundcloud.com"
    },
    credits: [
      "Production: Rhythm & Muse",
      "Mixing: Alex Johnson",
      "Mastering: David Wilson",
      "Vocals: Marcus King",
      "Additional Programming: Rhythm & Muse"
    ],
    description: "A hip hop project featuring innovative beats and powerful lyrics. We worked with Marcus to develop a unique sound that stands out in today's hip hop landscape."
  },
  {
    id: 3,
    title: "Acoustic Memories",
    artist: "Emily Carter",
    category: "Folk",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    streamingLinks: {
      spotify: "https://spotify.com",
      appleMusic: "https://music.apple.com"
    },
    credits: [
      "Production: Rhythm & Muse",
      "Mixing: John Smith",
      "Mastering: Sarah Phillips",
      "Vocals & Guitar: Emily Carter",
      "Piano: Rhythm & Muse"
    ],
    description: "A folk album featuring acoustic instruments and heartfelt lyrics. This project focused on capturing the authentic performance of Emily to create an intimate listening experience."
  },
  {
    id: 4,
    title: "Electric Dreams",
    artist: "The Voltage",
    category: "Electronic",
    image: "https://images.unsplash.com/photo-1642009824979-caddf3d12e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    streamingLinks: {
      spotify: "https://spotify.com",
      soundCloud: "https://soundcloud.com"
    },
    credits: [
      "Production: Rhythm & Muse",
      "Mixing: Rhythm & Muse",
      "Mastering: David Wilson",
      "All Elements: The Voltage & Rhythm & Muse"
    ],
    description: "An electronic music project with innovative sound design and pulsating rhythms. We collaborated closely with The Voltage to create a cutting-edge dance music experience."
  },
  {
    id: 5,
    title: "Soul Revival",
    artist: "James Robinson",
    category: "R&B",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    streamingLinks: {
      spotify: "https://spotify.com",
      appleMusic: "https://music.apple.com"
    },
    credits: [
      "Production: Rhythm & Muse",
      "Mixing: Alex Johnson",
      "Mastering: Sarah Phillips",
      "Vocals: James Robinson",
      "Bass: Michael Brown",
      "Drums: Chris Davis"
    ],
    description: "A soulful R&B album with smooth vocals and rich instrumentation. This project blends classic soul influences with modern production techniques."
  },
  {
    id: 6,
    title: "Rock Revolution",
    artist: "Thunder Strike",
    category: "Rock",
    image: "https://images.unsplash.com/photo-1598387993281-cecf8B71a8f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80",
    streamingLinks: {
      spotify: "https://spotify.com",
      appleMusic: "https://music.apple.com",
      soundCloud: "https://soundcloud.com"
    },
    credits: [
      "Production: Rhythm & Muse",
      "Mixing: John Smith",
      "Mastering: David Wilson",
      "Vocals: Tom Richards",
      "Guitar: Mike Johnson",
      "Bass: David Lee",
      "Drums: Chris Adams"
    ],
    description: "A hard-hitting rock album with powerful guitars and dynamic performances. We worked with Thunder Strike to capture their raw energy and translate it into a polished recording."
  }
];

const PortfolioPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...new Set(portfolioData.map(item => item.category))];

  const filteredItems = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  const openDetail = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeDetail = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-dark to-purple-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl text-gray-300">
              Explore our diverse collection of music production projects.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8 bg-light">
        <div className="container-custom">
          <div className="flex justify-center gap-4 flex-wrap mb-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  filter === category 
                    ? 'bg-purple text-white' 
                    : 'bg-white text-dark hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="glass-card overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl animate-fade-in"
                onClick={() => openDetail(item)}
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.title} by ${item.artist}`}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.artist}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-purple/30">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-purple">
                      <Play size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-purple/10 text-purple px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                    <span className="text-gray-600 text-sm">
                      Click to view details
                    </span>
                  </div>
                  <p className="text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeDetail}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                <iframe
                  width="100%"
                  height="315"
                  src={`${selectedItem.videosrc}`}
                  title={`${selectedItem.title} by ${selectedItem.artist}`}
                  className="w-full h-60 rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <div className="mt-6">
              <h3 className="text-lg font-semibold mb-1">Streaming Links</h3>
              <div className="flex gap-2">
                {selectedItem.streamingLinks.spotify && (
                  <a 
                    href={selectedItem.streamingLinks.spotify} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary py-2"
                  >
                    Spotify
                  </a>
                )}
                {selectedItem.streamingLinks.appleMusic && (
                  <a 
                    href={selectedItem.streamingLinks.appleMusic} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary py-1"
                  >
                    Apple Music
                  </a>
                )}
                {selectedItem.streamingLinks.soundCloud && (
                  <a 
                    href={selectedItem.streamingLinks.soundCloud} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary py-2"
                  >
                    SoundCloud
                  </a>
                )}
              </div>
            </div>
                </div>
                <div className="md:w-1/2">
                  <span className="bg-purple/10 text-purple px-3 py-1 rounded-full text-sm">
                    {selectedItem.category}
                  </span>
                  <h2 className="text-3xl font-bold mt-2">{selectedItem.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{selectedItem.artist}</p>
                  
                  <p className="text-gray-700 mb-6">
                    {selectedItem.description}
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Credits</h3>
                    <ul className="space-y-2 text-gray-700">
                      {selectedItem.credits.map((credit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple mr-2">•</span>
                          {credit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-purple text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Next Hit?</h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Let's collaborate on your next music project and bring your vision to life.
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

export default PortfolioPage;
