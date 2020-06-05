import React, { Component } from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody,CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom';

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
      const listItems = this.props.categories.map((d) =>
      <div className="col-12 col-sm-3 m-1">
      <Card>
        <Link to={`/category/${d.slug}`}>
          <CardImg src={d.image} alt={d.name} />
            <CardBody>
              <CardTitle>{d.name}</CardTitle>
              <CardSubtitle>{d.designation}</CardSubtitle>
            </CardBody>
          <CardText>{d.description}</CardText>
        </Link>
      </Card>
      </div>
      );
        return(
          <div>
          <div className="col-12">
           <div className="row">
            {listItems }
            </div>
          </div>
          </div>
        );
    }
}
export default Dashboard;
