import React, { Component } from 'react';
import '../bookStyle.css'
// import { render } from 'react-dom'
import Person from 'react-ionicons/lib/MdPerson'
import Arrow from 'react-ionicons/lib/IosArrowDropright'
import Cash from 'react-ionicons/lib/MdCash'


class Home extends React.Component{
    
    // state = {
    //     name:'',
    //   }
    // อีเว้นท์เมื่อคลิก เพื่อใช้ในการอัพ firebase
    //   onChange = (e) => {
    //     this.setState( { [e.target.name]: e.target.value } );
    //   }
    
    //   onSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.addData(this.state.name);
    //     this.setState( { name:''});
            
    render(){
        return(      
            <section className = "section container" >
                <div className = "center" >
                    <div className = "nameHotel">
                       . h o t e l  
                    </div>
                    <div>
                        <form action="" className="form" > 
                            <label className="label"> Type Room : </label>
                            <select className="typeRoom">
                                <option value="Superior">Superior room</option>
                                <option value="Delux">Delux room </option>
                                <option value="Sweet">Seeet room</option>
                                <option value="Suit">Suit room</option>
                                <option value="Family">Family room</option>
                            </select>
                            <label className="label"> Check in : </label>
                            <input type="date"  name="checkin" value="2020-04-04" min="2020-04-05" max="2021-12-31"/>
                            <label className="label"> Check out : </label>
                            <input type="date" name="checkout" value="2020-04-05" min="2020-04-05" max="2021-12-31"/>
                            <input type="submit" value="FIND"/>   
                        </form>
                    </div>
                </div>
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
                    </table>
                </div>
            </section>
            
        );
    } 

}

export default Home