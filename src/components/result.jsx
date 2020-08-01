import React, { Component } from 'react';
import Calculator from './buttons'

class Result extends Component {
    
    
    render() { 
        return (  
            <div>
                <span className='btn btn-primary m-2'>{}</span>
                <Calculator/>
            </div>
        );
    }
}
 
export default Result;