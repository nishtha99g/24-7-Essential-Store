import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody,Form,FormGroup,Button,Input,Label} from 'reactstrap';
import Axios from 'axios';

class ProductDetail extends Component{
  state = {
    quantity:1,
    updated:false,
  };

  addtoCart = e => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/cart/add/${this.props.proid}`, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
          <Form onSubmit={this.props.addtoCart}>
          <FormGroup>
            <Label for="Quantity"> Select Quantity</Label>
            <Input type="select" name="select" id="quantity" onChange={this.onChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
           </FormGroup>
           <Button>Add to cart</Button>
          </Form>
          </div>
        </div>

        );
    }
}
export default ProductDetail;