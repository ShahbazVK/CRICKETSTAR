import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast'
import FadeIn from 'react-fade-in'


export const Scoring3 = () => {
  // let newArr = []
  const [facerSelected, setfacerSelected] = useState(false)
  const location = useLocation();
  let { players1, players2, tossWon, opted, tossLost, team1, team2, teamAimages, teamBimages } = location.state
  const [batFirst, setbatFirst] = useState()
  const [bowlFirst, setbowlFirst] = useState()
  const [batsmanNames, setbatsmanNames] = useState({ onStrike: "", runner: "" })
  const [bowlerName, setbowlerName] = useState({ bowling: "" })
  const [player1, setplayer1] = useState(players1)
  const [player2, setplayer2] = useState(players2)

  // console.log(location.state);
  // var bat, bowl

  useEffect(() => {
    if (location.state.opted === 'bowl') {
      setbatFirst(location.state.tossLost)
      setbowlFirst(location.state.tossWon)
    }
    else {
      setbatFirst(location.state.tossWon)
      setbowlFirst(location.state.tossLost)
    }
  }, [])


  // const info1 = () => {
  //   if (location.state.opted === 'bowl') {
  //     // setbatFirst(location.state.tossLost)
  //     // setbowlFirst(location.state.tossWon)
  //     // bat = location.state.tossLost
  //     // bowl = location.state.tossWon
  //     return (
  //       <h4>{batFirst} bat <br /> {bowlFirst} bowl</h4>
  //     )
  //   }
  //   else {
  //     // setbatFirst(location.state.tossWon)
  //     // setbowlFirst(location.state.tossLost)
  //     // let bat = location.state.tossWon
  //     // let bowl = location.state.tossLost
  //     return (
  //       <div>

  //         <h4>{batFirst} bat <br /> {bowlFirst} bowl</h4>
  //         <h4>Select batters and bowlers</h4>
  //       </div>
  //     )
  //   }
  // }

  const info2 = () => {

    const batsman = (a) => {
      if (!facerSelected) {
        setbatsmanNames(prev => { return { ...prev, ['onStrike']: a } })
      }
      else {
        setbatsmanNames(prev => { return { ...prev, ['runner']: a } })
      }
      // console.log(batsmanNames);
    }

    const info3 = (opted1, opted2, players, team) => {
      if ((location.state.tossWon === location.state.team1 && location.state.opted === opted1) || (location.state.tossLost === location.state.team1 && location.state.opted === opted2)) {
        // console.log(`me chala ${opted1}${opted2} if`);
        return (
          <div style={{ flex: 1 }}>
            {/* {console.log("object")} */}

            <h3><strong>Select batsman from {team}</strong> </h3>
            <br />
            {players.map((element, key) => {
              return (
                <div key={key}>
                  <ul style={{ display: "flex" }}><button style={{ backgroundColor: batsmanNames.onStrike === element || batsmanNames.runner === element ? "white" : "" }} onClick={() => batsman(players[key])}>{element}{batsmanNames.onStrike === element ? <p style={{ color: "green" }}>Facer</p> : ""}{batsmanNames.runner === element ? <p style={{ color: "green" }}>Runner</p> : ""} </button>{batsmanNames.onStrike === element ? <button onClick={() => setfacerSelected(true)} className='facerButton'>Facer</button> : ""}</ul>
                </div>
              )
            })}
            {/* <button onClick={() => setfacerSelected(true)}>Facer</button> */}
            {/* {console.log("object")} */}
          </div>
        )
      }
      else if ((location.state.tossWon === location.state.team2 && location.state.opted === opted1) || (location.state.tossLost === location.state.team2 && location.state.opted === opted2)) {
        // console.log(`me chalo ${opted1}${opted2} else`);

        return (

          <div style={{ flex: 1 }}>
            <h3> <strong>Select bowler from {team}</strong></h3>
            <br />
            {players.map((element, key) => {
              return (
                <div key={key}>
                  <ul><button style={{ backgroundColor: bowlerName.bowling === element ? "white" : "" }} onClick={() => {
                    setbowlerName({ ['bowling']: players[key] })
                    // console.log(bowlerName)
                  }}>{element} </button><span style={{ color: "#e01507", fontSize: "20px" }} className={bowlerName.bowling === element ? "fas fa-baseball-ball" : ""}></span></ul>

                </div>
              )
            })}
          </div>
        )
      }
    }


    return (
      <div className='selectPlayers'>
        {info3('bat', 'bowl', location.state.players1, location.state.team1)}
        {info3('bowl', 'bat', location.state.players2, location.state.team2)}
      </div>
    )
  }


  const shuffleBatsman = (player) => {
    // console.log("players", players);
    player.map((element, key) => {
      if (element === batsmanNames.onStrike) {
        let temp = player[0]
        player[0] = batsmanNames.onStrike
        player[key] = temp

        let tempimg = batFirst === team1 ? teamAimages[0] : teamBimages[0]
        batFirst === team1 ? teamAimages[0] = teamAimages[key] : teamBimages[0] = teamBimages[key]
        batFirst === team1 ? teamAimages[key] = tempimg : teamBimages[key] = tempimg

        // console.log(element, "===", batsmanNames.onStrike);
      }
      else if (element === batsmanNames.runner) {
        let temp = player[1]
        player[1] = batsmanNames.runner
        player[key] = temp

        let tempimg = batFirst === team1 ? teamAimages[1] : teamBimages[1]
        batFirst === team1 ? teamAimages[1] = teamAimages[key] : teamBimages[1] = teamBimages[key]
        batFirst === team1 ? teamAimages[key] = tempimg : teamBimages[key] = tempimg
      }
      return null
    })
    if (batFirst === team1) {
      console.log(batFirst, "===", team1);
      setplayer1(player)
      console.log("player", player);
    }
    else setplayer2(player)

    players1 = [...player1]
    players2 = [...player2]

    // console.log(players1)
    // console.log("AND");
    // console.log(players2)
  }

  return (
    <FadeIn className='scoring2' transitionDuration={1300}>
      <div className='container login'>
        <h1 style={{ textAlign: "center" }}>{location.state.tossWon} won the toss and choose to {location.state.opted} first</h1>
        {/* {info1()} */}
        {info2()}
        <div className='text-center'>
          <button className='startButton'><Link onClick={() => {
            // console.log("CLICked")
            if (batsmanNames.onStrike === "" || batsmanNames.runner === "" || bowlerName.bowling === "") {
              toast.error("Select batters and bowler")
            }
            else batFirst === team1 ? shuffleBatsman(player1) : shuffleBatsman(player2)

          }} style={{ pointerEvents: batsmanNames.onStrike === "" || batsmanNames.runner === "" || bowlerName.bowling === "" ? "none" : "" }} to={'/score'} state={{ players1, players2, tossWon, opted, tossLost, team1, team2, batsmanNames, bowlerName, batFirst, bowlFirst, teamAimages, teamBimages }}>START</Link></button>
          <Toaster
            position="top-center"
            reverseOrder={true}
          />
        </div>
      </div>
    </FadeIn>
  )
}
