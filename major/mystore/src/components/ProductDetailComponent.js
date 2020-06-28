import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody,Form,FormGroup,Button,Input,Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class ProductDetail extends Component{

  addtoCart = e => {
    e.preventDefault();
    Axios.post(`http://127.0.0.1:8000/add-to-cart/${this.props.proid}/`).then((response)=> {
      console.log(response);
    });
  };
  
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
          <div className="col-sm-12">
            {product}
          </div>
          <div className="col-sm-4">
           <Button onClick={this.addtoCart}>Add to cart</Button>
          </div>
        </div>

        );
    }
}
export default ProductDetail;