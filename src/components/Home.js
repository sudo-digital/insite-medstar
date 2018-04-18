import React from 'react';
import HomeHero from './Home/HomeHero'
import HomeMission from './Home/HomeMission'
import WorkInDC from './Home/WorkInDC'

class Home extends React.Component {

  render() {
    return (
      <div className='home'>
        <HomeHero />
        <HomeMission />
        <WorkInDC />
      </div>
    )
  }
}

export default Home;
