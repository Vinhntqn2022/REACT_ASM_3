import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.scss';
import FormInput from './components/formInput';
import UserDetailInfo from './components/userDetailInfo';
import { useDebounce } from 'use-lodash-debounce'


function App() {
  const [detailInfo, setDetailInfo] = useState(null)
  const [inputData, setInputData] = useState("")
  const [visible, setVisible] = useState(false)
  
  const debouncedValue = useDebounce(inputData, 500)
  
  const getInputData = (e) => {
    setInputData(e.target.value)
  }
  const onGetData = (data) => {
    axios.get(`https://api.github.com/users/${data}`)
    .then(response => {
      setDetailInfo(response.data);
      setVisible(true)
    })
    .catch(err => {
      setVisible(false)
      console.log(err)
    })
  }
  useEffect(() => {
    const reloadedInterval = setInterval(() => {
      onGetData(inputData)
    }, 5000)
    return () => clearInterval(reloadedInterval) 
    }, [debouncedValue]) 

  return (
    <div className="App">
      <div className='container'>
        <div className="row mx-auto">
          <FormInput 
          dataInput = {getInputData}
          input = {inputData}  
          />
          <UserDetailInfo
           usersInfor = {detailInfo}
           userVisible = {visible}  
           />
        </div>
      </div>
    </div>
  );
}

export default App;
