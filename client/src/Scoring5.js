import React, { useEffect, useState } from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import axios from 'axios'
import FadeIn from 'react-fade-in'

export const Scoring5 = (props) => {
    const styles = {
        bounce: {
            animation: '1 4s',
            animationName: Radium.keyframes(fadeIn, 'bounce')
        }
    }
    //pass currentbattingteamplayers and use that
    let { message, player1Batsman, player2Batsman, player1Bowler, player2Bowler, team1, team2, tossWon, batFirst, target, score, bowlFirst, firstInningstats, wickets, overs, balls, next, secondInningstats, currentBowlingTeamPlayers, currentBattingTeamPlayers, email, scoreByBall } = props
    secondInningstats = next === "save" ? { overs: overs, balls: balls, score: score, wickets: wickets } : props.secondInningstats

    batFirst === team1 ? player1Bowler = next === "save" ? currentBowlingTeamPlayers : props.player1Bowler : player2Bowler = next === "save" ? currentBowlingTeamPlayers : props.player2Bowler
    batFirst === team1 ? player2Batsman = next === "save" ? currentBattingTeamPlayers : props.player2Batsman : player1Batsman = next === "save" ? currentBattingTeamPlayers : props.player1Batsman
    console.log("currentBattingTeamPlayers", currentBattingTeamPlayers)
    console.log("currentBowlingTeamPlayers", currentBowlingTeamPlayers)
    console.log("player2Batsman", player2Batsman);
    console.log("player1bowler", player1Bowler);
    let thisComment = 0
    const [inning1comments, setinning1comments] = useState(false)
    const [inning2comments, setinning2comments] = useState(false)

    // console.log(score, wickets, overs, balls)
    // const [slideDown, setslideDown] = useState(false)
    // $(document).ready(function () {
    //     $("button").click(function () {
    //         $("p").animate({ height: "300px" });
    //     });
    // });
    console.log("secondInningstats", secondInningstats);
    useEffect(() => {
        const posting = () => {
            //yahn pr second Inningstats ko dubara assign kro props se overs score wagera lekrrr
            axios.post('http://localhost:8000/api/post', { message, player1Batsman, player2Batsman, player1Bowler, player2Bowler, team1, team2, tossWon, batFirst, target, score, bowlFirst, secondInningstats, firstInningstats, email, scoreByBall })
                .then((response) => console.log(response))
                .catch((err) => console.log(err))
        }
        if (next === "save") posting()
    }, [])


    // $(document).ready(function () {
    //     if (abc) {
    //         $("#flip").click(function () {
    //             $("#panel").show();
    //         });
    //     }
    //     else {
    //         $("#flip").click(function () {
    //             $("#panel").hide();
    //         });
    //     }
    // });

    const showScorecard = () => {



        const separateInningScore = (batFirst, bowlFirst, batsmanFirstInning, bowlerFirstInning, batsmanSecondInning, bowlerSecondInning) => {
            for (let i = 1; i < scoreByBall.length; i++) {
                if (scoreByBall[i].slice(0, 10) === "1st inning") {
                    console.log(scoreByBall[i])
                    thisComment = i
                    break
                }
            }
            return (
                <div className='separateInning'>
                    {/* <h4>1st Inning</h4> */}
                    <div>
                        <button id='separateInningButton1' className='separateInningShowButton separateInningColorButton' onClick={() => {
                            document.getElementById("inning2show").style.display = "none";
                            document.getElementById("inning1show").style.display = "block";
                            document.getElementById('separateInningButton1').classList.add('separateInningColorButton')
                            document.getElementById('separateInningButton2').classList.remove('separateInningColorButton')

                        }}>{batFirst} {firstInningstats.score}/{firstInningstats.wickets}<br /> {firstInningstats.overs}.{firstInningstats.balls} Overs</button>
                        <button id='separateInningButton2' className='separateInningShowButton' onClick={() => {
                            document.getElementById("inning2show").style.display = "block";
                            document.getElementById("inning1show").style.display = "none";
                            document.getElementById('separateInningButton2').classList.add('separateInningColorButton')
                            document.getElementById('separateInningButton1').classList.remove('separateInningColorButton')
                        }}>{bowlFirst} {secondInningstats.score}/{secondInningstats.wickets}<br /> {secondInningstats.overs}.{secondInningstats.balls} Overs</button>
                        {/* <div id="flip">Click to slide the panel down or up</div> */}
                        <div id="inning1show">
                            <h1>{batFirst}</h1>
                            <h4>1st inning <button onClick={() => {
                                // console.log("CLICKED")
                                document.getElementById("inning1").classList.toggle("d-none")
                                document.getElementById("inning1comments").classList.toggle("hide")
                                inning1comments ? setinning1comments(false) : setinning1comments(true)
                            }} className='btn scorecardorcommentary'>{inning1comments ? <span>Scorecard</span> : <span>Commentary</span>}</button> </h4>
                            <div id='inning1'>
                                <table className="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Batsman</th>
                                            <th scope="col">Runs</th>
                                            <th scope="col">Balls</th>
                                            <th scope="col">4s</th>
                                            <th scope="col">6s</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            batsmanFirstInning.map((element, key) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{key + 1}</th>
                                                        <td>{element[0]} <br /><h6 style={{ color: "yellowgreen" }}>{element[3]}</h6></td>
                                                        <td>{element[1]}</td>
                                                        <td>{element[2]}</td>
                                                        <td style={{ color: "yellowgreen" }}>{element[4]}</td>
                                                        <td style={{ color: "yellowgreen" }}>{element[5]}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <h1>{bowlFirst}</h1>
                                <table class="table table-sm">
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
                                        {
                                            bowlerFirstInning.map((element, key) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{key + 1}</th>
                                                        <td>{element[0]}</td>
                                                        <td>{element[1]}</td>
                                                        <td>{element[2]}</td>
                                                        <td>{element[3]}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                            <div id='inning1comments' className='hide'>
                                <hr />
                                {scoreByBall.map((element, key) => {
                                    if (element[2] === "6" && key >= thisComment) {
                                        return (
                                            <div>
                                                <br />
                                                <h4 style={{ color: "#afe0c5" }}>{element}</h4>
                                            </div>
                                        )
                                    }
                                    else if (key >= thisComment && element[3] !== ":") {
                                        return (
                                            <h4 style={{ color: "yellow" }}>{element}</h4>
                                        )
                                    }
                                    else if (key >= thisComment) {
                                        return <h4 style={{ color: "#afe0c5" }}>{element}</h4>
                                    }


                                })}
                            </div>
                        </div>

                        <div className='hide' id="inning2show">
                            <h1>{bowlFirst}</h1>
                            <h4>2nd inning <button onClick={() => {
                                // console.log("CLICKED")
                                document.getElementById("inning2").classList.toggle("d-none")
                                document.getElementById("inning2comments").classList.toggle("hide")
                                inning2comments ? setinning2comments(false) : setinning2comments(true)
                            }} className='btn scorecardorcommentary'>{inning2comments ? <span>Scorecard</span> : <span>Commentary</span>}</button> </h4>
                            <div id='inning2'>
                                <table class="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Batsman</th>
                                            <th scope="col">Runs</th>
                                            <th scope="col">Balls</th>
                                            <th scope="col">4s</th>
                                            <th scope="col">6s</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            batsmanSecondInning.map((element, key) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{key + 1}</th>
                                                        <td>{element[0]} <br /><h6 style={{ color: "yellowgreen" }}>{element[3]}</h6></td>
                                                        <td>{element[1]}</td>
                                                        <td>{element[2]}</td>
                                                        <td style={{ color: "yellowgreen" }}>{element[4]}</td>
                                                        <td style={{ color: "yellowgreen" }}>{element[5]}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <h1>{batFirst}</h1>
                                <table class="table table-sm">
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
                                        {
                                            bowlerSecondInning.map((element, key) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{key + 1}</th>
                                                        <td>{element[0]}</td>
                                                        <td>{element[1]}</td>
                                                        <td>{element[2]}</td>
                                                        <td>{element[3]}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div id='inning2comments' className='hide'>
                                <hr />
                                {scoreByBall.map((element, key) => {
                                    if (element[2] === "6" && key < thisComment) {
                                        return (
                                            <div>
                                                <br />
                                                <h4 style={{ color: "#afe0c5" }}>{element}</h4>
                                            </div>
                                        )
                                    }
                                    else if (key < thisComment && element[3] !== ":") {
                                        return (
                                            <h4 style={{ color: "yellow" }}>{element}</h4>
                                        )
                                    }
                                    else if (key < thisComment) {
                                        return <h4 style={{ color: "#afe0c5" }}>{element}</h4>
                                    }

                                })}
                            </div>
                        </div>
                    </div>

                </div>
            )
        }




        if (batFirst === team1) {
            return (
                <div>
                    <div>
                        {separateInningScore(team1, team2, player1Batsman, player2Bowler, player2Batsman, player1Bowler)}

                    </div>

                </div>
            )
        }
        else if (batFirst === team2) {
            return (
                <div>
                    {separateInningScore(team2, team1, player2Batsman, player1Bowler, player1Batsman, player2Bowler)}
                </div>
            )

        }
    }
    return (
        <FadeIn transitionDuration={1300}>
            <div>
                <div>
                    <div>
                        <div className='bounceDiv'>
                            <h1 style={styles.bounce}>{message}</h1>
                        </div>
                        <div className='container'>
                            {showScorecard()}
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}