import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import Loader from "../../components/Loader";
import { actLoginApi } from "../../Redux/Actions/user.action";
import "./style.scss";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taiKhoan: "",
      matKhau: "",
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    console.log(this.props);

    this.props.fetchLogin(this.state, this.props.history);
  };

  renderNotice = () => {
    const { err } = this.props;
    if (err) {
      return <div className="alert alert-danger">{err.response.data}</div>;
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    if (localStorage.getItem("User")) return <Redirect to="/home" />;
    return (
      <div id="login">
        <div className="login login--customize">
          <div className="login__wrapper">
            <img className="login__logo" src="../images/logos/group@2x.png" />
            <div className="login__message">
              Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
            </div>
            <form className="mt-5" onSubmit={this.handleLogin}>
              {this.renderNotice()}
              <div className="form-group text-left">
                <label>Tài khoản:</label>
                <input
                  type="text"
                  name="taiKhoan"
                  className="form-control"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group text-left">
                <label>Mật khẩu:</label>
                <input
                  type="password"
                  name="matKhau"
                  className="form-control"
                  onChange={this.handleOnChange}
                />
              </div>
              <button className="btn btn-success mt-3" type="submit">
                Đăng nhập
              </button>
            </form>
            <div className="login__close">
              <NavLink className="btn-close" to="/home">
                <i className="fa fa-times"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    err: state.user.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (user, history) => {
      dispatch(actLoginApi(user, history));
    },
  };
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

export default withRouter(ConnectedComponent);
