import React, {Component} from 'react';
import './App.css';
import Result from './components/Result'
import Keypad from './components/Keypad'

class App extends Component{
  
  state = {
    result : ''
  }
  
  buttonClickHandler = (button) =>{
    if(button === 'CE'){
      this.backspace()
    }else if(button === '='){
      this.calculate()
    }else if(button === 'C'){
      this.reset()
    }else{
      this.setState({
        result : this.state.result + button
      })
    }

  }

  reset = () =>{
    this.setState({
      result : ''
    })
  }

  calculate = () =>{
    try{
      this.setState({
        result : (eval(this.state.result || '') + '')
      })
    }catch(e){
      this.setState({
        result: 'error'
      })
    }
  }

  backspace = () =>{
    this.setState({
      result : this.state.result.slice(0, -1)
    })
  }
  
  render(){
    return (
      
      <div className="flex-container App">
        <Result result={this.state.result}/>
        <Keypad buttonClick={this.buttonClickHandler}/>            
      </div>
    );
  }
}

export default App;
