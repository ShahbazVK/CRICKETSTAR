import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'
const App = () => {
  const [pageLowest, setpageLowest] = useState(0)
  const [pageHighest, setpageHighest] = useState(9)
  const [data, setdata] = useState([])
  const [search, setsearch] = useState('')
  useEffect(() => {
    axios.get('http://localhost:8000/api/find')
      .then((response) => {
        // console.log(response)
        setdata(response.data)
      }
      )
      .catch((err) => console.log(err))
  }, [])

  const main = () => {
    const handleChange = (event) => {
      setsearch(event.target.value)
      if (event.target.value !== "") {
        setpageLowest(0)
        setpageHighest(data.length)
      }
      else {
        setpageLowest(0)
        setpageHighest(9)
      }
    }
    return (
      <FadeIn className='scoring2' transitionDuration={2500}>
        <div style={{ paddingTop: "1rem" }} className='container login padleft'>
          <div>
            <div>
              <h2>Recent matches</h2>
              <input className='searchBox' onChange={handleChange} value={search} style={{ borderRadius: "5px" }} type="search" placeholder='Search by scorer name' name="" id="" />
              <br />
              <hr />
              <div className='scrooll'>
                <table className='tableBorder'>
                  <tr>
                    <th>#</th>
                    <th>Match</th>
                    <th>Result</th>
                    <th>Scorer</th>
                    <th>Scheduled on</th>
                    {/* <thead></thead> */}
                  </tr>
                  {data.map((element, key) => {
                    if (key >= pageLowest && key <= pageHighest) {
                      return (
                        search === element.email.slice(0, search.length) ?
                          <tr style={{ fontSize: "large" }}>
                            <td>{key + 1}</td>
                            <td>{element.batFirst} vs {element.bowlFirst}</td>
                            <td><Link style={{ color: "white" }} to={`/match${element._id}`} state={{ element }}>{element.message}</Link></td>
                            <td>{element.email}</td>
                            <td>{element.updatedAt.slice(0, 10)}</td>
                          </tr> : search === "" ? <tr style={{ fontSize: "large" }}>
                            <td>{key + 1}</td>
                            <td>{element.batFirst} vs {element.bowlFirst}</td>
                            <td><Link style={{ color: "white" }} to={`/match${element._id}`} state={{ element }}>{element.message}</Link></td>
                            <td>{element.email}</td>
                            <td>{element.updatedAt.slice(0, 10)}</td>

                          </tr> : ""
                      )
                    }
                    return null
                  })}
                </table>
              </div>
            </div>
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item">
                  <button disabled={pageLowest <= 0 ? true : false} style={{ color: pageLowest <= 0 ? 'gray' : "" }} onClick={() => {
                    setpageHighest(pageHighest - 9)
                    setpageLowest(pageLowest - 9)
                  }} className="page-link">Previous</button>
                </li>
                <li className="page-item">
                  <button disabled={pageHighest >= data.length ? true : false} style={{ color: pageHighest >= data.length ? 'gray' : "" }} onClick={() => {
                    setpageHighest(pageHighest + 9)
                    setpageLowest(pageLowest + 9)
                  }} className="page-link" href="#">Next</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </FadeIn>
    )
  }

  return (
    data.length > 0 ? main() : <Spinner />
  )
};

export default App;
