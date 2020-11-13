import React, { Component } from "react";
import ButtonCounter from "./ButtonCounter"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  List,
  ListItemText,
  ListItem,
} from "@material-ui/core";

class CartItem extends Component {
    render() {
        let item = this.props.item;
        return (
            <Card>
                <ListItem>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Card>
                                <CardMedia
                                    style={{height:140}}
                                    image={item.image}
                                    title={item.name}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemText>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.name}
                                </Typography>
                            </ListItemText>
                            <ListItemText>${item.price}</ListItemText>
                            <ListItemText>Size: {item.size}</ListItemText>
                            <ListItemText>Quantity in Cart: {this.props.quantity}</ListItemText>
                            <ListItemText>Total: {this.props.total}</ListItemText>
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
            </Card>
        );
    }   

}
export default CartItem;
