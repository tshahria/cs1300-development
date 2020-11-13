import React, { Component } from "react";
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {Sizes} from './constant.js';

class SizeFilter extends Component {
    render() {
        let filter = this.props.filter;
        return (
            <FormControl>
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter['size']}
                onChange={this.props.changeSize}
                >
                <MenuItem value={Sizes.ALL_SIZES}>{Sizes.ALL_SIZES}</MenuItem>
                <MenuItem value={Sizes.XXS}>{Sizes.XXS}</MenuItem>
                <MenuItem value={Sizes.XS}>{Sizes.XS}</MenuItem>
                <MenuItem value={Sizes.S}>{Sizes.S}</MenuItem>
                <MenuItem value={Sizes.M}>{Sizes.M}</MenuItem>
                <MenuItem value={Sizes.L}>{Sizes.L}</MenuItem>
                <MenuItem value={Sizes.XL}>{Sizes.XL}</MenuItem>
                </Select>
            </FormControl>);
        }
}
export default SizeFilter;