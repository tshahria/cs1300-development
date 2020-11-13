import React, { Component } from "react";

import { Paper } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import {
  FormControl,
  Input,
  Button,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Card
} from "@material-ui/core";

import CartItem from "./CartItem"

class Cart extends Component {
    createCart = item => {
        let quantity = this.props.quantity[item.name];
        let total = item.price*quantity;
        return (
            <CartItem quantity={quantity} total={total} item={item} removeFromCart={this.props.removeFromCart}/>
    );
  };

  render() {    
      const listItems = this.props.cart.map(this.createCart);

      listItems.push(
        <ListItem style={{textAlign:"center"}}> 
            <ListItemText> 
                Total in Cart: ${this.props.total}
            </ListItemText>
        </ListItem>
      )
      return <List>{listItems}</List>;

  }
}

export default Cart;