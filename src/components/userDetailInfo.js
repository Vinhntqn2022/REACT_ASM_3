import React from "react";
import '../App.scss'


export default function UserDetailInfo (props) {
    return (
      <div className="container col-10 mx-auto mb-0 p-0 mt-5 result">
        {
        props.userVisible ?
            <div>
              <div className="result__title d-flex justify-content-center">
                <img src={props.usersInfor?.avatar_url} style={{width: 50, height: 50}} className="result__title--image img-fluid rounded-circle mr-4 my-auto" alt="" />
                <h4 className='result__title--name text-capitalize my-3'>user detail information</h4>          
              </div>
              <div className='result__infor user-profile d-flex flex-column justify-content-start align-items-start ml-3'>                    
                <h4 className='result__infor--role font-weight-normal'>Role: {props.usersInfor?.name}</h4>
                <h4 className='result__infor--email font-weight-normal'>Email: {props.usersInfor?.email} </h4>
                <h4 className='result__infor--company font-weight-normal'>Company: {props.usersInfor?.company}</h4>
                <h4 className='result__infor--follower font-weight-normal'>Number of Followrer: {props.usersInfor?.followers}</h4>         
              </div>
              </div>
            : <div className="d-flex justify-content-center">
                <span className="mr-3 text-uppercase my-auto font-weight-bold"><strong><h3>Loading....</h3></strong></span>
                <div className="spinner-border" role="status">
                  <span className="sr-only text-dark">Loading...</span>
                </div>
              </div>
        }          
    </div>
    )
}