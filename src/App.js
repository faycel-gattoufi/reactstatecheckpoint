import React, { Component } from 'react';
import './App.css';
import Profile from './profile/Profile';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimePicker from 'react-time-picker'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     timer:"",
      Person: 
        { x:false,fullname:"Gattoufi Faycel",bio:"Java Swing & fx Devoloper / Project Manager",profession:"React FullStack JS Student"},
          
        url:"https://scontent.ftun9-1.fna.fbcdn.net/v/t1.0-9/120970642_3301588136556590_6762708137416434191_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=n15w8hWfx_MAX-3VIMx&_nc_ht=scontent.ftun9-1.fna&oh=1443334f437cef010d8e30483ffc77c9&oe=5FEDF0BB"
  }
}
componentDidMount(){
  setInterval(()=>{
    this.setState({timer:new Date().toString().slice(15,25)})
  },1000)
}

  render() { 
    return (  
      <div className="App" style={{display:'inline'}}>
         <div className="showbtn" >
    <h1>{this.state.timer}</h1>
           <Button variant="outline-info" onClick={()=>this.setState({Person:{...this.state.Person,x:!this.state.Person.x}})}>{this.state.Person.x===false?"Click TO show Myself !!":"Welcome"}</Button>
          </div>
          {this.state.Person.x===true?
          <div className="showcase">
            <Profile Person={this.state.Person} >{this.state.url}</Profile> 
          </div>:<h1>I'm Invisible</h1>}
      </div>
);
  }
}
export default App;
