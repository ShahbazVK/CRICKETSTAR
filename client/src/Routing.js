import React from 'react'
import { Scoring } from './Scoring'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import App from './App'
import { Scoring2 } from './Scoring2'
import { Scoring3 } from './Scoring3'
import { Scoring4 } from './Scoring4'
import { Scoring5 } from './Scoring5'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { SignOut } from "./SignOut";
import { RecentMatchIndividualInfo } from './RecentMatchIndividualInfo'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/scoring" exact element={<Scoring />} />
        <Route path="/scoring/:team1-vs-:team2" exact element={<Scoring2 />} />
        <Route path="/scoringstarts" exact element={<Scoring3 />} />
        <Route path="/score" exact element={<Scoring4 />} />
        <Route path="/teamwon" exact element={<Scoring5 />} />
        <Route path='/signin' exact element={<SignIn />} />
        <Route path='/signout' exact element={<SignOut />} />
        <Route path='/signup' exact element={<SignUp />} />
        <Route path='/match:id' exact element={<RecentMatchIndividualInfo />} />
      </Routes>
    </BrowserRouter>
  )
}
