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
      return(<ProductDetail product={this.props.products.filter((product) => product.id == match.params.productId)[0]}/>);
    };
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/category' component={() => <Dashboard categories={this.props.categories} />} />
        <Route path='/category/:name' component={Cat_Product} />
        <Route path='/category/:productId' component={Product_Det} />
      </Switch>
    <Footer />
    </div>
  );
}
}


export default Main;
