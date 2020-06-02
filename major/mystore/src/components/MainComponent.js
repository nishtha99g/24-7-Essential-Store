import React,{Component} from 'react';
import Dashboard from './DashboardComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';


class Main extends Component {
  render(){
  return (
    <div>
      <Switch>
        <Route path='/home' component={() => <Dashboard products={this.props.products} />} />
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}
}


export default Main;
