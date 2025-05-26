
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
    artist: "SURINDER KAUR X COACHSAHB",
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
    title: "CHANNA JAYI NA",
    artist: "KULDEEP MANAK X COACHSAHB",
    category: "Hip Hop",
    image: "https://i.ytimg.com/vi/KsIhMdS8Vpw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBgcrzru4BbPQxSudH5fvexFgfczA",
    streamingLinks: {
      spotify: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmZQMHllbkZ4THJfdURhMlN3QXNkM2Z5eDVWZ3xBQ3Jtc0trcHBjcjNxSDBJcEhwc3RsZFpTVm5hS2hXams4XzZ3NVpxNDBSSjRlTmVtOEJDS25QMzVzMTZjX0ItaHV1S0NrZENJSDRHQTE5NThWTk5RYk5FdXBHNEl6SkRENmd5eVNOTkowSU5PY0JlOElzcEtkRQ&q=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F3dZIRFXRiVo1OGelilhsAN%3Fsi%3D7ULuBbvqTtKXOrMT0G7wHQ&v=KsIhMdS8Vpw",
      appleMusic: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazJXZHpnNnlSWXhnQnV6VEhfTzdNMzc2Z2VlUXxBQ3Jtc0tuSWhLbHhBZTU1Y1pnOXJPWUY1M3Q3b1lNcGdoTmxmblkxMFZnbXVoSVZESjlURVppS1NYOTFCWkFVZEY5ZjVJLWRETmtqNkJxV1BvYUZ0eU5LZEhBdjNWNXZYbWNoOFNKQmlnTW1JZTd6WmVZNDd2aw&q=https%3A%2F%2Fmusic.apple.com%2Fin%2Falbum%2Fchanna-jayi-na%2F1747532713%3Fi%3D1747533182&v=KsIhMdS8Vpw"
    },
    credits: [
      "Artist- Kuldeep Manak"
    ],
    videosrc: "https://www.youtube.com/embed/NaJr3BXW4hk?si=BRIqrmgm2PpDhGi4" ,
    description: "A hip hop project featuring innovative beats and powerful lyrics. We worked with Marcus to develop a unique sound that stands out in today's hip hop landscape."
  },
  {
    id: 3,
    title: "BILLIAN AKHAAN",
    artist: "SURJIT BINDRAKHIA X COACHSAHB",
    category: "Folk",
    image: "https://i.ytimg.com/vi/NaJr3BXW4hk/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEwgZSgtMA8=&rs=AOn4CLAAK-_5qTzCv4AIGEJclP60Zrp1Ag",
    streamingLinks: {
      // spotify: "https://spotify.com",
      // appleMusic: "https://music.apple.com",
      soundCloud: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWlZbG5CX3M4d1dVVWpxc0pJWkF0MHpEZHhTUXxBQ3Jtc0ttT2VDT2hZWm5XQzB6S3dyTUhKWjhnUkdYRERONE1Wa0JvVFB0N19kbVhnTnZQS3h1QXg3VUhJc0ZydHp5cFRwNW1aVVJlS1FtZnFmNkdrbzQtSzdrWGpkX3kyRjZDVklySVhqeVFpdUJMTWhyelZsNA&q=https%3A%2F%2Fsoundcloud.com%2Fcoachsahb%2Fbillian-akhian&v=NaJr3BXW4hk"
    },
    videosrc: "https://www.youtube.com/embed/NaJr3BXW4hk?si=BRIqrmgm2PpDhGi4" ,
    credits: [
      "Artist- Surjit Bindrakhia"
    ],
    description: "A folk album featuring acoustic instruments and heartfelt lyrics. This project focused on capturing the authentic performance of Emily to create an intimate listening experience."
  },
  {
    id: 4,
    title: "JEONA MORH",
    artist: "KULDEEP MANAK X COACHSAHB",
    category: "Electronic",
    image: "https://i.ytimg.com/vi/jymN5Qvedlg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDwZNekBnCFMQR44-Y8LpayUngsDg",
    streamingLinks: {
      spotify: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUc3V2hCOTRpUWdncERfT2VlOEdQTDRiZWpoQXxBQ3Jtc0tteUZ0UGJGQWdfZG9fTUNxamZqLTRNRUljenVHVWdRVXhKTkFySmJlWWhGS1lwZy1PdUZwQlhNNmxkN09CdlAxbHlsVzZvYW1OZnZaQVQxT2JxWTZydTRJa2RGcGdKV09VcGJTYm9kVjllYXZoV293bw&q=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F416vYWInCGKaGXTMCbqK9A%3Fsi%3D-u1nI_WUSYOGDDPaAp-uLQ%26context%3Dspotify%253Aalbum%253A52GmFR92DyrgBPj2MDMI0d&v=jymN5Qvedlg",
      soundCloud: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHJFdEtseFVZQl9LY21qN1A3UnhKY0RJY1NXUXxBQ3Jtc0ttaHFMaXVmRVhXc1YyWDJHTHFmdnBDSFA4TnNFd3Q0a3NsRUhUdENNUkNjVkk0d2ZsWUMwXzFpcWx6WW1GZ0xDMXdUSEktdXVBNmJvYW5fcUdNQWhOZDdQSEpldTFySElFajBFVWhEbWhBQzl2djZEVQ&q=https%3A%2F%2Fon.soundcloud.com%2Fkorik&v=jymN5Qvedlg",
      appleMusic: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUkwYjRHYmdiMWFUVDRXeVpJMF9KRVlxQ0l5Z3xBQ3Jtc0ttUEQ1ZGNCRDYxUlFaZlhmWE9JQ3lsWkU4Unl0b1JIRnhFeFdYblVWYVY3ZjJ0Q1FDSF9fQlVYVXdqOHZvUGVmTUltSVBSdjVpTFRBLUs5Z0NkM09FWHE0SnpNUzVhNmo2dEFmdHY3YkNCQWJrOWVGVQ&q=https%3A%2F%2Fmusic.apple.com%2Fin%2Falbum%2Fjeona-morh-remix%2F1745091777%3Fi%3D1745091924&v=jymN5Qvedlg"
    },
    videosrc: "https://www.youtube.com/embed/jymN5Qvedlg?si=y6Lzg7PsFcuIl9fL" ,
    credits: [
      "Artist- KULDEEP MANAK "
    ],
    description: "An electronic music project with innovative sound design and pulsating rhythms. We collaborated closely with The Voltage to create a cutting-edge dance music experience."
  },
  {
    id: 6,
    title: "KASOOR",
    artist: "COACHSAHB X KAASH",
    category: "Rock",
    image: "https://i.ytimg.com/vi/2LxOUVNO48E/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBYLhRvEg1A-LqzJXxt-FoW7KMtHA",
    streamingLinks: {
      spotify: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFpCbk5uTXZYSk9sWGVXdWQ0UGtHeDYwcFZoQXxBQ3Jtc0tscHNqS0tzSzF1dVRtMFZPREd5MldBLXctZmpSejV3Vm83cEpMLXdKM2o4Y3k3YjNFOXV1ZzRQMkt3azZ4SjVTUktudmNrcy1XaG16NUp0eWdxN1Nod2hPdHdaVTFMdnMzMnpRZndMR2hQSmt2OG9xdw&q=https%3A%2F%2Fopen.spotify.com%2Falbum%2F66TQoaX8xxsFOb2wdk2Sp2&v=2LxOUVNO48E",
      appleMusic: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbXhWNUVfeER6QXVDclhoZWRsN2hodlJKajdTUXxBQ3Jtc0tsV3dvRHFxN2JGdkFHc1V3V1U3b2JuMGNYc2N5RWxnd1c3dG91aWNnN2lYYjN5QVJnbzFVSWN3WWVIdmxRSWNWZmctQVhfWEl4cUQwSXJaTXV0ODR5REE5YzZLZTMtZ2d5WEF2NllIWS1UWGRrLTVvcw&q=http%3A%2F%2Fitunes.apple.com%2Falbum%2Fid%2F1796144621&v=2LxOUVNO48E",
      // soundCloud: "https://soundcloud.com"
    },
    videosrc: "https://www.youtube.com/embed/2LxOUVNO48E?si=7yGxL_CyRdx6ehA-" ,
    credits: [
       "Artist- KAASH "
    ],
    description: "A hard-hitting rock album with powerful guitars and dynamic performances. We worked with Thunder Strike to capture their raw energy and translate it into a polished recording."
  },
  {
    id: 5,
    title: "NEHRO PAAR BANGLA",
    artist: "ROMEY GILL X COACHSAHB",
    category: "R&B",
    image: "https://i.ytimg.com/vi/Sz5vARBok7o/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBno9C89NjqkCtGNPRav9V5dVbvVw",
    streamingLinks: {
      // spotify: "https://spotify.com",
      soundCloud: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbjFNbGczdW55SXAxUS1vQzFQc1FsU1RFdXhDZ3xBQ3Jtc0trZ1pRdEVpcWVpSGlVZmRGOW5uMXVKRmVqS2xKd2dJVUVZeThlVmd1R09wQXpLNFRvTGtBWXNkLXIybXVWMHZoMEdKSWdKZW5jU0s0TXEyOXZDOVZxcl9qaWxsaWxsZGFNOUtnTkk1aUFvY0EyUzQ1Yw&q=https%3A%2F%2Fsoundcloud.com%2Fcoachsahb%2Fnehro-paar-bangla&v=Sz5vARBok7o"
    },
    videosrc: "https://www.youtube.com/embed/Sz5vARBok7o?si=L8o6aanCxUFfSdl5" ,
    credits: [
      "Artist- ROMEY GILL "
    ],
    description: "A soulful R&B album with smooth vocals and rich instrumentation. This project blends classic soul influences with modern production techniques."
  },
  {
    id: 7,
    title: "BAND AKHIAN",
    artist: "COACHSAHB X KAASH",
    category: "R&B",
    image: "https://i.ytimg.com/vi/rEk0AfEX8Ac/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD6juTND1asAXblZjsyaYYYesLyOg",
    streamingLinks: {
      spotify: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmEzaDg0RHMtblpnbEdEWkliSm1YVml5VTRBd3xBQ3Jtc0ttaGwxU2V6aWRwbi1DUmRST1JDY1NLdUN6RTFTVUk5MWdHREtIN2xZVllnWnpqZm9oRE9TOTU3UDhXX0k2em5OR0RuanlMSkEtbzJZRzRDSzhqVlhWSGhpRVF1WjVDWHFrUVpxR1JuVXRBaC1VaHNmYw&q=https%3A%2F%2Fopen.spotify.com%2Falbum%2F66TQoaX8xxsFOb2wdk2Sp2&v=rEk0AfEX8Ac",
      appleMusic: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbTBOdmdKcjlyNVdNSmRXT2lySU45UFd2T3Ywd3xBQ3Jtc0trd0Y0TTl0REtrX0pvX3hFdTVoMHJwUnFGM25IdHZBeV9OZkRsX2VSUjBGQWJDQm9lTi1XTDc2cWpOYWM4a3BaYTlETlhzejU0WnlNUkUtaG9Ldzdha1VIdTRWY204bTJ0UzFfLU1UelBXeXp1NTdPMA&q=http%3A%2F%2Fitunes.apple.com%2Falbum%2Fid%2F1796144621&v=rEk0AfEX8Ac",
      // soundCloud: "https://soundcloud.com"
    },
    videosrc: "https://www.youtube.com/embed/rEk0AfEX8Ac?si=4KYZS8KfBdsIjfym" ,
    credits: [
       "Artist- KAASH "
    ],
    description: "An electrifying rock album driven by intense guitar riffs and high-energy performances. We collaborated with Thunder Strike to harness their raw power and deliver a refined, impactful sound."
  },
  {
    id: 8,
    title: "LAL RANG DI",
    artist: "CHAMKILA X AMARJOT X COACHSAHB",
    category: "Pop",
    image: "https://i.ytimg.com/vi/8IJHWVuJ714/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDqkbbDikIEtTbopv7Z1vaxIBw_ow",
    streamingLinks: {
      // spotify: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmEzaDg0RHMtblpnbEdEWkliSm1YVml5VTRBd3xBQ3Jtc0ttaGwxU2V6aWRwbi1DUmRST1JDY1NLdUN6RTFTVUk5MWdHREtIN2xZVllnWnpqZm9oRE9TOTU3UDhXX0k2em5OR0RuanlMSkEtbzJZRzRDSzhqVlhWSGhpRVF1WjVDWHFrUVpxR1JuVXRBaC1VaHNmYw&q=https%3A%2F%2Fopen.spotify.com%2Falbum%2F66TQoaX8xxsFOb2wdk2Sp2&v=rEk0AfEX8Ac",
      // appleMusic: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbTBOdmdKcjlyNVdNSmRXT2lySU45UFd2T3Ywd3xBQ3Jtc0trd0Y0TTl0REtrX0pvX3hFdTVoMHJwUnFGM25IdHZBeV9OZkRsX2VSUjBGQWJDQm9lTi1XTDc2cWpOYWM4a3BaYTlETlhzejU0WnlNUkUtaG9Ldzdha1VIdTRWY204bTJ0UzFfLU1UelBXeXp1NTdPMA&q=http%3A%2F%2Fitunes.apple.com%2Falbum%2Fid%2F1796144621&v=rEk0AfEX8Ac",
      soundCloud: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbXRpc00yTnJMb255Yy1QbzZBSUxwcVJBOW9GZ3xBQ3Jtc0tuN2dQTUkzZ3JSNlN0eWs3bFp0NGFWdHZ0cWpHQ1V0MmxmUC1wN3Q1TEJnMDJwZXRmbVYxcEJpM282dHlPSFNVODh4NXJWTGFPM3ZCRmlqYkhkNmE0THVhaFVKWDVzeHhGVlg2NXB4ZHpzeUpJdkxmYw&q=https%3A%2F%2Fsoundcloud.com%2Fcoachsahb%2Flal-rang-di&v=8IJHWVuJ714"
    },
    videosrc: "https://www.youtube.com/embed/8IJHWVuJ714?si=PWQgr7Wp7DQAhHLZ" ,
    credits: [
       "Artist- CHAMKILA , AMARJOT "
    ],
    description: "A vibrant pop album filled with catchy hooks and dynamic vocals. We teamed up with Thunder Strike to channel their infectious energy into a polished, radio-ready production."
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
