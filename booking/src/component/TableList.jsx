import React from 'react'

import Room from './Room';
import Person from 'react-ionicons/lib/MdPerson'
import Arrow from 'react-ionicons/lib/IosArrowDropright'
import Cash from 'react-ionicons/lib/MdCash'
import Checkmarkoutline from 'react-ionicons/lib/IosCheckmarkCircleOutline'
import Checkmark from 'react-ionicons/lib/IosCheckmarkCircle'

export default function TableList(props) {

  const rooms = props.test;

  return (
    <div className = "result-list">
        {/* <div className = "result">
            Result list
        </div> */}
        <table className = "result">
            <th>  
                Result List
            </th>
        </table>
        <table className ="list">
            
            <tr className = "row">
                <td className = "typeroom">
                    SWEET ROOM
                </td>
                <td className ="number">
                    S201
                </td>
                <td className = "iconPerson">
                    <Person fontSize="27px" color="#31312E"/>
                </td >
                <td className = "amount">
                    2
                </td>
                <td className = "iconCash">
                    <Cash fontSize="30px" color="#31312E"/>
                </td>
                <td className = "course">
                    3000
                </td>
                <td className = "iconCheckmark">
                    <Checkmark fontSize="30px" color="green"/>
                </td>
                <td className = "status" >
                    booked
                </td>

                <td className = "iconArrow">
                    <button className="arrow">
                        <Arrow fontSize="30px" color="#31312E" />
                    </button>
                </td>
                </tr>
                <tbody >
                    {
                         rooms.map ( room => (
                            <Room  key={room.id} 
                                    room={room} />
                        ))
                    }
                </tbody>
            </table>
    </div>
                
    
  )
}
