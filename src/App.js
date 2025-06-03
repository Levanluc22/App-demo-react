import logo from './logo.svg';
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
  render(){
    return(
           <div>
          <MyComponent></MyComponent>
          Tôi tên là: {this.state.name} và Tôi năm nay {this.state.age}. Tôi đến từ {this.state.address}
    </div>
    )
  }
}


export default App;
