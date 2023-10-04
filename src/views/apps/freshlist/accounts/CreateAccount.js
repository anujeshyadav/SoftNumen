import React, { useEffect, useState } from "react";
import xmlJs from "xml-js";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
} from "reactstrap";
import { history } from "../../../../history";
import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";

import {
  CreateAccountSave,
  CreateAccountView,
} from "../../../../ApiEndPoint/ApiCalling";
// import { BiLogoGmail } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import "../../../../assets/scss/pages/users.scss";

const CreateAccount = () => {
  const [CreatAccountView, setCreatAccountView] = useState({});
  const [formData, setFormData] = useState({});
  const [dropdownValue, setdropdownValue] = useState({});
  const [index, setindex] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e, type, i) => {
    const { name, value, checked } = e.target;
    setindex(i);
    if (type == "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          [name]: checked,
        });
      } else {
        setFormData({
          ...formData,
          [name]: checked,
        });
      }
    } else {
      if (type == "number") {
        if (/^\d{0,10}$/.test(value)) {
          setFormData({
            ...formData,
            [name]: value,
          });
          setError("");
        } else {
          setError(
            "Please enter a valid number with a maximum length of 10 digits"
          );
        }
      } else {
        if (value.length <= 10) {
          setFormData({
            ...formData,
            [name]: value,
          });
          // console.log(value);
          setError("");
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
          // setError("Input length exceeds the maximum of 10 characters");
        }
      }
    }
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  useEffect(() => {
    CreateAccountView()
      .then(res => {
        const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
        console.log(JSON.parse(jsonData));
        setCreatAccountView(JSON.parse(jsonData));
        setdropdownValue(JSON.parse(jsonData));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const submitHandler = e => {
    e.preventDefault();
    if (error) {
      swal("Error occured while Entering Details");
    } else {
      CreateAccountSave(formData)
        .then(res => {
          if (res.status) {
            setFormData({});
            window.location.reload();
            swal("Acccont Created Successfully");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Create Account</h1>
            </Col>
          </Row>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>
                      {
                        dropdownValue.CreateAccount?.MyDropdown?.dropdown?.label
                          ?._text
                      }
                    </Label>
                    <CustomInput
                      required
                      type="select"
                      name={
                        dropdownValue.CreateAccount?.MyDropdown?.dropdown?.name
                          ?._text
                      }
                      value={
                        formData[
                          dropdownValue.CreateAccount?.MyDropdown?.dropdown
                            ?.name?._text
                        ]
                      }
                      onChange={handleInputChange}
                    >
                      <option value="">--Select Role--</option>
                      {dropdownValue?.CreateAccount?.MyDropdown?.dropdown?.option.map(
                        (option, index) => (
                          <option
                            key={index}
                            value={option?._attributes?.value}
                          >
                            {option?._attributes?.value}
                          </option>
                        )
                      )}
                    </CustomInput>
                  </FormGroup>
                </Col>

                {CreatAccountView &&
                  CreatAccountView?.CreateAccount?.input?.map((ele, i) => {
                    return (
                      <Col key={i} lg="6" md="6" sm="12">
                        <FormGroup>
                          <Label>{ele?.label?._text}</Label>
                          <Input
                            required
                            onKeyDown={e => {
                              if (ele?.type?._attributes?.type == "number") {
                                ["e", "E", "+", "-"].includes(e.key) &&
                                  e.preventDefault();
                              }
                            }}
                            type={ele?.type?._attributes?.type}
                            placeholder={ele?.placeholder?._text}
                            name={ele?.name?._text}
                            value={formData[ele?.name?._text]}
                            onChange={e =>
                              handleInputChange(
                                e,
                                ele?.type?._attributes?.type,
                                i
                              )
                            }
                          />
                          {index === i ? (
                            <>
                              {error && (
                                <span style={{ color: "red" }}>{error}</span>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </FormGroup>
                      </Col>
                    );
                  })}
                {/* <Row>
                  <Col> */}
                <div className="container">
                  {CreatAccountView &&
                    CreatAccountView?.CreateAccount?.CheckBox?.input?.map(
                      (ele, i) => {
                        return (
                          <>
                            <span key={i} className="mx-2">
                              <Input
                                style={{ marginRight: "3px" }}
                                type={ele?.type?._attributes?.type}
                                name={ele?.name?._text}
                                onChange={e => handleInputChange(e, "checkbox")}
                              />{" "}
                              <span
                                className="mt-1 mx-1"
                                style={{ marginRight: "40px" }}
                              >
                                {ele?.label?._text == "Whatsapp" ? (
                                  <BsWhatsapp
                                    className="mx-1"
                                    color="#59CE72"
                                    size={25}
                                  />
                                ) : (
                                  <>
                                    {ele.label?._text == "SMS" ? (
                                      <>
                                        <FcPhoneAndroid size={30} />
                                      </>
                                    ) : (
                                      <>
                                        <BiEnvelope className="" size={30} />
                                      </>
                                    )}
                                  </>
                                )}
                                {/* <BsWhatsapp
                              className="mx-1"
                              color="#59CE72"
                              size={25}
                            /> */}
                              </span>
                            </span>
                            {/* <Col key={i} lg="6" md="6" sm="12">
                            <FormGroup>
                              <Label>{ele?.label?._text}</Label>
                              <Input
                                type={ele?.type?._attributes?.type}
                                placeholder={ele?.placeholder?._text}
                                name={ele?.name?._text}
                                value={formData[ele?.name?._text]}
                                onChange={(e) =>
                                  handleInputChange(
                                    e,
                                    ele?.type?._attributes?.type,
                                    i
                                  )
                                }
                              />
                            </FormGroup>
                          </Col> */}
                          </>
                        );
                      }
                    )}
                </div>
                {/* </Col>
                </Row> */}
              </Row>
              {/* <div className="mx-1 mb-1">
                <Row>
                  <Col lg="3" md="3" sm="3" xs="6">
                    <Input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="whatsapp"
                      onChange={(e) => handleInputChange(e, "checkbox")}
                    />{" "}
                    <span style={{ marginRight: "40px" }}>
                      <BsWhatsapp className="mx-1" color="#59CE72" size={25} />
                    </span>
                    <Input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="SMS"
                      onChange={(e) => handleInputChange(e, "checkbox")}
                    />{" "}
                    <span style={{ marginRight: "40px" }}>
                      <FcPhoneAndroid size={30} />
                    </span>
                    <Input
                      style={{ marginRight: "3px" }}
                      type="checkbox"
                      name="Mail"
                      onChange={(e) => handleInputChange(e, "checkbox")}
                    />{" "}
                    <span style={{ marginRight: "40px" }}>
                      <BiEnvelope className="" size={30} />
                    </span>
                  </Col>
                </Row>
              </div> */}
              <hr />
              <Row className="mt-2 ">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="">
                    <h4>Status</h4>
                  </Label>
                  <div className="form-label-group mx-1">
                    {CreatAccountView &&
                      CreatAccountView?.CreateAccount?.Radiobutton?.input?.map(
                        (ele, i) => {
                          return (
                            <FormGroup key={i}>
                              <Input
                                key={i}
                                style={{ marginRight: "3px" }}
                                required
                                type={ele?.type?._attributes?.type}
                                name={ele?.name?._text}
                                value={`${
                                  ele?.label?._text == "Active"
                                    ? "Active"
                                    : "Deactive"
                                }`}
                                onChange={handleInputChange}
                              />{" "}
                              <span
                                className="mx-1 mt-1"
                                style={{ marginRight: "20px" }}
                              >
                                {ele?.label?._text}
                              </span>
                            </FormGroup>
                          );
                        }
                      )}
                  </div>
                </Col>
              </Row>

              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mt-2 mx-2"
                >
                  Submit
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default CreateAccount;
