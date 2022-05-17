import React, {useState, Component} from "react";

class FormInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataInput: ""
        }
    }
    getInputData = (e) => {
        this.setState({dataInput: e.target.value})
    }
    render() { 
        return (
            <div className="col-10 mx-auto mb-0 p-0">
              <form className="mt-5 mb-0">
                <div className="input-group d-flex mb-0">
                  <label htmlFor='search-item' className='mr-3 mt-1'>Name:</label>
                  <input onChange={this.getInputData} type="text" className="form-control" placeholder="search" id="search-item" value={this.state.dataInput} />
                  <button onClick={() => this.props.handleClick(this.state.dataInput)} type="button" class="btn btn-primary" id="search-button">
                       <i class="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </div> 
        );
    }
}
 
export default FormInput;
// export default function FormInput (props) {
//     const [dataInput, setDataInput] = useState("")

//     const getInputData = (e) => {
//         setDataInput(e.target.value)
//     }
//     return (
//         <div className="col-10 mx-auto mb-0 p-0">
//             <form className="mt-5 mb-0">
//               <div className="input-group d-flex mb-0">
//                 <label htmlFor='search-item' className='mr-3 mt-1'>Name:</label>
//                 <input onChange={getInputData} type="text" className="form-control" placeholder="search" id="search-item" value={dataInput} />
//                 <button onClick={() => props.handleClick(dataInput)} type="button" class="btn btn-primary" id="search-button">
//                      <i class="fas fa-search"></i>
//                 </button>
//               </div>
//             </form>
//           </div>
//     )
// }