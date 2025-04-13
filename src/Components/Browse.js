import React from 'react';
import Header from './Header';
import useNowPlaying from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


export default function Browse() {

      useNowPlaying()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
