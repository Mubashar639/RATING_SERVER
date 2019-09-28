import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import "./login.css"
import Header from "../about/aboutHeader/header"

const FormPage = () => {
  return (
      <div>
          <Header />
    <MDBContainer >
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Create Account
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                <MDBInput
                      label="Type your first name"
                      group
                      type="text"
                      validate
                    />                   
                     <MDBInput
                    label="Type your last name"
                    group
                    type="text"
                    validate
                  />
                    <MDBInput
                      label="Type your password"
                      group
                      type="password"
                      validate
                    />
                  <MDBInput
                    label="Type your email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3 login-btn"
                  type="submit"
                >
                  Login
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Already have an Account ?</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default FormPage;