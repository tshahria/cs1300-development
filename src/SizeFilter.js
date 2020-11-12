import React, { Component } from "react";
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class SizeFilter extends Component {
    render() {
        let filt = this.props.filter;
        return (
            <FormControl>
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filt['size']}
                onChange={this.props.changeSize}
                >
                <MenuItem value={"All Sizes"}>All Sizes</MenuItem>
                <MenuItem value={"XS"}>XS</MenuItem>
                <MenuItem value={"S"}>S</MenuItem>
                <MenuItem value={"M"}>M</MenuItem>
                <MenuItem value={"L"}>L</MenuItem>
                <MenuItem value={"XL"}>XL</MenuItem>
                </Select>
            </FormControl>);
        }
}
export default SizeFilter;