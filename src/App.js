import axios from 'axios';
import React, { useState, useEffect, Component } from 'react';
import './App.css';
import FormInput from './components/formInput';
import UserDetailInfo from './components/userDetailInfo';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      detailInfo: null,
      url: 'https://api.github.com/users/ma'
    }
  }
  handleDetailInfoGet = (inputData) => {
        this.setState({url: `https://api.github.com/users/${inputData}`});
      }
  
  componentDidMount() {
    this.reloadedInterval = setInterval(() => {
            axios.get(this.state.url)
              .then(response => this.setState({detailInfo: response.data}))
              .catch(err => console.log(err))
            }, 5000)
  }
  componentWillUnmount() {
     clearInterval(this.reloadedInterval)
  }
  render() { 
    return (
      <div className="App">
        <div className='container'>
          <div className="row search mx-auto">
            <FormInput handleClick = {this.handleDetailInfoGet}/>
            <UserDetailInfo usersInfor = {this.state.detailInfo}/>
          </div>
        </div>
    </div>
    );
  }
}
 
export default App;
// function App() {
//   const [detailInfo, setDetailInfo] = useState(null)
//   const [url, setUrl] = useState("https://api.github.com/users/ma")

//   const handleDetailInfoGet = (inputData) => {
//     setUrl(`https://api.github.com/users/${inputData}`);
//   }

//   useEffect(() => {
//     const reloadedInterval = setInterval(() => {
//           axios.get(url)
//             .then(response => setDetailInfo(response.data))
//             .catch(err => console.log(err))
//           }, 5000)
//       return () => clearInterval(reloadedInterval)
//     }, [url]) 
//   return (
//     <div className="App">
//       <div className='container'>
//         <div className="row search mx-auto">
//           <FormInput handleClick = {handleDetailInfoGet}/>
//           <UserDetailInfo usersInfor = {detailInfo}/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
