import React, { Component } from "react";
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {SortTypes} from './constant.js';

class Sort extends Component {
    render() {
        let sortMethod = this.props.sortMethod;
        return (
            <FormControl>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortMethod}
                onChange={this.props.changeSortMethod}
                >
                <MenuItem value={SortTypes.NAME}>{SortTypes.NAME}</MenuItem>
                <MenuItem value={SortTypes.PRICE}>{SortTypes.PRICE}</MenuItem>
                </Select>
            </FormControl>);
        }
}
export default Sort;