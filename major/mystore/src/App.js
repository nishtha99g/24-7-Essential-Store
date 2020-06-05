import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import { PRODUCTS } from './shared/product';
import Main from './components/MainComponent';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount()
  {
     Axios.get('http://127.0.0.1:8000/')
     .then(res=>{
       this.setState({
         categories:res.data
       }); 
     })
  }
  render(){
    return (
    <BrowserRouter>
    <div>
     <Main categories={this.state.categories}/>
    </div>
    </BrowserRouter>
  );
 }
}

export default App;