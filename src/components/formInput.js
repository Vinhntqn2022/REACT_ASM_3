import React from "react";
import "../App.scss"


export default function FormInput (props) {
    
    return (
        <div className="search col-10 mx-auto mb-0 p-0">
            <form className="mt-5 mb-0">
              <div className="input-group d-flex mb-0">
                <label htmlFor='search-item' className='mr-3 mt-1'>Name:</label>
                <input onChange={props.dataInput} type="text" className="form-control" placeholder="search" id="search-item" value={props.input} />
              </div>
            </form>
          </div>
    )
}