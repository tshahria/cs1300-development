import React, { Component } from "react";

import { Paper } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import GroupedButtons from "./GroupedButtons"
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

import DeleteIcon from '@material-ui/icons/Delete';
import * as Constants from './constant.js'

class Cart extends Component {
    createCart = item => {
        let quantity = this.props.quantity[item.name];
        let total = item.price*quantity;
        return (
        <ListItem>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <CardMedia
                        style={{height:140}}
                        image={item.image}
                        title={item.name}
                    />
                </Grid>
                <Grid item xs={4}>
                    <ListItemText>{item.name}</ListItemText>
                    <ListItemText>${item.price}</ListItemText>
                    <ListItemText>Size: {item.size}</ListItemText>
                    <ListItemText>Quantity in Cart: {quantity}</ListItemText>
                    <ListItemText>Total: {total}</ListItemText>
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <DeleteIcon onClick={() => {
                        this.props.removeFromCart(item);
                    }}/>
                </Grid>
            </Grid>
        </ListItem>
    );
  };
  render() {    
      const listItems = this.props.cart.map(this.createCart);
      listItems.push(<ListItem> <ListItemText> Total in Cart: ${this.props.total}</ListItemText></ListItem>)
      return <List>{listItems}</List>;

  }
}

export default Cart;