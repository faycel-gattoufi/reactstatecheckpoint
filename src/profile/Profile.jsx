import React, { Component } from 'react';
import "./Profil.css";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="container">
                    
                    <img src={this.props.children}  alt='imageprofile' height='200px' width='200px' />
             
                    <div className="profile" >
                       
                        <h1>{this.props.Person.fullname}</h1> 
                        <h2>{this.props.Person.bio}</h2>
                        <h3>{this.props.Person.profession}</h3>
                    </div>
                    <div className="social">
        <a href="https://www.facebook.com/attofi.faycel/" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/faycel-gattoufi-a47b10115/?_l=en_US" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

        </div>
        
         );
         
    }
}
export default Profile;