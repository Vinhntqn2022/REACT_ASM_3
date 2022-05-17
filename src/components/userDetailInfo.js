import React, {Component} from "react";

class UserDetailInfo extends Component {
  render() { 
    return (
      <div className="col-10 mx-auto mb-0 p-0 mt-5">
             <h2 className='text-capitalize my-3'>user detail information</h2>
              <div className='user-profile d-flex justify-content-start align-items-start'>
                <img src={this.props.usersInfor?.avatar_url} style={{width: 50, height: 50}} className="img-fluid rounded-circle" alt="" />
                <div className="text-content d-flex flex-column align-items-center">
                     <div className="text-content d-flex justify-content-between">
                       <div>
                         <h4 className='font-weight-normal'>Role: {this.props.usersInfor?.name}</h4>
                         <h4 className='font-weight-normal'>Email: {this.props.usersInfor?.email} </h4>
                       </div>
                       <h4 className='font-weight-normal'>Company: {this.props.usersInfor?.company}</h4>
                     </div>
                     <h4 className='font-weight-normal'>Number of Followrer: {this.props.usersInfor?.followers}</h4>
                 </div>
               </div>          
             </div>
    );
  }
}
 
export default UserDetailInfo;
// export default function UserDetailInfo (props) {
//     return (
//         <div className="col-10 mx-auto mb-0 p-0 mt-5">
//             <h2 className='text-capitalize my-3'>user detail information</h2>
//               <div className='user-profile d-flex justify-content-start align-items-start'>
//                 <img src={props.usersInfor?.avatar_url} style={{width: 50, height: 50}} className="img-fluid rounded-circle" alt="" />
//                 <div className="text-content d-flex flex-column align-items-center">
//                     <div className="text-content d-flex justify-content-between">
//                       <div>
//                         <h4 className='font-weight-normal'>Role: {props.usersInfor?.name}</h4>
//                         <h4 className='font-weight-normal'>Email: {props.usersInfor?.email} </h4>
//                       </div>
//                       <h4 className='font-weight-normal'>Company: {props.usersInfor?.company}</h4>
//                     </div>
//                     <h4 className='font-weight-normal'>Number of Followrer: {props.usersInfor?.followers}</h4>
//                 </div>
//               </div>
//           </div>
//     )
// }