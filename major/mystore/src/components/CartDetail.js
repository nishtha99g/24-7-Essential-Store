import React,{Component} from 'react';
import Axios from 'axios';
import {Card,CardImg,CardTitle,CardText,CardBody,CardSubtitle} from 'reactstrap';


class CartDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
          cart_list: [],
        };
      }
      componentDidMount()
      {
         Axios.get('http://127.0.0.1:8000/cart')
         .then(res=>{
           this.setState({
             cart_list:res.data
           }); 
         })
      }
    render(){
        const listCart = this.state.cart_list.map((d) => (
            <div className="col-12 col-sm-4">
              <div className="p-3">
                <Card>
                    <CardImg src={d.product.image} height="400px" alt={d.product.name} />
                    <CardBody>
                      <CardTitle>{d.product.name}</CardTitle>
                      <CardSubtitle>{d.quantity}</CardSubtitle>
                    </CardBody>
                </Card>
              </div>
            </div>
          ));
        return(
         <div>
            {listCart}
         </div>
        );
    }
}
export default CartDetail;