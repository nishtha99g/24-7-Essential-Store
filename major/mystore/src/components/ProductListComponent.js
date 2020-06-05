import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody,CardSubtitle} from 'reactstrap';
import Axios from 'axios';

class ProductList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          products_cat: []
        };
      }
      componentDidMount()
      {
         Axios.get(`http://127.0.0.1:8000/${this.props.name}`)
         .then(res=>{
           this.setState({
             products_cat:res.data
           }); 
         })
      }
    render(){
        const product_list = this.state.products_cat.map((d) =>
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
        return (
            <div>
                <div className="col-12">
                    <div className="row">
                        {product_list}
                    </div>
                </div>
            </div>

        );
    }
}
export default ProductList;