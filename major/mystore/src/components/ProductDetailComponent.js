import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody,CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class ProductDetail extends Component{
    render(){
      const d=this.props.product;
        return (
          <div>
            <div className="col-12 col-sm-3 m-1">
              <Card>
                <CardImg src={d.image} alt={d.name} />
                  <CardBody>
                    <CardTitle>{d.name}</CardTitle>
                    <CardSubtitle>{d.category}</CardSubtitle>
                  </CardBody>
                <CardText><p>{d.description}</p>
                <p>{d.price}</p></CardText> 
              </Card>
            </div>
            </div>

        );
    }
}
export default ProductDetail;