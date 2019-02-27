import React, {Component} from 'react';
class Person extends Component{
    render(){
        return(
            <div>
                <p> Name:{this.props.name}</p>
                
                <p> adress:{this.props.adress}</p>
                
                <p> contact:{this.props.contact}</p>
                

            </div>
        )
    }
} 
export default Person;