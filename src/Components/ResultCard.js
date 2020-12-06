import React,{Component} from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBView } from 'mdbreact';
import "../CSS/ResultCard.css"

export default class ResultCard extends Component
{

    constructor(props)
    {
        super(props)
    }

    componentDidMount()
    {
      this.props.scroll()
    }

    render()
    {
    return(
        <MDBCol md='3'className="ResulCard">
        <MDBCard>
            <MDBCardImage
              className='img-fluid'
              src= "https://www.mckinsey.com/~/media/McKinsey/Our%20People/Sebastian%20Stern/Sebastian_Stern_profile_1536x1152.jpg"
            />

          <MDBCardBody>

            <MDBCardTitle className='font-weight-bold pink-text'>
            {this.props.data.result}
            </MDBCardTitle>

            <MDBCardText>
              {this.props.data.description}
            </MDBCardText>

            <MDBBtn color='unique' 
            onClick={this.props.refreshdata}>
              Try again
              </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
    }
}