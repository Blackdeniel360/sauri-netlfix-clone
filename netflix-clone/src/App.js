import { useState } from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from './requests';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchUrl = `/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchQuery}&include_adult=false`;
  const profiles = [
    { id: 1, img: "/assets/weird.jpeg", name: "Weird Sauri", genre: requests.fetchNetflixOriginals },
    { id: 2, img: "/assets/happy.jpeg", name: "Happy Sauri", genre: requests.fetchComedyMovies },
    { id: 3, img: "/assets/serious.jpeg", name: "Serious Sauri", genre: requests.fetchDocumentaries || requests.fetchTopRated },
    { id: 4, img: "/assets/sus.jpeg", name: "Sus Sauri", genre: requests.fetchActionMovies },
  ];
  const [activeProfile, setActiveProfile] = useState(profiles[0]);
  
  
  return (
    <div className="App">
      <Nav 
        onSearch={(query) => setSearchQuery(query)} 
        activeProfile={activeProfile}
        setActiveProfile={setActiveProfile}
        profiles={profiles}
      />
      {searchQuery ? (
        <div style={{ paddingTop: "80px" }}>
          <Row title="Search Results" fetchUrl={searchUrl} isLargeRow />
        </div>
      ) : (
        <>
          <Banner />
        
          <Row
            key={activeProfile.id}
            title={`${activeProfile.name.toUpperCase()}'S PICKS`}
            fetchUrl={activeProfile.genre}
            isLargeRow
          />

          <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />

          <Row
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
          />

          <Row
            title="Top Rated"
            fetchUrl={requests.fetchTopRated}
          />

          <Row
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
          />

          <Row
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
          />

          <Row
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
          />

          <Row
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
          />

        </>
      )}
    </div>
  );
}

export default App;