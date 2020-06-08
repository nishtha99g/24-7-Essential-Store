import React, { Component } from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody,CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom';




class Dashboard extends Component{
    render(){
      const listItems = this.props.categories.map((d) => (
        <div className="col-12 col-sm-4">
          <div className="p-3">
            <Card>
              <Link to={`/category/${d.slug}`}>
                <CardImg src={d.image} height="400px" alt={d.name} />
                <CardBody>
                  <CardTitle>{d.name}</CardTitle>
                  <CardSubtitle>{d.designation}</CardSubtitle>
                </CardBody>
                <CardText>{d.description}</CardText>
              </Link>
            </Card>
          </div>
        </div>
      ));
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
