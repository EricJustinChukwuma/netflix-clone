import React from 'react';
import Main from '../Components/Main';
import Row from '../Components/Row';
import requests from '../Requests';

const HomePage = () => {
  return (
    <>
      <Main />
      <Row
        rowID="1" 
        title="Comedy"
        fetchURL={requests.fetchComedyMovies}
      />
      <Row
        rowID="2" 
        title="Trending"
        fetchURL={requests.fetchTrending}
      />
      <Row
        rowID="3"
        title={"Action"}
        fetchURL={requests.fetchActionMovies}
      />
      <Row
        rowID="4" 
        title="Horror"
        fetchURL={requests.fetchHorror}
      />
      <Row
        rowID="5" 
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
      />
    </>
  )
}

export default HomePage;