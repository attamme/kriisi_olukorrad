import React from 'react';
import ElectricityInfo from './info-pages/ElectricityInfo';
import WaterInfo from './info-pages/WaterInfo';
import ShelterInfo from './info-pages/ShelterInfo';
import StormInfo from './info-pages/StormInfo';
import WarInfo from './info-pages/WarInfo';

const infoComponents = {
  electricity: ElectricityInfo,
  water: WaterInfo,
  shelter: ShelterInfo,
  storm: StormInfo,
  war: WarInfo,
};

export default function InfoPage({ scenario, onStart, onBack }) {
  const InfoComponent = infoComponents[scenario.id];

  return (
    <div className="grid info-view">
      <div className="card cardPad">
        <h2 className="no-top">{scenario.title}</h2>
        <p className="small info-intro">{scenario.intro}</p>

        <hr className="divider" />

        <div className="info-box">
          {InfoComponent ? <InfoComponent /> : <p>Lisainfo puudub.</p>}
        </div>
      </div>

      <button onClick={onStart} className="card cardPad primaryBtn fullWidth mt-10">
        Alusta stsenaariumi
      </button>

      <button onClick={onBack} className="card cardPad ghostBtn fullWidth">
        Tagasi
      </button>
    </div>
  );
}
