import React, { Component } from "react";
import ReactDOM from "react-dom";

import ItemList from "./ItemList";
import Cart from "./Cart";
import SizeFilter from "./SizeFilter";
import RegionFilter from "./RegionFilter";
import Sort from "./Sort";
import {SortTypes, Sizes, Regions} from "./constant.js";

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Paper } from "@material-ui/core";
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      filter: {
        size: Sizes.ALL_SIZES,
        region: Regions.ALL_REGIONS
      }, 
      sortMethod: SortTypes.NAME,
      total: 0,
      quantity: {}
    };
  }
  
  changeSize = event => {
    let val = event.target.value;
    let filter = this.state.filter;
    filter["size"] = val;
    this.setState({
      filter:filter
    });
  };

  changeRegion = event => {
    let val = event.target.value;
    let filter = this.state.filter;
    filter["region"] = val;
    this.setState({
      filter:filter
    });
  };

  changeSortMethod = event => {
    this.setState({
      sortMethod:event.target.value
    });
  };

  addItem = item => {
    let quantity = this.state.quantity;
    let cart = this.state.cart;
    if (item.name in this.state.quantity) {
      quantity[item.name] += 1;
    } else {
      quantity[item.name] = 1;
      cart.push(item);
    }
    let total = this.state.total;
    total += item.price;
    this.setState({
      quantity: quantity,
      total: total,
      cart:cart
    });
  };

  removeItem = item => {
    let quantity = this.state.quantity;
    let cart = this.state.cart;
    quantity[item.name] -= 1;
    if (quantity[item.name] == 0) {
      delete quantity[item.name];
      cart = cart.filter((x) => x != item);
    }
    let total = this.state.total;
    total -= item.price;
    this.setState({
      quantity: quantity,
      total: total,
      cart:cart
    });
  };

  removeFromCart = item => {
    let quantity = this.state.quantity;
    let cart = this.state.cart;
    let total = this.state.total;
    total -= item.price*quantity[item.name];
    delete quantity[item.name];
    cart = cart.filter((x) => x != item);

    this.setState({
      quantity: quantity,
      total: total,
      cart:cart
    });
  };

  render() {
    return (
      <div>
          <div style={{marginTop:"1rem"}}> 
            <Grid container justify="space-around">
                <SizeFilter filter={this.state.filter} changeSize={this.changeSize}/>
                <RegionFilter filter={this.state.filter} changeRegion={this.changeRegion}/>
                <Sort sortMethod={this.state.sortMethod} changeSortMethod={this.changeSortMethod}/>
            </Grid>
          </div>

          <div>
            <Grid container spacing={3} style={{marginTop:"1rem"}}>
              <Grid item xs={6}>
                <Typography variant='h4' align='center'>Items</Typography>
                <ItemList filter={this.state.filter} sortMethod={this.state.sortMethod} addItem={this.addItem} removeItem={this.removeItem} quantity={this.state.quantity}/>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h4' align='center'>Cart</Typography>
                <Cart quantity={this.state.quantity} cart={this.state.cart} total={this.state.total} removeFromCart={this.removeFromCart}/>
              </Grid>
            </Grid>
          </div>
      </div>
    );
  }
}


export default App