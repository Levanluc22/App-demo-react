import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";
//MyComponent kế thừa Component của React
import React from "react";
class MyComponent extends React.Component{
 
  render(){
    //Truyền biến Array làm quen với big data
    const myInfo = ['ab', 'a','c'];
    return(
    <div>
     <UserInfo/>
     <br></br>
     <DisplayInfo name={"Lê Thị Hồng Vy"} age={22} myInfo={myInfo}/>
     <hr></hr>
     <DisplayInfo name={"Lê Thị Hồng Vân"} age={16} myInfo={myInfo}/>
    </div>
    )
  }
}

export default MyComponent;