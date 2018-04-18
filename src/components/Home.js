import React from 'react';
import HomeHero from './Home/HomeHero'
import HomeMission from './Home/HomeMission'
import WorkInDC from './Home/WorkInDC'
import HomeQuotes from './Home/HomeQuotes'
import HomePartners from './Home/HomePartners'
import HomeMap from './Home/HomeMap'

class Home extends React.Component {

  render() {
    return (
      <div className='home'>
        <HomeHero />
        <HomeMission />
        <WorkInDC />
        <HomeQuotes />
        <HomePartners />
        <HomeMap />
      </div>
    )
  }
}

export default Home;
