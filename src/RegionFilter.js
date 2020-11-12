import React, { Component } from "react";
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class RegionFilter extends Component {
    render() {
        let filt = this.props.filter;
        return (
            <FormControl>
                <InputLabel id="demo-simple-select-label">Region</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filt['region']}
                onChange={this.props.changeRegion}
                >
                <MenuItem value={"All Regions"}>All Regions</MenuItem>
                <MenuItem value={"China"}>China</MenuItem>
                <MenuItem value={"Bangladesh"}>Bangladesh</MenuItem>
                <MenuItem value={"USA"}>USA</MenuItem>
                </Select>
            </FormControl>);
        }
}
export default RegionFilter;