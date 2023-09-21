import React, { useState } from "react";
import Tracks from "./components/Tracks";
import Controls from "./components/Controls";
import { MusicContext } from "./components/MusicContext";
import ApnaaMujheTuLagaa from "./Assets/ApnaaMujheTuLagaa.mp3";
import Baarish from "./Assets/Baarish.mp3";
import BatameezDil from "./Assets/BatameezDil.mp3";
import Beedi from "./Assets/Beedi.mp3";
import BrownRang from "./Assets/BrownRang.mp3";
import NaaJane from "./Assets/NaaJane.mp3";
import TumHiHo from "./Assets/TumHiHo.mp3";
import DilNaJaaneKyun from "./Assets/DilNaJaaneKyun.mp3";
import JeeneLagaHoon from "./Assets/JeeneLagaHoon.mp3";
import PartyWithBhoothnath from "./Assets/PartyWithBhoothnath.mp3";
import TumSeHi from "./Assets/TumSeHi.mp3";
import GandiBaat from "./Assets/GandiBaat.mp3";

function App() {
  const [data, setdata] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Apnaa Mujhe Tu Lagaa - Sonu Nigam",
        file: ApnaaMujheTuLagaa,
      },
      {
        name: "Baarish - Mohammad Irfaan",
        file: Baarish,
      },
      {
        name: "Batameez Dil - Benny Dayal",
        file: BatameezDil,
      },
      {
        name: "Beedi - Sunidhi Chauhan",
        file: Beedi,
      },
      {
        name: "Brown Rang - Yo Yo Honey Singh",
        file: BrownRang,
      },
      {
        name: "Dil Na Jaane Kyun - Atif Aslam ",
        file: DilNaJaaneKyun,
      },
      {
        name: "Tum Hi Ho - Arijit Singh",
        file: TumHiHo,
      },
      {
        name: "Gandi Baat - Mika Singh ",
        file: GandiBaat,
      },
      {
        name: "Jeene Laga Hoon - Atif Aslam",
        file: JeeneLagaHoon,
      },
      {
        name: "Naa Jaana - Nirah Sridhar ",
        file: NaaJane,
      },
      {
        name: "Party With Bhoothnath  - Yo Yo Honey Singh",
        file: PartyWithBhoothnath,
      },
      {
        name: "Tum Se Hi - Mohit Chauhan",
        file: TumSeHi,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });

  return (
  
    <MusicContext.Provider value={[data, setdata]}>
      <div className="container">
        <Tracks />
        <Controls className="Controls" />
      </div>
    </MusicContext.Provider>
  
  );
}

export default App;
