import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class ButtonCounter extends React.Component {
  handleIncrement = () => {
    this.props.addItem(this.props.item);
  };

  handleDecrement = () => {
    this.props.removeItem(this.props.item);
  };

  render() {
    let quantity = this.props.quantity;
    if (this.props.item.name in quantity) {
        quantity = quantity[this.props.item.name];
    } else {
        quantity = 0;
    }
    const displayCounter = quantity > 0;

    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={this.handleIncrement}>+</Button>
        {displayCounter && <Button disabled>{quantity}</Button>}
        {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
      </ButtonGroup>
    );
  }
}

export default ButtonCounter;