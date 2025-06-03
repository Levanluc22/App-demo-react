import UserInfo from "./UserInfo";
//MyComponent kế thừa Component của React
import React from "react";
class MyComponent extends React.Component{
 
  render(){
    return(
    <div>
     <UserInfo/>
    </div>
    )
  }
}

export default MyComponent;