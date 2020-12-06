import React ,{Component} from 'react'
import {  MDBCol, MDBCard, MDBCardImage, MDBCardBody } from 'mdbreact';
import '../CSS/Card.css'

export const QuestionCards=(props) =>
{

        return(
            <>
  <MDBCol lg='2' md='4' className='mb-lg-0 mb-4'>
          
          <MDBCard narrow 
          onClick={()=>!props.check ? props.updateData(props.datas):null} 
          className={props.active || "cardOpacity"}>
            <MDBCardImage
              cascade
              src={props.image || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEWAgIB7e3vCwsLIyMjPz8/V1dV4eHjc3Nzj4+PMzMzt7e1zc3O/v7/////39/fx8fHg4ODJbms7AAABaElEQVR4nO3dSWrDABBFQcm2PMkZ7n/aaJFNiCEmZOBJVSf4b9/Qw9Pzy/V8Pp8W0+Lw7rL/YPd9+y9dDo+YHnH65DpM8/Ge8S/dXfAz5tswHYc1G3cK65bCg8I2hX0K+xT2KexT2LcUXsb/HvGrlsK9wjaFfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9h3yYKdwrbFPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2LeJiyGFcQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2baJw/T9K1v9nRmGcwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8K+pXBS2KawT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insG8ThSeFbQr7FPYp7FPYp7BPYZ/Cvm0UzuOazbfhetut2e31DZx9EnazzT4gAAAAAElFTkSuQmCC"}
              top
              alt='sample photo'
            />
           <MDBCardBody cascade 
           className={props.active}>

          <p className='text-muted'>
        <h5>{props.datas}</h5>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </>
        )
}
