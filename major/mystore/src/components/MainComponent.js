import React,{Component} from 'react';
import Dashboard from './DashboardComponent';
import ProductList from './ProductListComponent';
import ProductDetail from './ProductDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';

class Main extends Component {
  render(){
    const Cat_Product= ({match}) => {
      return(<ProductList name={match.params.name}/>);
    };
    const Product_Det= ({match}) => {
      return(<ProductDetail products={this.props.products} proid={match.params.productId}/>);
    };
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/category' component={() => <Dashboard categories={this.props.categories} />} />
        <Route exact path='/category/:name' component={Cat_Product} />
        <Route path='/category/:name/:productId' component={Product_Det} />
      </Switch>
    <Footer />
    </div>
  );
}
}


export default Main;
