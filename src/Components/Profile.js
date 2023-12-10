import React from "react";
import '../styles/Profile.css'

const Profile = () => {
    return (
        <div className="upc">
            <div className="gradiant">
                <div className="profile-down">
                    <img src="https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg" alt=""></img>
                    <div className="profile-title">ABOUT ME</div>
                    <div className="profile-description">Your user information is displayed below</div>
                    <div id="Information">
                        <div id="col-2">
                            <div className="Email">EMAIL <input type="text" name="" placeholder="Your email" id="" disabled="true"></input></div>
                            <div className="Phone-Number">NUMBER<input type="text" name="" placeholder="Your number" id="" disabled="true"></input></div>
                            <div className="Address">ADDRESS<input type="text" name="" placeholder="Address" id="" disabled="true"></input></div>

                        </div>
                        <div id="col-1">
                            <div className="Username">USERNAME<input type="text" name="" placeholder="Username" id="" disabled="true"></input></div>
                            <div className="First-Name">FIRST NAME<input type="text" name="" placeholder="Your first name" id="" disabled="true"></input></div>
                            <div className="Last-Name">LAST NAME<input type="text" name="" placeholder="Your last name" id="" disabled="true"></input></div>
                        </div>    
                            
                    </div>
                    <div >
                        <button type="submit">Update</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export { Profile } 