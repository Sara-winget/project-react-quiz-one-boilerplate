import React from 'react'
import './result.css'
function Result(){
    const arr =["keep it up","Awsome","Not bad","you need more practise"]
    return(
        <div>
              <h1 className='res'>Result</h1>
              <div className='box'>
                <h1>{arr[0]}</h1>
                <h1><strong>Your score is 90%</strong></h1>
                <table>
                    <tr>
                        <th>Total number Of Questions</th>
                        <th>15</th>
                    </tr>
                    <tr>
                        <td>Number Of questions Attempted</td>
                        <td>9</td>
                    </tr>
                    <tr><td>
                        Number of questions Correct
                        </td>
                        <td>3</td>
                        </tr>
                        <tr>
                            <td>Number Of questions Wrong</td>
                            <td>6</td>
                        </tr>
                </table>
              </div>
              <button className='play'>PlayAgain</button>
              <button className='home'>Back to home</button>
        </div>
    )
}
export default Result;