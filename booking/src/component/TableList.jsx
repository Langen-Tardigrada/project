import React from 'react'

import Room from './Room';
import Person from 'react-ionicons/lib/MdPerson'
import Arrow from 'react-ionicons/lib/IosArrowDropright'
import Cash from 'react-ionicons/lib/MdCash'

export default function TableList(props) {

  const rooms = props.test;

  return (
       <div className = "result-list">
                    <div className = "result">
                        Result list
                    </div>
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
                            <td className = "iconArrow">
                                <Arrow fontSize="30px" color="#31312E"/>
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
