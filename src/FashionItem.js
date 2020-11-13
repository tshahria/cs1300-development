import React, { Component } from "react";
import ButtonCounter from "./ButtonCounter"
import Grid from '@material-ui/core/Grid';

import CardMedia from '@material-ui/core/CardMedia';
import {
  List,
  ListItemText,
  ListItem,
} from "@material-ui/core";

class FashionItem extends Component {
    render() {
        let item = this.props.item;
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
                        <ListItemText>Region: {item.region}</ListItemText>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={3}>
                        <ButtonCounter addItem = {this.props.addItem} removeItem={this.props.removeItem} item={item} quantity={this.props.quantity}/>
                    </Grid>
                </Grid>
            </ListItem>
        );
    }
}

export default FashionItem;
