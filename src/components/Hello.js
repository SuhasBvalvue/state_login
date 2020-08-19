import React from 'react';

const Hello = () =>{
 return(
    <div>
        <label>User name</label>
    <input type="text" name="usr" placeholder="username" /> 
    <label>Password</label>
    <input type="password" name="pword" placeholder="password" />
    <input type="submit" value="Login"/>
    </div>
 )
}
export default Hello