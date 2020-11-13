import React, { Component } from "react";
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {Regions} from './constant.js';

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
                <MenuItem value={Regions.ALL_REGIONS}>{Regions.ALL_REGIONS}</MenuItem>
                <MenuItem value={Regions.CHINA}>{Regions.CHINA}</MenuItem>
                <MenuItem value={Regions.BANGLADESH}>{Regions.BANGLADESH}</MenuItem>
                <MenuItem value={Regions.USA}>{Regions.USA}</MenuItem>
                </Select>
            </FormControl>);
        }
}
export default RegionFilter;