import React, { Component } from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody,CardSubtitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

function RenderCard({item}){
  return(
     <Card>
       <CardImg  alt={item.name} />
       <CardBody>
        <CardTitle>{item.category}</CardTitle>
         {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
       </CardBody>
       <CardText>{item.description}</CardText>
      </Card>
  );
}


class Dashboard extends Component{
    render(){
      const listItems = this.props.products.map((d) =>
      <div className="col-12 col-sm-3 m-1">
      <Card>
        <CardImg src={d.image} alt={d.name} />
          <CardBody>
            <CardTitle>{d.name}</CardTitle>
             <CardSubtitle>{d.designation}</CardSubtitle>
          </CardBody>
        <CardText>{d.description}</CardText>
      </Card>
      </div>
      );
        return(
          <div>
          <Header />
          <div className="col-12">
           <div className="row">
            {listItems }
            </div>
          </div>
          <Footer />
          </div>
        );
    }
}
export default Dashboard;
