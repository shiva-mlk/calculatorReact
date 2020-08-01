import React, { Component } from 'react';
import "react-awesome-button/dist/styles.css"; 



class Calculator extends Component {
    state={
        number:0
    }
    styles_span={
        width: 240,
    }
    stylesZero={
        width: 180,
        borderColor:'#D7D6D5'
    }
    styles={
        width:50 ,
        padding:10,
        borderRadius: 50
    }
    stylesCharacters={
        borderColor:'#D7D6D5',
        width:50 ,
        padding:10,

    }
 
    incrementalClear=()=>{
        this.setState({number:this.state.number=0})
    }
    incrementalClickNumber=(e)=>{
        e.preventDefault();
        if (this.state.number==0)
            {this.setState({number:e.target.value})}
        else{
            this.setState({number:this.state.number+=e.target.value})
        }
    }
    incrementalResult=()=>{
        this.setState({number:eval(this.state.number)})
    }

    incrementalDelete=()=>{
        if  (this.state.number.length>1) {
            const number=this.state.number.slice(0,-1)
            this.setState({number})}
        else  {
                this.setState({number:this.state.number=0})
            }
    }
    
    
    render() { 
        return ( 
            
            <div>
                <span style={this.styles_span} className='btn btn-light m-2 btn-lg'>{this.state.number}</span>
                <br/>
                
                <button style={this.styles} onClick={this.incrementalClear} value='C' className='btn btn-info m-2 btn-lg'>C</button>
                <button style={this.styles} onClick={this.incrementalClickNumber} value='%' className='btn btn-info m-2 btn-lg'>%</button>
                <button style={this.styles} onClick={this.incrementalDelete} value='Del' className='btn btn-info m-2 btn-lg'>Del</button>
                <button style={this.styles} onClick={this.incrementalClickNumber} value='/' className='btn btn-info m-2 btn-lg'>/</button>
                <br/>
                <button style={this.stylesCharacters} className={'btn btn-light m-2 btn-lg'} onClick={this.incrementalClickNumber} value='1' >1</button>
                <button style={this.stylesCharacters} className={'btn btn-light m-2 btn-lg'}  onClick={this.incrementalClickNumber} value='2' >2</button>
                <button style={this.stylesCharacters} className={'btn btn-light m-2 btn-lg'}  onClick={this.incrementalClickNumber} value='3' >3</button>
                <button style={this.styles} onClick={this.incrementalClickNumber} value='*' className='btn btn-info m-2 btn-lg btn-lg'>*</button>
                
                <br/>
                <button style={this.stylesCharacters} className={'btn btn-light m-2 btn-lg'}  onClick={this.incrementalClickNumber} value='4' >4</button>
                <button style={this.stylesCharacters} className={'btn btn-light m-2 btn-lg'}  onClick={this.incrementalClickNumber} value='5' >5</button>
                <button style={this.stylesCharacters} className={'btn btn-light m-2 btn-lg'}  onClick={this.incrementalClickNumber} value='6' >6</button>
                <button style={this.styles} onClick={this.incrementalClickNumber} value='+' className='btn btn-info m-2 btn-lg btn-lg'>+</button>
                <br/>
                <button style={this.stylesCharacters} className={'btn btn-light m-2 btn-lg'}  onClick={this.incrementalClickNumber} value='7' >7</button>
                <button style={this.stylesCharacters} className={'btn btn-light m-2 btn-lg'}  onClick={this.incrementalClickNumber} value='8' >8</button>
                <button style={this.stylesCharacters} className={'btn btn-light m-2 btn-lg'}  onClick={this.incrementalClickNumber} value='9' >9</button>
                <button style={this.styles} onClick={this.incrementalClickNumber} value='-' className='btn btn-info m-2 btn-lg btn-lg '> - </button>
                <br/>
                <button style={this.stylesZero} className={'btn btn-light m-2 btn-lg'}  onClick={this.incrementalClickNumber} value='0' >0</button>
                <button  style={this.styles} onClick={this.incrementalResult} value='equal' className='btn btn-info m-2 btn-lg'>=</button>
            </div>
         );
    }
}
 
export default Calculator;