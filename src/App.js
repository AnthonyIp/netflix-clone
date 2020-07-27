import React  from "react"

import "./App.css"
import Banner from "./components/banner/banner.component";
import Nav    from "./components/nav/nav.component";
import Row from "./components/row/row.component";

import Requests from "./services/requestsApi";

function App() {
    return (
        <div className='App'>
            <Nav/>
            <Banner/>
            <Row title={`Netflix ORIGINALS`} fetchUrl={Requests.fetchNetflixOriginal} isLargeRow={true}/>
            <Row title={`Trending Now`} fetchUrl={Requests.fetchTrending}/>
            <Row title={`Top Rated`} fetchUrl={Requests.fetchTopRated}/>
            <Row title={`Action Movies`} fetchUrl={Requests.fetchActionMovies}/>
            <Row title={`Comedy Movies`} fetchUrl={Requests.fetchComedyMovies}/>
            <Row title={`Horror Movies`} fetchUrl={Requests.fetchHorrorMovies}/>
            <Row title={`Romantic Movies`} fetchUrl={Requests.fetchRomanceMovies}/>
            <Row title={`Documentaries`} fetchUrl={Requests.fetchDocumentaries}/>
        </div>
    )
}

export default App
