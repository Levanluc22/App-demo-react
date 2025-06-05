import React from "react";
class UserInfo extends React.Component {
  state = {
    name: "Lê Văn Lực",
    age: 21,
    address: "Quảng Nam",
  };
  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnChangeAddress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    // Ngăn không cho load lại trang
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        Tôi tên là: {this.state.name} và Tôi năm nay {this.state.age}. Tôi đến
        từ {this.state.address}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input type="text" onChange={(event) => this.handleOnChange(event)} />

          <label>Your age: </label>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />

          <label>Your address: </label>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeAddress(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfo;
