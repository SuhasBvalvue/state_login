import React, { Component } from 'react';

class Welcome extends Component {
   
  constructor(){
    super()
    this.state={
        usr: 'suhas',
        pword: '1234' 
    }
  }

  inputPassword = event => {
    this.setState({ password: event.target.value });
  };
   
  changeWelcome(){
    this.setState({
      message:'Thank you for suscribe'
    })
  }
  
  render() {


      return(
        <div>      
          <h2>Hi {this.state.message}</h2>
          <label>User name</label>
              <input type="text" name="usr" placeholder="username" /> 
          <label>Password</label>
                <input type="password" name="pword" placeholder="password" />
                <input type="submit" value="Login"/>
          
      </div>

      )

    }
  }


export default Welcome