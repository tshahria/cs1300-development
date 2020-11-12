import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class GroupedButtons extends React.Component {
  handleIncrement = () => {
    this.props.addItem(this.props.item);
  };

  handleDecrement = () => {
    this.props.removeItem(this.props.item);
  };

  render() {
    let qt = this.props.quantity;
    if (this.props.item.name in qt) {
        qt = qt[this.props.item.name];
    } else {
        qt = 0;
    }
    const displayCounter = qt > 0;

    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={this.handleIncrement}>+</Button>
        {displayCounter && <Button disabled>{qt}</Button>}
        {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
      </ButtonGroup>
    );
  }
}

export default GroupedButtons;