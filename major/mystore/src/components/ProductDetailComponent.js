import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody,CardSubtitle} from 'reactstrap';
import Axios from 'axios';

class ProductDetail extends Component{
    render(){
      const product=this.props.products.filter((pro)=>pro.id==this.props.proid).map((d)=>
      (
        <div className="col-12 col-sm-3 mb-2 ">
        <div className="p-2 ">
          <Card>
              <CardImg
                top
                width="100%"
                height="250px"
                src={d.image}
                alt={d.name}
              />
              <CardBody>
                <CardTitle>{d.name}</CardTitle>
              </CardBody>
              <CardText><p>{d.description}</p><p>{d.price}</p></CardText>
          </Card>
        </div>
      </div>
      ));
        return (
          <div>
            {product}
            </div>


        );
    }
}
export default ProductDetail;