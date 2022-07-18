import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import $ from "jquery"
import FadeIn from 'react-fade-in'

export const Scoring2 = () => {
  let newArr = []
  let props = useParams();
  // console.log(props);
  const [players1, setplayers1] = useState(["Muhammad Rizwan", "Babar Azam", "Fakhar Zaman", "Haider Ali", "Iftikhar Ahmad", "Asif Ali", "Shadab Khan", "Muhammad Nawaz", "Muhammad Waseem", "Shaheen Shah", "Haris Rauf"])
  const [players2, setplayers2] = useState(["David Warner", "Aaron Finch", "Steven Smith", "Ben McDermott", "Glenn Maxwell", "Slex Carey", "Ashotn Agar", "Adam Zampa", "Pat Cummins", "Mitchell Starc", "Josh Hazlewood"])
  const [teamAimages, setteamAimages] = useState(["https://www.geo.tv/assets/uploads/updates/2021-02-11/334531_6755189_updates.jpg", "https://www.geo.tv/assets/uploads/updates/2021-02-11/334531_6755189_updates.jpg", "https://www.geo.tv/assets/uploads/updates/2021-02-11/334531_6755189_updates.jpg", "https://www.geo.tv/assets/uploads/updates/2021-02-11/334531_6755189_updates.jpg", "https://www.geo.tv/assets/uploads/updates/2021-02-11/334531_6755189_updates.jpg", "https://www.geo.tv/assets/uploads/updates/2021-02-11/334531_6755189_updates.jpg", "https://www.geo.tv/assets/uploads/updates/2021-02-11/334531_6755189_updates.jpg", "https://www.geo.tv/assets/uploads/updates/2021-02-11/334531_6755189_updates.jpg", "https://www.geo.tv/assets/uploads/updates/2021-02-11/334531_6755189_updates.jpg", "https://www.geo.tv/assets/uploads/updates/2021-02-11/334531_6755189_updates.jpg", "https://www.geo.tv/assets/uploads/updates/2021-02-11/334531_6755189_updates.jpg"])
  const [teamBimages, setteamBimages] = useState(["https://famemandu.com/wp-content/uploads/2021/07/Fakhar-Zaman.jpg", "https://famemandu.com/wp-content/uploads/2021/07/Fakhar-Zaman.jpg", "https://famemandu.com/wp-content/uploads/2021/07/Fakhar-Zaman.jpg", "https://famemandu.com/wp-content/uploads/2021/07/Fakhar-Zaman.jpg", "https://famemandu.com/wp-content/uploads/2021/07/Fakhar-Zaman.jpg", "https://famemandu.com/wp-content/uploads/2021/07/Fakhar-Zaman.jpg", "https://famemandu.com/wp-content/uploads/2021/07/Fakhar-Zaman.jpg", "https://famemandu.com/wp-content/uploads/2021/07/Fakhar-Zaman.jpg", "https://famemandu.com/wp-content/uploads/2021/07/Fakhar-Zaman.jpg", "https://famemandu.com/wp-content/uploads/2021/07/Fakhar-Zaman.jpg", "https://famemandu.com/wp-content/uploads/2021/07/Fakhar-Zaman.jpg"])
  const [tossWon, settossWon] = useState('')
  const [tossLost, settossLost] = useState('')
  const [opted, setopted] = useState('')
  // const [Disabled, setDisabled] = useState(true)
  // const [flipOn, setflipOn] = useState(false)
  let team1 = props.team1
  let team2 = props.team2
  // let clickedTimes = 0



  const handleChange = (event, team, players, num) => {
    // console.log("eventt", event)
    // console.log(event.target.value);
    // console.log(players,team,num);
    if (team === props.team1) {
      newArr = [...players1]
      newArr[num] = event.target.value
      setplayers1(newArr)
    }
    else {
      newArr = [...players2]
      newArr[num] = event.target.value
      setplayers2(newArr)
    }
    // console.log(players);
  }

  const Playing11 = (team, players) => {

    const onImageChange = (event, num, team) => {
      // console.log(team, "=====", team1);
      let newArr = (team === team1) ? [...teamAimages] : [...teamBimages]
      // console.log("hi hi hi");
      // console.log(event.target.files);
      const [file] = event.target.files;
      newArr[num] = URL.createObjectURL(file);
      // console.log("newArr", newArr);
      team === team1 ? setteamAimages(newArr) : setteamBimages(newArr)
      newArr = []
      // newArr[]
    }
    const flipfunc = () => {
      $(document).ready(function () {
        $(".flip").click(function () {
          $(".panel").slideDown("slow");
        });
      });
    }
    return (

      <div>
        {/* <h1>Playing XI of team {team} </h1> */}
        <tr><span><button onClick={flipfunc()} className='fas fa-angle-double-down flip'></button></span><input onChange={(event) => handleChange(event, team, players, 0)} value={players[0]} type="text" name="" id="" placeholder='Player' /><input className='panel' onChange={(event) => onImageChange(event, 0, team)} type="file" /></tr>
        <tr><span><button onClick={flipfunc()} className='fas fa-angle-double-down flip'></button></span><input onChange={(event) => handleChange(event, team, players, 1)} value={players[1]} type="text" name="" id="" placeholder='Player' /><input className='panel' onChange={(event) => onImageChange(event, 1, team)} type="file" /></tr>
        <tr><span><button onClick={flipfunc()} className='fas fa-angle-double-down flip'></button></span><input onChange={(event) => handleChange(event, team, players, 2)} value={players[2]} type="text" name="" id="" placeholder='Player' /><input className='panel' onChange={(event) => onImageChange(event, 2, team)} type="file" /></tr>
        <tr><span><button onClick={flipfunc()} className='fas fa-angle-double-down flip'></button></span><input onChange={(event) => handleChange(event, team, players, 3)} value={players[3]} type="text" name="" id="" placeholder='Player' /><input className='panel' onChange={(event) => onImageChange(event, 3, team)} type="file" /></tr>
        <tr><span><button onClick={flipfunc()} className='fas fa-angle-double-down flip'></button></span><input onChange={(event) => handleChange(event, team, players, 4)} value={players[4]} type="text" name="" id="" placeholder='Player' /><input className='panel' onChange={(event) => onImageChange(event, 4, team)} type="file" /></tr>
        <tr><span><button onClick={flipfunc()} className='fas fa-angle-double-down flip'></button></span><input onChange={(event) => handleChange(event, team, players, 5)} value={players[5]} type="text" name="" id="" placeholder='Player' /><input className='panel' onChange={(event) => onImageChange(event, 5, team)} type="file" /></tr>
        <tr><span><button onClick={flipfunc()} className='fas fa-angle-double-down flip'></button></span><input onChange={(event) => handleChange(event, team, players, 6)} value={players[6]} type="text" name="" id="" placeholder='Player' /><input className='panel' onChange={(event) => onImageChange(event, 6, team)} type="file" /></tr>
        <tr><span><button onClick={flipfunc()} className='fas fa-angle-double-down flip'></button></span><input onChange={(event) => handleChange(event, team, players, 7)} value={players[7]} type="text" name="" id="" placeholder='Player' /><input className='panel' onChange={(event) => onImageChange(event, 7, team)} type="file" /></tr>
        <tr><span><button onClick={flipfunc()} className='fas fa-angle-double-down flip'></button></span><input onChange={(event) => handleChange(event, team, players, 8)} value={players[8]} type="text" name="" id="" placeholder='Player' /><input className='panel' onChange={(event) => onImageChange(event, 8, team)} type="file" /></tr>
        <tr><span><button onClick={flipfunc()} className='fas fa-angle-double-down flip'></button></span><input onChange={(event) => handleChange(event, team, players, 9)} value={players[9]} type="text" name="" id="" placeholder='Player' /><input className='panel' onChange={(event) => onImageChange(event, 9, team)} type="file" /></tr>
        <tr><span><button onClick={flipfunc()} className='fas fa-angle-double-down flip'></button></span><input onChange={(event) => handleChange(event, team, players, 10)} value={players[10]} type="text" name="" id="" placeholder='Player' /><input className='panel' onChange={(event) => onImageChange(event, 10, team)} type="file" /></tr>
      </div>
    )
  }
  return (
    <FadeIn className='scorikng2' transitionDuration={1300}>
      <div className=' containjer login'>


        <table className='tossTable'>
          <thead>
            <th><h3>Playing XI of {props.team1}</h3></th>
            <th><h3>Toss</h3></th>
            <th><h3>Playing XI of {props.team2}</h3></th>
          </thead>
          <tbody>
            <tr>
              <td>{Playing11(props.team1, players1)}</td>
              <td style={{ paddingBottom: "20rem" }}>
                <h3>Toss Won By</h3>
                <button style={{ backgroundColor: tossWon === team1 ? "lightblue" : '' }} onClick={() => {
                  settossWon(props.team1)
                  settossLost(props.team2)
                }}>{props.team1}</button>

                <button style={{ backgroundColor: tossWon === team2 ? "lightblue" : '' }} onClick={() => {
                  settossWon(props.team2)
                  settossLost(props.team1)
                }}>{props.team2}</button>

                <h3>Opted</h3>
                <button style={{ backgroundColor: opted === 'bat' ? "lightblue" : '' }} onClick={() => {
                  setopted('bat')
                }}>BATTING</button>

                <button style={{ backgroundColor: opted === 'bowl' ? "lightblue" : '' }} onClick={() => {
                  setopted('bowl')
                }}>BOWLING</button>
                <br />
                <button className='submitToss'><Link style={{ pointerEvents: tossWon !== "" && opted !== "" ? "" : "none", color: tossWon !== "" && opted !== "" ? "" : "gray" }} to={'/scoringstarts'} state={{ players1, players2, tossWon, opted, tossLost, team1, team2, teamAimages, teamBimages }}>Submit Details</Link></button>
              </td>
              <td>{Playing11(props.team2, players2)}</td>
            </tr>
          </tbody>
        </table>







        <div>
          {/* <h3>Toss Won By</h3>
        <button onClick={() => {
          settossWon(props.team1)
          settossLost(props.team2)
        }}>{props.team1}</button>
        <button onClick={() => {
          settossWon(props.team2)
          settossLost(props.team1)
        }}>{props.team2}</button> */}
        </div>
        <div>
          {/* <h3>Opted</h3>
        <button onClick={() => {
          setopted('bat')
        }}>BATTING</button>
        <button onClick={() => {
          setopted('bowl')
        }}>BOWLING</button> */}
        </div>
        {/* <Link to={'/scoringstarts'} state={{ players1, players2, tossWon, opted, tossLost, team1, team2 }}>Submit Details</Link> */}
      </div>
    </FadeIn>
  )
}
