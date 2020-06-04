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
      products: []
    };
  }
  componentDidMount()
  {
     Axios.get('http://127.0.0.1:8000/')
     .then(res=>{
       this.setState({
         products:res.data
       });
       console.log(res.data);
       
     })
  }
  render(){
    return (
    <BrowserRouter>
    <div>
     <Main products={this.state.products}/>
    </div>
    </BrowserRouter>
  );
 }
}

export default App;