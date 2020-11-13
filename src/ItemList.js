import React, { Component } from "react";

import { Paper } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ButtonCounter from "./ButtonCounter"
import FashionItem from "./FashionItem"

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

import * as Constants from './constant.js'

class ItemList extends Component {
  createList = item => {
    return (
        <FashionItem item={item} quantity={this.props.quantity} addItem={this.addItem} removeItem={this.removeItem}/>
    );
  };

    addItem = item => {
        this.props.addItem(item);
    };

    removeItem = item => {
        this.props.removeItem(item);
    };

    handleFilter(filter, data) {
        let filteredData = data;
        if (filter['size'] != "All Sizes") {
            filteredData = filteredData.filter(item => item['size'] == filter['size'])
        }
        if (filter['region'] != "All Regions") {
            filteredData = filteredData.filter(item => item['region'] == filter['region'])
        }
        return filteredData;
    }

    handleSort(data, sortMethod) {
        if (sortMethod == "alphabetically") {
            data.sort((a,b)=>{
                if (a.name < b.name) {return -1;} 
                if (a.name > b.name) {return 1;} 
                return 0;
            })
        } else {
            data.sort((a,b)=>{
                if (a.price < b.price) {return -1;} 
                if (a.price > b.price) {return 1;} 
                return 0;
            })
        }
    }
    render() {
        let filtered_data = this.handleFilter(this.props.filter, Constants.items);
        this.handleSort(filtered_data, this.props.sortMethod)
        const listItems = filtered_data.map(this.createList);
        return <List>{listItems}</List>;
    }
}

export default ItemList;