import React from "react";
class DisplayInfo extends React.Component{
render(){
  console.log(this.props)
  return(
    <div>
      <div>Tôi tên là {this.props.name}</div>
      <div>Tôi đã {this.props.age} tuổi</div>
    </div>
  )
}
}
export default DisplayInfo;