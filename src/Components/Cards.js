import React,{Component} from 'react'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";
import {NavLink} from 'react-router-dom'

export const Cards = (props) =>
{

        return(
            <div>
<MDBCard className="my-2 px-1 pb-2">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="2">
          <NavLink to={`/quiz/:${props.id}`}>
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-2" hover waves>
              <img
                className="img-fluid"
                src={props.image}
                alt=""
              />
                <MDBMask overlay="white-slight"/>
            </MDBView>
            </NavLink>
          </MDBCol>
          <MDBCol lg="10">
            <p className="indigo-text">
              <h6 className="font-weight-bold mb-1">
                <MDBIcon icon="edit" className="pr-1" />
                Quiz
              </h6>
            </p>
            <h3 className="font-weight-bold mb-3 p-0">
        <strong>{props.title}</strong>
            </h3>
            <p>
              {props.description}
            </p>
            <p>
               {props.date}
            </p>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
            </div>
        )
}