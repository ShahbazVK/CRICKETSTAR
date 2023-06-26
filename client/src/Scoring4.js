//kaam krleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Modal from 'react-awesome-modal';
import { Scoring5 } from './Scoring5';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import FadeIn from 'react-fade-in/lib/FadeIn';


export const Scoring4 = () => {
  var x = document.getElementById('scorecard')
  var y = document.getElementById('commentary')
  var z = document.getElementById('hide')
  // var a = document.getElementById('show')
  let newArr = []
  // let newArr1 = []
  let newArr2 = []
  // let newArr3 = []
  const location = useLocation();
  const { players1, players2, tossWon, opted, team1, team2, batFirst, bowlFirst, teamAimages, teamBimages } = location.state
  const [bowlerName, setbowlerName] = useState(location.state.bowlerName)
  const [batsmanNames, setbatsmanNames] = useState(location.state.batsmanNames)
  // console.log("first",batsmanNames);
  const [score, setscore] = useState(0)
  const [balls, setballs] = useState(0)
  const [overs, setovers] = useState(0)
  const [wickets, setwickets] = useState(0)
  const [currentStriker, setcurrentStriker] = useState(batsmanNames.onStrike)
  const [disable, setdisable] = useState(false)
  const [inningcompleted, setinningcompleted] = useState(false)
  const [player1Batsman, setplayer1Batsman] = useState([])
  const [player1Bowler, setplayer1Bowler] = useState([])
  const [player2Bowler, setPlayer2Bowler] = useState([])
  const [player2Batsman, setplayer2Batsman] = useState([])
  const [visible, setvisible] = useState(false)
  const [visible2, setvisible2] = useState(false)
  const [visible3, setvisible3] = useState(false)
  // const [afterOutSelection, setafterOutSelection] = useState('')
  const [currentBowlerStat, setcurrentBowlerStat] = useState([])
  const [bowlerIndex, setbowlerIndex] = useState(0)
  const [scoreByBall, setscoreByBall] = useState([`${bowlerName.bowling} is ready to ball the 1st over`])
  const [currentBattingTeamPlayers, setcurrentBattingTeamPlayers] = useState([])
  const [currentBowlingTeamPlayers, setcurrentBowlingTeamPlayers] = useState([])
  // const [lastBowler, setlastBowler] = useState(bowlerName.bowling)
  const [target, settarget] = useState()
  const [matchcompleted, setmatchcompleted] = useState(false)
  const [message, setmessage] = useState()
  const [firstInningstats, setfirstInningstats] = useState({})
  const [secondInningstats, setsecondInningstats] = useState({})
  const [comment, setcomment] = useState(false)
  const [visible4, setvisible4] = useState(false)
  const [commenttextarea, setcommenttextarea] = useState("")
  const [howout, sethowout] = useState("")
  const [newBatter, setnewBatter] = useState(null)
  const [newBowler, setnewBowler] = useState(null)
  const [hideall, sethideall] = useState(false)
  const {
    transcript,
    // listening,
    resetTranscript,
    // browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [voiceCommentaryOn, setvoiceCommentaryOn] = useState(false)
  // const [howOut, sethowOut] = useState("")
  // const [closeModal, setcloseModal] = useState(false)
  // console.log(location.state);


  useEffect(() => {
    // console.log(players1, "AND", players2);
    if (!inningcompleted) {
      players1.map((element, key) => {

        newArr.push([element, 0, 0, null, 0, 0])
        // newArr1.push([element,0,0,0])
        return null
      })
      setplayer1Batsman(newArr)
      // setplayer1Bowler(newArr1)

      players2.map((element, key) => {

        newArr2.push([element, 0, 0, null, 0, 0])
        // newArr3.push([element,0,0,0])
        return null
      })
      setplayer2Batsman(newArr2)
    }

    // setcurrentBowlingTeamPlayers(newArr3)




    if (!inningcompleted) {
      setcurrentBowlingTeamPlayers([[bowlerName.bowling, 0, 0, 0]])
      setcurrentBowlerStat([bowlerName.bowling, 0, 0, 0])
      setwickets(0)
    }

    if (inningcompleted && !matchcompleted) {
      // outNotout2(howout)
      setfirstInningstats({ overs: overs, balls: balls, score: score, wickets: wickets })

      setovers(0)
      setballs(0)
      setscore(0)
      setwickets(0)
      setcurrentBowlingTeamPlayers([])
    }

    if (((batFirst === team1 && !inningcompleted) || (batFirst === team2 && inningcompleted) && !matchcompleted)) {
      setcurrentBattingTeamPlayers(newArr)
      // console.log("currentBattingTeamPlayerscurrentBattingTeamPlayers", currentBattingTeamPlayers);
    }
    else if (((batFirst === team2 && !inningcompleted) || (batFirst === team1 && inningcompleted) && !matchcompleted)) {
      // console.log("me chlon to btaaaaaooooooooooooooooooooooo");
      setcurrentBattingTeamPlayers(newArr2)
    }



    if (batFirst === team1 && inningcompleted && !matchcompleted) {
      // alert("inningcompletedinningcompletedinningcompleted1", inningcompleted);
      setplayer1Batsman(currentBattingTeamPlayers)
      setPlayer2Bowler(currentBowlingTeamPlayers)
      setcurrentBattingTeamPlayers(player2Batsman)
      setbatsmanNames({ onStrike: player2Batsman[0][0], runner: player2Batsman[1][0] })
      // console.log("batsmanNames6", batsmanNames);

      setcurrentStriker(player2Batsman[0][0])
      setvisible2(true)
      // console.log("currentStrikercurrentStriker", currentStriker);
      // setbowlerName({})
      // console.log("currentBowlerStatcurrentBowlerStat", currentBowlerStat);
    }
    else if (batFirst === team2 && inningcompleted && !matchcompleted) {
      // alert("inningcompletedinningcompletedinningcompleted1", inningcompleted);
      setplayer2Batsman(currentBattingTeamPlayers)
      setplayer1Bowler(currentBowlingTeamPlayers)
      setcurrentBattingTeamPlayers(player1Batsman)
      setbatsmanNames({ onStrike: player1Batsman[0][0], runner: player1Batsman[1][0] })
      // console.log("batsmanNames6", batsmanNames);

      setcurrentStriker(player1Batsman[0][0])
      setvisible2(true)
      // console.log("currentStrikercurrentStriker", currentStriker);
      // setbowlerName({})
      // console.log("currentBowlerStatcurrentBowlerStat", currentBowlerStat);
    }

    if (bowlFirst === team2 && matchcompleted) {
      // outNotout2(howout)
      setplayer2Batsman(currentBattingTeamPlayers)
      setplayer1Bowler(currentBowlingTeamPlayers)
    }
    else if (bowlFirst === team1 && matchcompleted) {
      // outNotout2(howout)
      // console.log("ME TO CHAL RHA HNnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
      setplayer1Batsman(currentBattingTeamPlayers)
      setPlayer2Bowler(currentBowlingTeamPlayers)
      // console.log(player1Batsman);
      // console.log(currentBowlingTeamPlayers);
    }
    if (matchcompleted) {
      setsecondInningstats({ overs: overs, balls: balls, score: score, wickets: wickets })
      // console.log("secondInningstats", secondInningstats);
      // const posting = () => {
      //   axios.post('http://localhost:8000/api/post', { message, player1Batsman, player2Batsman, player1Bowler, player2Bowler, team1, team2, tossWon, batFirst, target, score, bowlFirst, firstInningstats, secondInningstats })
      //     .then((response) => console.log(response))
      //     .catch((err) => console.log(err))
      // }
      // posting()
    }
  }, [inningcompleted, matchcompleted])


  const outNotout1 = () => {

    currentBattingTeamPlayers.map((element, key) => {
      if (element[0] === batsmanNames.onStrike || element[0] === batsmanNames.runner) {
        element[3] = "Not out"
        // console.log("elemen1t", element)
      }
      return null
    })

  }

  const outNotout2 = (howOut) => {
    sethowout(howOut)
    currentBattingTeamPlayers.map((element, key) => {
      if (element[0] === currentStriker) {
        element[3] = howOut + (howOut !== "Run out" ? currentBowlerStat[0] : "")
      }
      return null
    })
    if (howOut !== "Run out") {
      let newState1 = [...currentBowlingTeamPlayers]
      newState1[bowlerIndex][3] += 1
      setcurrentBowlingTeamPlayers(newState1)
    }

  }



  const bowlerModal = () => {
    if ((!inningcompleted && batFirst === team1) || (inningcompleted && batFirst === team2)) {
      return (
        <div>
          {players2.map((element, key) => {
            return (
              <div className='bowlerModal'>

                <button className='bowlerbutton' style={{ backgroundColor: newBowler === element ? "goldenrod" : element === bowlerName.bowling ? "#abb1ba" : "" }} disabled={element === bowlerName.bowling ? true : false} onClick={() => {
                  // newPlayerSelected(element)
                  setcurrentBowlerStat([element, 0, 0, 0])
                  setscoreByBall((prev) => [`${element} is ready to ball the next over. `, ...prev])
                  setnewBowler(element)
                }

                }><img className='img' src={!inningcompleted && batFirst === team1 ? teamBimages[key] : !inningcompleted && batFirst === team2 ? teamAimages[key] : inningcompleted && batFirst === team1 ? teamAimages[key] : inningcompleted && batFirst === team2 ? teamBimages[key] : ""} alt="" /><br />{element}</button>


                {/* <button onClick={() => {
                setcurrentBowlerStat([element, 0, 0, 0])
                // const newArr = [...scoreByBall]
                // newArr.push()
                setscoreByBall((prev) => [`${element} is ready to ball the next over. `, ...prev])
              }}>{element}</button> */}
              </div>
            )
          })}
        </div>

      )
    }
    else {
      return (


        <div>
          {players1.map((element, key) => {
            return (
              <div className='bowlerModal'>

                <button className='bowlerbutton' style={{ backgroundColor: newBowler === element ? "goldenrod" : element === bowlerName.bowling ? "#abb1ba" : "" }} disabled={element === bowlerName.bowling ? true : false} onClick={() => {
                  // newPlayerSelected(element)
                  setcurrentBowlerStat([element, 0, 0, 0])
                  setscoreByBall((prev) => [`${element} is ready to ball the next over. `, ...prev])
                  setnewBowler(element)

                }

                }><img className='img' src={!inningcompleted && batFirst === team1 ? teamBimages[key] : !inningcompleted && batFirst === team2 ? teamAimages[key] : inningcompleted && batFirst === team1 ? teamAimages[key] : inningcompleted && batFirst === team2 ? teamBimages[key] : ""} alt="" /><br />{element}</button>


                {/* <button onClick={() => {
                setcurrentBowlerStat([element, 0, 0, 0])
                // const newArr = [...scoreByBall]
                // newArr.push()
                setscoreByBall((prev) => [`${element} is ready to ball the next over. `, ...prev])
              }}>{element}</button> */}
              </div>
            )
          })}
        </div>









        // players1.map((element, key) => {
        //   return (
        //     <div>
        //       <button onClick={() => setcurrentBowlerStat([element, 0, 0, 0])}>{element}</button>
        //     </div>
        //   )
        // })
      )
    }
  }


  const closeModal = () => {
    // console.log(currentBowlerStat);


    const nextFunc = (abc) => {
      // console.log("abc", abc);
      if (abc !== -1) {
        // console.log("bowlerIndex heheheh", abc);
      }
      else {
        let newState = [...currentBowlingTeamPlayers]
        newState.push(currentBowlerStat)
        setcurrentBowlingTeamPlayers(newState)
        setbowlerIndex(currentBowlingTeamPlayers.length)
        // console.log("bowlerIndex currentBowlingTeamPlayers.length - 1", abc)
        // console.log("player2Bowlersoiodsoiso", currentBowlingTeamPlayers);
      }
      setbowlerName({ bowling: currentBowlerStat[0] })
      // console.log("bowlerName", bowlerName);
    }


    // if (!inningcompleted && batFirst === team1) {
    let keyVal = -1
    currentBowlingTeamPlayers.map((element, key) => {
      if (element[0] === currentBowlerStat[0]) {
        // newVar = true
        setbowlerIndex(key)// probelem 1000000 percent yahn hai/// value late update horhi he bs
        // console.log(element[0], "===", currentBowlerStat[0]);
        // console.log("bowlerIndex problem here", bowlerIndex); // yahn key console krke dekho
        keyVal = key
      }
      return null
    })
    nextFunc(keyVal)
    // }

  }

  // const closeModal = () => {

  // }



  const scoring = (what, num) => {
    setnewBatter(null)
    setnewBowler(null)


    // console.log("player1Batsman", player1Batsman);
    // console.log("object");
    // setcommenttextarea("")
    if (comment) {
      setvisible4(true)
    }


    const isTheName = (element) => element[0] === currentStriker;
    const indexOfPlayer = currentBattingTeamPlayers.findIndex(isTheName)
    // console.log("index", currentBattingTeamPlayers.findIndex(isTheName));
    // console.log("currentStriker", currentStriker);
    // console.log("batsmanNames1", batsmanNames);

    const checkWin = (num = 0, out) => {
      if (inningcompleted && score + num >= target) {
        // console.log("won by chasing team");
        setdisable(true)
        setmatchcompleted(true)
        z.classList.add('hide')
        setmessage(`${bowlFirst} won the match by ${10 - wickets} wickets`)
        // a.classList.remove('hide')
        // navigate("/teamwon");
      }
      else if ((inningcompleted) && (score + num === target - 1) && ((overs === 4 && balls === 5) || (out + wickets === 10))) {
        // console.log("Tie");
        setdisable(true)
        setmatchcompleted(true)
        z.classList.add('hide')
        setmessage(`Match tied between ${bowlFirst} and ${batFirst}.`)
        // a.classList.remove('hide')
        // navigate("/teamwon");
      }
      else if (inningcompleted && ((overs === 4 && balls === 5) || (out + wickets === 10))) {
        // console.log("Won by first batting team");
        setdisable(true)
        setmatchcompleted(true)
        z.classList.add('hide')
        setmessage(`${batFirst} won the match by ${target - score - 1 - num} runs `)
        // a.classList.remove('hide')

        // navigate("/teamwon");
      }


    }

    if (what === 'run') {
      checkWin(num, 0)


      if (num === 4) {
        const newState = [...currentBattingTeamPlayers]
        newState[indexOfPlayer][4] += 1
      }
      else if (num === 6) {
        const newState = [...currentBattingTeamPlayers]
        newState[indexOfPlayer][5] += 1
      }

      num > 1 ? setscoreByBall((prev) => [`${overs}.${balls + 1}: ${currentBowlerStat[0]} to ${currentStriker}, ${num} runs. `, ...prev]) : setscoreByBall((prev) => [`${overs}.${balls + 1}: ${currentBowlerStat[0]} to ${currentStriker}, ${num} run `, ...prev])
      // console.log(scoreByBall);

      setscore(parseInt(score) + parseInt(num))
      // console.log("currentStriker", currentStriker)
      //WWWWWWWWWOOOOOOOOOORRRRRRRRRRRRKKKKKKKKK here for adding runs in bowler: TRICK: key pehle se palyer2bwolers ki save krlo and direct wahin jakr runs and out brhao
      // let newState = [...currentBowlerStat]
      // newState[2] = 5
      // setcurrentBowlerStat(newState)
      let newState = [...currentBowlingTeamPlayers]
      newState[bowlerIndex][2] += num
      setcurrentBowlingTeamPlayers(newState)


      // if (!inningcompleted && batFirst === team1) {
      // console.log(currentBattingTeamPlayers);



      // const newState=[...currentStriker]
      // newState[1]+=num
      // setcurrentStriker(newState)
      newState = [...currentBattingTeamPlayers]
      newState[indexOfPlayer][1] += num
      newState[indexOfPlayer][2] += 1
      setcurrentBattingTeamPlayers(newState)


      // console.log("muje dekho", currentStriker);
      // setcurrentBattingTeamPlayers((prev)=>[...prev,currentBattingTeamPlayers[indexOfPlayer]=currentStriker])
      // console.log(currentBattingTeamPlayers);
      // }

      if (num % 2 === 1 && balls <= 4) {
        if (currentStriker === batsmanNames.runner) {
          // console.log("batsmanNames.onStrike", batsmanNames.onStrike);
          // console.log("batsmanNames2", batsmanNames);

          setcurrentStriker(batsmanNames.onStrike)
        }
        else {
          // console.log("batsmanNames3", batsmanNames);

          setcurrentStriker(batsmanNames.runner)
          // console.log("acha2");
        }
      }
    }
    else if (what === 'out') {
      // console.log("newBatter", newBatter)
      setnewBatter(null)

      setvisible3(true)


      setscoreByBall((prev) => [`${overs}.${balls + 1}: ${currentBowlerStat[0]} to ${currentStriker}, out`, ...prev])
      setwickets(wickets + 1)





      const newState = [...currentBattingTeamPlayers]
      newState[indexOfPlayer][2] += 1
      setcurrentBattingTeamPlayers(newState)


      // outNotout2()
      if (wickets + 1 !== 10) {
        setvisible(true)
        // alert("HI")

      }
      // all Out
      // console.log("Chalo mere bhai1");
      if (wickets + 1 === 10 && !inningcompleted) {
        setinningcompleted(true)
        sethideall(true)
        setscoreByBall((prev) => [`1st inning between ${team1} && ${team2} is wrapped up.`, ...prev])
        // console.log("score + 1", score + 1);
        settarget(score + 1)
        // console.log("target", target);
        // // console.log("target", target);
        // if (batFirst === team1 && !inningcompleted) {
        //   // alert("inningcompletedinningcompletedinningcompleted1", inningcompleted);
        //   setplayer1Batsman(currentBattingTeamPlayers)
        //   setplayer1Bowler(currentBowlingTeamPlayers)
        //   setcurrentBattingTeamPlayers(player2Batsman)
        //   setcurrentBowlingTeamPlayers([])
        //   setbatsmanNames({ onStrike: player2Batsman[0][0], runner: player2Batsman[1][0] })
        //   // console.log("batsmanNames6", batsmanNames);

        //   setcurrentStriker(batsmanNames.onStrike)
        //   // setbowlerName({})
        //   // console.log("currentBowlerStatcurrentBowlerStat", currentBowlerStat);
        // }
        // else {
        //   // alert("inningcompletedinningcompletedinningcompleted2", inningcompleted);
        //   setplayer2Batsman(currentBattingTeamPlayers)
        //   setPlayer2Bowler(currentBowlingTeamPlayers)
        //   setcurrentBattingTeamPlayers(player1Batsman)
        //   setcurrentBowlingTeamPlayers([])

        // }
      }

      visible3 ? checkWin(0, 0) : checkWin(0, 1)
      // console.log("currentBattingTeamPlayers", currentBattingTeamPlayers);

    }
    else if (what === 'wide') {
      checkWin(num, 0)
      setscoreByBall((prev) => [`${overs}.${balls + 1}: ${currentBowlerStat[0]} to ${currentStriker}, wide. `, ...prev])
      let newState = [...currentBowlingTeamPlayers]
      newState[bowlerIndex][2] += num
      setcurrentBowlingTeamPlayers(newState)
      setscore(score + 1)
    }
    else if (what === 'noBall') {
      checkWin(num, 0)

      setscoreByBall((prev) => [`${overs}.${balls + 1}: ${currentBowlerStat[0]} to ${currentStriker}, No ball. `, ...prev])

      setscore(score + 1)
      let newState = [...currentBowlingTeamPlayers]
      newState[bowlerIndex][2] += num
      setcurrentBowlingTeamPlayers(newState)
    }
    else if (what === 'legBye') {
      checkWin(num, 0)
      setscoreByBall((prev) => [`${overs}.${balls + 1}: ${currentBowlerStat[0]} to ${currentStriker}, Leg bye. `, ...prev])

      setscore(score + 1)
      let newState = [...currentBowlingTeamPlayers]
      newState[bowlerIndex][2] += num
      setcurrentBowlingTeamPlayers(newState)
    }
    if (what !== 'noBall' && what !== 'wide') {
      if (balls < 5) {
        setballs(balls + 1)

        let newState1 = [...currentBowlingTeamPlayers]
        newState1[bowlerIndex][1] = Math.round((newState1[bowlerIndex][1] + 0.1) * 10) / 10
        setcurrentBowlingTeamPlayers(newState1)

      }
      else {
        setbowlerIndex(-1)
        setballs(6)
        setdisable(true)
        if ((overs === 4 && balls === 5) || (what === "out" && wickets + 1 === 10)) {

          setTimeout(() => {
            setdisable(false)
          }, 1000);
        }
        else {
          setTimeout(() => {
            setballs(0)
            setovers(overs + 1)
            setdisable(false)
          }, 1000);
        }


        if (currentStriker === batsmanNames.runner && num % 2 === 0) {
          // console.log("batsmanNames4", batsmanNames);

          setcurrentStriker(batsmanNames.onStrike)
          // console.log("acha3");
        }
        else if (currentStriker === batsmanNames.onStrike && num % 2 === 0) {
          // console.log("batsmanNames5", batsmanNames);

          // console.log("acha4");
          setcurrentStriker(batsmanNames.runner)
        }


        let newState1 = [...currentBowlingTeamPlayers]
        newState1[bowlerIndex][1] = Math.ceil(newState1[bowlerIndex][1])
        setcurrentBowlingTeamPlayers(newState1)

        // console.log("ballsballs", balls);


        //all Overs
        if (overs === 4 && balls === 5 && !inningcompleted) {
          setinningcompleted(true)
          sethideall(true)
          setscoreByBall((prev) => [`1st inning between ${team1} & ${team2} is wrapped up. ${bowlFirst} has to chase down the target of ${score + 1 + num} runs.`, ...prev])

          // console.log("score + 1", score + 1);
          settarget(score + num + 1)
          // console.log("target", target);

          // else {
          //   // alert("inningcompletedinningcompletedinningcompleted2", inningcompleted);
          //   setplayer2Batsman(currentBattingTeamPlayers)
          //   setPlayer2Bowler(currentBowlingTeamPlayers)
          //   setcurrentBattingTeamPlayers(player1Batsman)
          //   setcurrentBowlingTeamPlayers([])

          // }
        }
        else setvisible2(true)   ///trouble trouble

      }
      // setcurrentBowlingTeamPlayers()


    }



  }


  const ifCurrentStrikerStar = (abc) => {
    if (abc === currentStriker) {
      return (
        <p style={{ display: "inline" }}>*</p>
      )
    }
  }

  // const colorKaro=(abc)=>{
  //   if (abc===batsmanNames.onStrike || abc===batsmanNames.runner){
  //     // console.log(abc,"===",batsmanNames.onStrike ,"||", batsmanNames.runner);
  //     return <div style={{backgroundColor:"aqua",display:"block"}}>dosio</div>
  //   }
  // }

  const display = () => {

    if (wickets === 0) {
      outNotout1()
    }

    // if (batFirst === team1) {
    return (
      currentBattingTeamPlayers.map((element, key) => {
        return (
          <tr style={element[3] === "Not out" ? { backgroundColor: "green" } : null}>
            <th scope="row">{key + 1}</th>
            <td><div style={{}}>{element[0]}{ifCurrentStrikerStar(element[0])}</div> <sub>{element[3]}</sub> </td>
            <td>{element[1]}</td>
            <td>{element[2]}</td>
          </tr>
        )
      })
    )
    // }
    // else {
    //   return (
    //     player2Batsman.map((element, key) => {

    //       return (
    //         <tr>
    //           <th scope="row">{key + 1}</th>
    //           <td>{element[0]}</td>
    //           <td>{element[1]}</td>
    //           <td>{element[2]}</td>
    //         </tr>
    //       )
    //     }))
    // }
  }

  const displayModal = () => {
    // if (batFirst === team1) {
    // console.log("new batter", newBatter)

    return (


      currentBattingTeamPlayers.map((element, key) => {
        return <button className='batsmanbuttons' disabled={element[3] === null ? false : true} value={element[0]} onClick={() => newPlayerSelected(element)} style={{ display: "block", backgroundColor: newBatter === element[0] ? "goldenrod" : element[3] === null ? "" : "#abb1ba" }}><img width={"180rem"} height={"160rem"} src={!inningcompleted && batFirst === team1 ? teamAimages[key] : !inningcompleted && batFirst === team2 ? teamBimages[key] : inningcompleted && batFirst === team1 ? teamBimages[key] : inningcompleted && batFirst === team2 ? teamAimages[key] : ""} alt="" /><br />{element[0]}</button>
      })



      // teamAimages.map((element) => {
      //   return (
      //     <img width={"180rem"} height={"200rem"} src={element} alt="" />
      //   )
      // })
    )
    // }
    // else {
    //   // console.log(player2Batsman);
    //   return (
    //     player2Batsman.map((element, key) => {

    //       return <button value={element[0]} onClick={() => newPlayerSelected(element)} style={{ display: "block" }}>{element[0]}</button>
    //     }))
    // }

  }

  const newPlayerSelected = (abc) => {
    // setafterOutSelection(abc)
    setnewBatter(abc[0])
    // console.log("afterOutSelection", afterOutSelection);
    // console.log("new player selected function")
    if (currentStriker === batsmanNames.onStrike) { //current striker ko bhi chero and empty bhi krnaa he afterout ko
      // console.log("if");
      setbatsmanNames((prev) => ({ ...prev, ['onStrike']: abc[0] }))

      // setafterOutSelection('')
    }
    else if (currentStriker === batsmanNames.runner) {
      // console.log("else");
      setbatsmanNames((prev) => ({ ...prev, ['runner']: abc[0] }))
      // setafterOutSelection('')
    }
    // console.log("batsmanNames7", batsmanNames);

    setcurrentStriker(abc[0])
    // console.log("batsman names", batsmanNames, "currentStriker", currentStriker);

  }

  const display2 = () => {
    // if (!inningcompleted && batFirst === team1) {
    // console.log("not working", currentBowlingTeamPlayers)
    return (
      currentBowlingTeamPlayers.map((element, key) => {
        // console.log("object", element);
        return (
          <tr style={{ backgroundColor: element[0] === currentBowlerStat[0] ? "#8ea607" : "" }}>
            <th scope="row">{key + 1}</th>
            <td>{element[0]}</td>
            <td>{element[1]}</td>
            <td>{element[2]}</td>
            <td>{element[3]}</td>
          </tr>
        )
      }))
    // }
    // return (null)
  }

  const MatchCompleteFunc = () => {
    console.log("matchcompleted", matchcompleted);
    if (matchcompleted) {
      return (
        <div>
          <Scoring5 message={message} player1Batsman={player1Batsman} player2Batsman={player2Batsman} player1Bowler={player1Bowler} player2Bowler={player2Bowler} tossWon={tossWon} team1={team1} team2={team2} batFirst={batFirst} target={target} score={score} bowlFirst={bowlFirst} firstInningstats={firstInningstats} secondInningstats={secondInningstats} wickets={wickets} overs={overs} balls={balls} currentBowlingTeamPlayers={currentBowlingTeamPlayers} currentBattingTeamPlayers={currentBattingTeamPlayers} scoreByBall={scoreByBall} email={localStorage.getItem("email")} next="save" />
        </div>
      )
    }
  }


  const howOutModal = () => {
    return (
      <div className='dismissals'>
        <button style={{ backgroundColor: howout === "(Caught):" ? "#2b3811" : "" }} onClick={() => outNotout2("(Caught):")}><img width={"300rem"} alt="" height={"270rem"} src="https://i.gifer.com/Pyxi.gif" /><br />Caught</button>
        <button style={{ backgroundColor: howout === "(Bowled) " ? "#2b3811" : "" }} onClick={() => outNotout2("(Bowled) ")}><img width={"300rem"} alt="" height={"270rem"} src='https://thumbs.gfycat.com/JubilantNervousAquaticleech.webp' /><br />Bowled</button>
        <button style={{ backgroundColor: howout === "(Run out)" ? "#2b3811" : "" }} onClick={() => outNotout2("(Run out)")}><img width={"300rem"} alt="" height={"270rem"} src='https://i.gifer.com/Caav.gif' /><br />Run out</button>
        <button style={{ backgroundColor: howout === "(LBW) " ? "#2b3811" : "" }} onClick={() => outNotout2("(LBW) ")}><img width={"300rem"} alt="" height={"270rem"} src='https://cdn.analyticsvidhya.com/wp-content/uploads/2020/03/cricket_ball_tracking.gif' /><br />LBW</button>
        <button style={{ backgroundColor: howout === "(Hit wicket)" ? "#2b3811" : "" }} onClick={() => outNotout2("(Hit wicket)")}><img width={"300rem"} alt="" height={"270rem"} src='http://1.bp.blogspot.com/-EZVUAGQT-gE/U55J3fn8dMI/AAAAAAAAEbo/sniMM07x-2I/s1600/NuwanX2.gif' /><br />Hit wicket</button>
        <button style={{ backgroundColor: howout === "(Stump) " ? "#2b3811" : "" }} onClick={() => outNotout2("(Stump) ")}><img width={"300rem"} alt="" height={"270rem"} src='https://thumbs.gfycat.com/DiscreteWindyCurassow.webp' /><br />Stump</button>
      </div>
    )
  }
  // const closeHowOutModal = () => {
  //   outNotout2(howOut)
  //   return
  // }

  return (
    <FadeIn transitionDuration={1300}>
      <div style={{ display: hideall ? 'none' : "block" }} className='login'>
        <div id='hide'>

          <div>
            <h3>{!inningcompleted ? batFirst : bowlFirst} {score}/{wickets}</h3>
            <h4>{overs}.{balls} Overs</h4>
            {target > 0 ? <h4>Target: {target} </h4> : null}
          </div>
          <div className="topnav">
            <button onClick={() => {
              x.style.display = 'block'
              y.style.display = 'none'
            }} className="btn btn-success">Scorecard</button>
            <button onClick={() => {
              x.style.display = 'none'
              y.style.display = 'block'
            }} className="btn btn-danger">Commentary</button>
            <button onClick={(event) => {
              if (comment) setcomment(false)
              else setcomment(true)
              console.log(comment)
              event.target.blur()

            }} style={{ float: "right" }} className="btn btn-danger">Comments:{comment ? "On" : "Off"}</button>
            {/* <Link href="#contact">Contact</Link>
          <Link href="#about">About</Link> */}
          </div>
          <div className='scoringButtons'>
            <button type='button' disabled={disable} onClick={() => scoring('run', 0)} style={{ marginRight: '9px' }} className='btn btn-primary'>0</button>
            <button disabled={disable} onClick={() => scoring('run', 1)} style={{ marginRight: '9px' }} className='btn btn-primary'>1</button>
            <button disabled={disable} onClick={() => scoring('run', 2)} style={{ marginRight: '9px' }} className='btn btn-primary'>2</button>
            <button disabled={disable} onClick={() => scoring('run', 3)} style={{ marginRight: '9px' }} className='btn btn-primary'>3</button>
            <button disabled={disable} onClick={() => scoring('run', 4)} style={{ marginRight: '9px' }} className='btn btn-primary'>4</button>
            <button disabled={disable} onClick={() => scoring('run', 6)} style={{ marginRight: '9px' }} className='btn btn-primary'>6</button>
            <button disabled={disable} onClick={() => scoring('wide', 1)} style={{ marginRight: '9px' }} className='btn btn-primary'>Wide</button>
            <button disabled={disable} onClick={() => scoring('noBall', 1)} style={{ marginRight: '9px' }} className='btn btn-primary'>NO ball</button>
            <button disabled={disable} onClick={() => scoring('legBye', 1)} style={{ marginRight: '9px' }} className='btn btn-primary'>Leg bye</button>
            <button disabled={disable} onClick={() => scoring('out', 0)} style={{ marginRight: '9px' }} className='btn btn-primary'>Out</button>













            <Modal visible={visible} width="1100" height="650" effect="fadeInUp" onClickAway={() => setvisible(true)}>
              <div className='batModal' style={{ height: "100%", backgroundColor: "ThreeDShadow" }}>
                <h1 style={{ color: "powderblue" }}>Select Batsman</h1>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
                  {displayModal()}
                </div>
                <button className='startButton' style={{ backgroundColor: newBatter === null ? "gray" : "" }} disabled={newBatter === null ? true : false} onClick={() => {
                  currentBattingTeamPlayers.map((element, key) => {
                    if (element[0] === batsmanNames.onStrike || element[0] === batsmanNames.runner) {
                      element[3] = "Not out"
                      console.log("element", element)
                      newArr = [...currentBattingTeamPlayers]
                      let temp = newArr[wickets + 1]
                      newArr[wickets + 1] = element
                      newArr[key] = temp
                      setcurrentBattingTeamPlayers(newArr)
                    }
                    return null
                  })
                  setvisible(false)

                  // console.log("closing modal", "currentStriker", currentStriker)
                }

                }>Close</button>
              </div>
            </Modal>


            <Modal visible={visible2} width="1100" height="650" effect="fadeInUp" onClickAway={() => setvisible2(true)}>
              <div className='batModal' style={{ height: "100%", backgroundColor: "ThreeDShadow" }}>
                <h1 style={{ color: "powderblue" }}>Select Bowler</h1>
                {bowlerModal()}
                <button className='startButton' style={{ backgroundColor: newBowler === null ? "gray" : "" }} disabled={newBowler === null ? true : false} onClick={() => {
                  setvisible2(false)
                  // console.log("closing modal", "currentBowlerStat", currentBowlerStat)
                  closeModal()
                }

                }>Close</button>
              </div>
            </Modal>



            <Modal visible={visible3} width="1050" height="750" effect="fadeInUp" onClickAway={() => setvisible3(true)}>
              <div className='outmodal'>
                <h1 style={{ color: "white", textAlign: "center" }}>Dismissal</h1>
                {howOutModal()}
                <button className='startButton' disabled={howout === "" ? true : false} style={{ backgroundColor: howout === "" ? "gray" : "", color: "white" }} onClick={() => {
                  setvisible3(false)
                  // closeHowOutModal()
                }

                }>Close</button>
              </div>
            </Modal>

            <Modal visible={visible4} width="500" height="500" effect="fadeInUp" onClickAway={() => setvisible4(true)}>
              <div className='commentModal' style={{ backgroundColor: "ThreeDDarkShadow", height: "100%" }}>
                <div>
                  <div>
                    <h1>Score: {score}/{wickets}</h1>
                    <br />
                    <h1>Overs: {overs}.{balls}</h1>
                  </div>

                  <div>
                    <button onClick={() => {
                      SpeechRecognition.startListening({ continuous: true })
                      console.log("Clicked")
                      setvoiceCommentaryOn(true)
                      return (
                        <div>
                          {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
                          {/* <button onClick={SpeechRecognition.startListening}>Start</button> */}
                          {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
                          {/* <button onClick={resetTranscript}>Reset</button> */}
                          {/* <p>{transcript}</p> */}
                          {console.log("transcript", transcript)}

                        </div>
                      )
                    }} className='fa fa-microphone' style={{ color: voiceCommentaryOn ? "green" : "#bebbac", backgroundColor: "transparent" }}></button>

                    <button onClick={() => {
                      SpeechRecognition.stopListening()
                      setcommenttextarea(transcript)
                      console.log("Clicked")
                      setvoiceCommentaryOn(false)
                      return (
                        <div>
                          {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
                          {/* <button onClick={SpeechRecognition.startListening}>Start</button> */}
                          {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
                          {/* <button onClick={resetTranscript}>Reset</button> */}
                          {/* <p>{transcript}</p> */}
                          {/* {console.log("transcript", transcript)} */}
                          {/* {setcommenttextarea(transcript)} */}
                        </div>
                      )
                    }} className='fa fa-microphone-slash' style={{ color: voiceCommentaryOn ? "#bebbac" : "red", backgroundColor: "transparent" }}></button>

                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                  <textarea className='commenttextarea' onChange={(event) => setcommenttextarea(event.target.value)} value={commenttextarea} name="" id="" cols="30" rows="10" placeholder='Comments...'></textarea>
                </div>
                <br />
                <button disabled={voiceCommentaryOn ? true : false} onClick={() => {
                  // console.log(commenttextarea)
                  var firstItem = scoreByBall[0];
                  var newArr = [...scoreByBall]
                  // console.log(firstItem)
                  firstItem += commenttextarea
                  newArr[0] = firstItem
                  setscoreByBall(() => [...newArr])
                  console.log(scoreByBall)
                  setvisible4(false)
                  setcommenttextarea("")
                  resetTranscript()

                  // console.log("closing modal", "currentStriker", currentStriker)
                }

                }>Post</button>
              </div>
            </Modal>
          </div>


          <div id='scorecard'>
            <div className='battingandbowlingtable'>
              <div style={{ flex: 1 }}>
                <h3>{inningcompleted ? bowlFirst : batFirst}</h3>

                <div>
                  <table style={{ color: "white", fontSize: "large" }} className="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Batsman</th>
                        <th scope="col">Runs</th>
                        <th scope="col">Balls</th>
                      </tr>
                    </thead>
                    <tbody>

                      {display()}

                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ minWidth: "100px" }}></div>
              <div style={{ flex: 1 }}>
                <h3>{inningcompleted ? batFirst : bowlFirst}</h3>
                <div>
                  <table style={{ color: "white", fontSize: "large" }} className="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Bowler</th>
                        <th scope="col">Overs</th>
                        <th scope="col">Runs</th>
                        <th scope="col">Wickets</th>
                      </tr>
                    </thead>
                    <tbody>
                      {display2()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* {console.log("currentBattingTeamPlayers", currentBattingTeamPlayers)} */}

            {/* {console.log("currentBowlingTeamPlayers ko izzat do", currentBowlingTeamPlayers)}
        {console.log("setcurrentBowlerStat", currentBowlerStat)}
        {console.log("bowlerIndex last", bowlerIndex)} */}

          </div>

          <div id='commentary'>
            {/* <h4>{currentBowlerStat[0]} to {batsmanNames.onStrike}, runs</h4> */}
            <h2>{tossWon} has won the toss and choose to {opted}</h2>
            {scoreByBall.map((element) => {
              if (element[2] === "6") {
                return (
                  <div>
                    <br />
                    <h4 style={{ color: "#afe0c5" }}>{element}</h4>
                  </div>
                )
              }
              else if (element[3] !== ":") {
                return (
                  <h4 style={{ color: "yellow" }}>{element}</h4>
                )
              }
              else {
                return <h4 style={{ color: "#afe0c5" }}>{element}</h4>
              }

            })}
          </div>
          {/* {console.log("currentBattingTeamPlayers", currentBattingTeamPlayers)}
      {console.log("currentStriker", currentStriker)}
      {console.log("batsmanNames last", batsmanNames)} */}
        </div>
        {MatchCompleteFunc()}

      </div>
      <div style={{ display: hideall ? "block" : "none" }}>

        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column" }} className='login'>
            <div style={{ display: "none" }}>
              {hideall ? setTimeout(() => {
                sethideall(false)
              }, 6000) : ""
              }
            </div>
            <h1>{batFirst} has made a total of <span style={{ color: "yellowgreen" }}>{target - 1} runs.</span></h1>
            <h1>Now its time for {bowlFirst} to chase down the target in 20 overs.</h1>
            <h2>Moving towards the 2nd inning....</h2>
          </div>

        </div>
      </div>
    </FadeIn>
  )
}
