import React , {Component} from 'react';
import {Navbar,NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Jumbotron,
Modal,ModalBody,ModalHeader, Form,FormGroup,Input,Button,Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

  constructor(props){
    super(props);
    this.state={
      isNavOpen:false,
      isModelOpen:false
    };
  this.toggleNav=this.toggleNav.bind(this);
    }

 toggleNav(){
   this.setState({
     isNavOpen:!this.state.isNavOpen
   });
 }

  render(){
    return(
          <React.Fragment>
          <Navbar dark expand="md">
            <div className="container">
             <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">
                 <img src="assests/images/logo.jpg" height="30" width="41" alt="Your store" />
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                 <NavItem>
                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg" />Home</NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg" />About Us</NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg" />Contact Us</NavLink>
                 </NavItem>
              </Nav>
              </Collapse>
            </div>
          </Navbar>
          <Jumbotron>
            <div className="container">
               <div className="row row-header" >
                  <div className="col-12 col-sm-6">
                    <h1>YourStore</h1>
                       <p>We take inspiration from the World's best cuisines,
                        and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                  </div>
                  </div>
               </div>
          </Jumbotron>
          <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel}>
             <ModalHeader toggle={this.toggleModel}>Login</ModalHeader>
             <ModalBody>
               <Form onSubmit={this.handleLogin}>
                 <FormGroup>
                   <Label htmlfor="username" >Username</Label>
                    <Input type="text" id="username" name="username" innerRef={(input)=>this.username = input}/>
                  </FormGroup>
                  <FormGroup>
                   <Label htmlfor="password" >Password</Label>
                    <Input type="password" id="password" name="password" innerRef={(input)=>this.password = input}/>
                  </FormGroup>
                  <FormGroup check>
                   <Label check>
                   <Input type="checkbox" name="remember" innerRef={(input)=>this.remember = input}/>
                   Remember Me
                   </Label>
                  </FormGroup>
                  <Button type="submit" value="submit" color="primary" >Login </Button>
               </Form>
             </ModalBody>
          </Modal>
          </React.Fragment>
    );
  }
}

export default Header;
