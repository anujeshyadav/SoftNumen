import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  Card,
  CardTitle,
  CustomInput,
} from "reactstrap";
import "../../../assets/scss/pages/users-profile.scss";
import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";
import { EditUserProfile } from "../../../ApiEndPoint/ApiCalling";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      LoginData: {},
      email: "",
      cnfmPassword: "",
      password: "",
      adminimg: "",
      selectedName: "",
      selectedFile: null,
      data: {},
    };
  }

  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    // let { id } = this.props.match.params;
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    console.log(pageparmission?.Userinfo);
    this.setState({ LoginData: pageparmission?.Userinfo });
    this.setState({
      // data: response.data.data,
      name: pageparmission?.Userinfo?.full_name,
      email: pageparmission?.Userinfo?.email,
      mobile: pageparmission?.Userinfo?.mobile,
      // password: pageparmission?.Userinfo?.password,
      // cnfmPassword: pageparmission?.Userinfo?.password,
    });
    // axiosConfig
    //   .get(`/admin/getoneadmin/63875207a1d65ee4d84b3ab2`)
    //   .then((response) => {
    //     //console.log(response.data);
    //     console.log(response);
    //     this.setState({
    //       // data: response.data.data,
    //       name: response.data.data.name,
    //       email: response.data.data.email,
    //       // mobile: response.data.data.mobile,
    //       password: response.data.data.password,
    //       cnfmPassword: response.data.data.cnfmPassword,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    let userData = JSON.parse(localStorage.getItem("userData"));
    debugger;
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("email", this.state.email);
    // data.append("id", userData?._id);
    data.append("Password", this.state.password);
    // data.append("cnfmPassword", this.state.cnfmPassword);
    data.append("dateFormat", this.state.Date_format);
    data.append("dateTimeFormat", this.state.Date_Time_format);
    data.append("locale", this.state.Locale);
    data.append("timeZone", this.state.T_Zone);
    if (this.state.selectedFile !== null) {
      data.append(
        "profileImage",
        this.state.selectedFile,
        this.state.selectedName
      );
    }

    for (var value of data.values()) {
      console.log(value);
    }

    for (var key of data.keys()) {
      console.log(key);
    }
    //  let { id } = this.props.match.params;
    if (this.state.password == this.state.cnfmPassword) {
      EditUserProfile(userData?._id, data)
        .then((response) => {
          console.log(response.data.message);
          swal("Success!", "Submitted SuccessFully", "success");
          window.location.reload("/#/pages/profile");
        })
        .catch((error) => {
          swal("Error!", "Something went Wrong", "error");
          console.log(error.response);
        });
    } else {
      swal("Password Does Not Match");
    }
  };
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Profile"
          breadCrumbParent="Pages"
          breadCrumbActive="Profile"
        />
        <div id="user-profile">
          <Row className="m-0 justify-content-center">
            <Col lg="4" md="4" xl="4" sm="12">
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <div className="profile-img text-center st-1">
                  <img
                    src={this.state.data.adminimg}
                    alt="adminimg"
                    className="img-fluid img-border rounded-circle box-shadow-1"
                    width="150"
                  />
                  <ul className="lst-1">
                    <li className="lst-2">
                      Name:{" "}
                      <span className="lst-3">
                        {this.state.LoginData?.username}
                      </span>
                    </li>
                    <li className="lst-2">
                      Email:{" "}
                      <span className="lst-3">
                        {this.state.LoginData?.email}
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col
              sm="12"
              xl="8"
              lg="8"
              md="8"
              className="d-flex justify-content-center"
            >
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <Form className="m-1" onSubmit={this.submitHandler}>
                  <div className="st-2">
                    <CardTitle>
                      <h4 className="mb-3">Edit Profile</h4>
                      <Col></Col>
                    </CardTitle>

                    <Row className="m-0">
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Name</Label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={this.state.name}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="email"
                          value={this.state.email}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Password</Label>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.changeHandler}
                        />
                      </Col>

                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Confirm Password</Label>
                        <Input
                          type="password"
                          name="cnfmPassword"
                          placeholder="Reset password"
                          value={this.state.cnfmPassword}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>User Image</Label>
                        <Input
                          className="form-control"
                          type="file"
                          name="profileImage"
                          onChange={this.onChangeHandler}
                        />
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Locale</Label>
                        <CustomInput
                          name="Locale"
                          value={this.state.Locale}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="us">English(US)-USA</option>
                          <option value=""></option>
                        </CustomInput>
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Time Zone</Label>
                        <CustomInput
                          name="T_Zone"
                          value={this.state.T_Zone}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="IST">IST</option>
                          <option value="PST">PST</option>
                          <option value="EST">EST</option>
                        </CustomInput>
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Date-Format</Label>
                        <CustomInput
                          name="Date_format"
                          value={this.state.Date_format}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="mm-dd-yy">mm-dd-yy</option>
                          <option value="dd-mm-yy">dd-mm-yy</option>
                        </CustomInput>
                      </Col>
                      <Col sm="12" lg="6" md="6" className="p-1">
                        <Label>Date-Time-Format</Label>
                        <CustomInput
                          name="Date_Time_format"
                          value={this.state.Date_Time_format}
                          onChange={this.changeHandler}
                          required
                          type="select"
                        >
                          <option value="mm-dd-yy HH:mm:ss">
                            mm-dd-yy HH:mm:ss
                          </option>
                          <option value="dd-mm-yy HH:mm:ss">
                            dd-mm-yy HH:mm:ss
                          </option>
                        </CustomInput>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <CheckBoxesVuexy
                          color="primary"
                          className="mb-1 mx-1"
                          icon={<Check className="vx-icon" size={16} />}
                          label=" I accept the terms & conditions."
                          defaultChecked={true}
                        />
                      </Col>
                    </Row>
                    <div className="d-flex justify-content-between">
                      <Button.Ripple color="primary" type="submit">
                        Submit
                      </Button.Ripple>
                    </div>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default UserProfile;
