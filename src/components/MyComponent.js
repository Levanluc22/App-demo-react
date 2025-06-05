import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";
import React from "react";
//MyComponent kế thừa Component của React
class MyComponent extends React.Component {
  // Tạo ra cục dữ liệu lớn phải dùng state obj{ biến: [datadata]}
  state = {
    listUsers: [
      { id: 1, namePlayer: "Messi", year: 1982, age: 40, address: "Argentina" },
      {
        id: 2,
        namePlayer: "Ronaldo",
        year: 1980,
        age: 42,
        address: "Bồ Đào Nha",
      },
      { id: 3, namePlayer: "Mpape", year: 2000, age: 25, address: "Pháp" },
      {
        id: 4,
        namePlayer: "Yamal",
        year: 2007,
        age: 17,
        address: "Tây Ban Nha",
      },
    ],
  };
  // state = {
  //   listUser: [
  //     { id: 1, name: "Lê Văn Lực", age: 21 },
  //     { id: 2, name: "Lê Thị Hồng Vy", age: 21 },
  //     { id: 3, name: "Lê Thị Hồng Vân", age: 16 },
  //     { id: 4, name: "Nghĩa", age: 19 },
  //     { id: 5, name: "Nguyễn Văn A", age: 20 },
  //   ],
  // };
  render() {
    //Truyền biến Array làm quen với big data
    // const myInfo = ["ab", "a", "c"];
    return (
      <div>
        <UserInfo />
        <br></br>

        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
