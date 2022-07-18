import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in';

export const Scoring = () => {
  const [team1, setteam1] = useState('Pakistan')
  const [team2, setteam2] = useState('Australia')


  // setTimeout(() => {

  //   return <Spinner/>
  // }, 1000);
  const handleChange = (team) => (event) => {
    if (team === 'team1') {
      setteam1(event.target.value)
    }
    else {
      setteam2(event.target.value)
    }
  }
  console.log(team1, team2);
  return (
    <FadeIn className='scoringMedia' transitionDuration={2000}>
      {localStorage.getItem("email") ?
        <div id='div1' className='signinFullBackground' style={{ height: "93vh" }}>

          {/* {<Spinner />} */}

          {/* <Spinner /> */}
          <div className='beforeLogin' style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "90vh" }}>
            <div className='login' style={{ textAlign: "center", padding: "6rem", borderRadius: "20px", boxShadow: "10px 10px 68px -3px rgba(255,255,255,0.3)" }}>
              <div>
                <h1>Enter Teams</h1>
                <div className='teamNames'>
                  <div>
                    <input onChange={handleChange('team1')} value={team1} type="text" placeholder='Enter Team 1 name' />
                    {/* <input style={{ flex: "1" }} type="color" value={"#ffffff"} /> */}
                    <h2 style={{ color: "yellow", textAlign: "center" }}>V<span>/</span>S</h2>
                    <input onChange={handleChange('team2')} value={team2} type="text" placeholder='Enter Team 2 name' />
                    {/* <input style={{ flex: "1" }} type="color" /> */}
                  </div>
                  <Link className='link' to={`/scoring/${team1}-vs-${team2}`}><i className="fas fa-angle-double-right"></i></Link>
                </div>

                {/* <Scoring2 /> */}
              </div>
            </div>
          </div>
        </div> : <div className='login' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <h1>To open scorebook, you need to be logged in first.</h1>
        </div>}
    </FadeIn>
  )
}
