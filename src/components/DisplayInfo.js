import React from "react";
class DisplayInfo extends React.Component {
  // Khái báo obj state để chứa data của việc bật tắt
  state = {
    isShowHideListUser: true,
  };
  // Hàm handleShowHide() để xử lí khi Click => gọi lại setState để cập nhật trạng thái duyệt nútnút
  handleShowHide = () => {
    this.setState({
      // Mặc định sẽ true nhưng gán ! trỏ this>state>isShowHideListUser để lấy value ngược lạilại
      isShowHideListUser: !this.state.isShowHideListUser,
    });
  };
  render() {
    const { listUsers } = this.props;
    return (
      <div>
        <div>
          {/* Xử lí khi click */}
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {/* Trỏ tới isShowHideListUser để xác định trạng thái hiển thị nút */}
            {this.state.isShowHideListUser === true
              ? "Hide List User: "
              : "Show List User:"}
          </span>
        </div>
        {/* Trỏ tới isShowHideListUser để xét điều kiện ẩn và hiện cho element */}
        {this.state.isShowHideListUser && (
          <div>
            {listUsers.map((user, index) => {
              return (
                <div>
                  <div
                    key={user.id}
                    className={+user.age > 40 ? "red" : "green"}
                  >
                    <div>Tôi tên là {user.namePlayer}</div>
                    <div>Năm sinh của tôi {user.year}</div>
                    <div>Quốc Tịch của tôi là {user.address}</div>
                    <div>Tuổi của tôi là {user.age}</div>
                    <hr></hr>
                  </div>
                </div>
              );
            })}
            ;
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfo;
