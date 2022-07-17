import React from 'react'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Scoring5 } from './Scoring5';
export const RecentMatchIndividualInfo = () => {
    const info = useParams()
    const location = useLocation()
    const { message, player1Batsman, player2Batsman, player1Bowler, player2Bowler, tossWon, team1, team2, batFirst, target, score, bowlFirst, firstInningstats, secondInningstats, scoreByBall } = location.state.element
    console.log("location.state.element", location.state.element);
    // console.log("value", player2Batsman);
    // console.log(info);
    return (
        <div className='container login recentMatch'>
            <div>
                <Scoring5 message={message} player1Batsman={player1Batsman} player2Batsman={player2Batsman} player1Bowler={player1Bowler} player2Bowler={player2Bowler} tossWon={tossWon} team1={team1} team2={team2} batFirst={batFirst} target={target} score={score} bowlFirst={bowlFirst} firstInningstats={firstInningstats} secondInningstats={secondInningstats} scoreByBall={scoreByBall} next="" />

            </div>
        </div>
    )
}
