import React,{Component} from 'react';
import Dashboard from './DashboardComponent';
import ProductList from './ProductListComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';


class Main extends Component {
  render(){
    const Cat_Product= ({match}) => {
      return(<ProductList name={match.params.name}/>);
    };
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/category' component={() => <Dashboard categories={this.props.categories} />} />
        <Route path='/category/:name' component={Cat_Product} />
      </Switch>
    <Footer />
    </div>
  );
}
}


export default Main;
