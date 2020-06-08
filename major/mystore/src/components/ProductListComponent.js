import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody,CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom';
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
        const product_list = this.state.products_cat.map((d) => (
          <div className="col-12 col-sm-3 mb-2 ">
            <div className="p-2 ">
              <Card>
                <Link to={`/category/${d.id}`}>
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
                  <CardText>{d.description} {d.id}</CardText>
                </Link>
              </Card>
            </div>
          </div>
        ));
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