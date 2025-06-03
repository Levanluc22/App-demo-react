
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';
class App extends React.Component{
  state = {
    name: 'Lê Văn Lực',
    age: 21,
    address: 'Quảng Nam'
  };
  handleMouseOver(event){
    console.log("Tôi đã xuất hiện");
  }
  handleClick(event){
    console.log("Tôi tên là ",this.state.name);
    this.setState({
      name: "Hồng Vy"
    })
  }
  handleOnChange=(event)=>{
    this.setState({
      name: event.target.value
    })
  }
  handleOnSubmit = (event) =>{
    // Ngăn không cho load lại trang
    event.preventDefault()
    console.log(this.state)
  }
  render(){
    return(
           <div>
          
          Tôi tên là: {this.state.name} và Tôi năm nay {this.state.age}. Tôi đến từ {this.state.address}
           <form onSubmit={(event)=>this.handleOnSubmit(event)}>
    <input type="text" onChange={(event)=>this.handleOnChange(event)}/>
    <button>Submit</button>
  </form>
    </div>
    )
  }
}


export default App;
