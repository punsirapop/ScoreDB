import './Table.css'
import React, {useEffect, useState} from 'react'
import Records from './sample-data.json'

function Table(){

    function DisplayData() {
        return(
            Records.map(
                rec => {
                    return(
                        <tr>
                            <td>{rec.id}</td>
                            <td id={rec.id}>✏️</td>
                            <td id='fn'>{rec.firstname}</td>
                            <td id='ln'>{rec.lastname}</td>
                            <td id='g'>{rec.gender}</td>
                            <td id='s'>{rec.score}</td>
                        </tr>
                    )
                }
            )
        )
    }

    return(
        <table className='ScoreTable'>
            <thead>
                <tr>
                    <th>No.</th>
                    <th></th>
                    <th id='fn'>First Name</th>
                    <th id='ln'>Last Name</th>
                    <th id='g'>Gender</th>
                    <th id='s'>Score</th>
                </tr>
            </thead>
            <tbody>
                {DisplayData()}
            </tbody>
        </table>
    )

}

export default Table