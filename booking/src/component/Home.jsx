import React from 'react'
import '../bookStyle.css'

class Home extends React.Component{
    render(){
        return(
            <section className = "section container" >
                <div className = "center" >
                    <div className = "nameHotel">
                       . h o t e l  
                    </div>
                    <div>
                        <form action="" > 
                            <div>
                                <label className="label"> Type Room : </label>
                                <select className="typeRoom">
                                    <option value="Delux">Delux room</option>
                                    <option value="Sweet">Sweet room</option>
                                    <option value="Studio">Studio room</option>
                                    <option value="Common">Common room</option>
                                </select>
                            </div>
                            <div>
                                <label className="label"> Check in : </label>
                                <input className="input" type="date"  name="checkin" value="2020-04-04" min="2020-04-05" max="2021-12-31"/>
                            </div>
                            <div>
                                <label className="label"> Check out : </label>
                                <input className="input" type="date" name="checkout" value="2020-04-05" min="2020-04-05" max="2021-12-31"/>
                            </div>
                            <div>
                                <input className="input" type="submit" value="Find"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className = "result">
                    <div>
                        Result list
                    </div>
                    <div className = "List">
                        
                    </div>
                </div>
            </section>
            
        );
    } 

}

export default Home