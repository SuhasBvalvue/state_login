import React from 'react';

const Greet = (props) =>{
    console.log(props)
    return(
        <div>
            <h1>Greek {props.name}
            </h1>
        </div>
    )
} 
export default Greet