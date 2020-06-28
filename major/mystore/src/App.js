import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
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
     Axios.get('http://127.0.0.1:8000/products')
     .then(res=>{
       this.setState({
         products:res.data
       }); 
     })
     console.log(this.state.products);
     
  }
  render(){
    return (
    <BrowserRouter>
    <div>
     <Main categories={this.state.categories} products={this.state.products}/>
    </div>
    </BrowserRouter>
  );
 }
}

export default App;