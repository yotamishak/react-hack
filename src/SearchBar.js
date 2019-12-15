import React, { Component } from "react";
import SelectSearch from 'react-select-search'
import './SearchBar.css'


class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sitelist: this.props.sitelist.map(site => {
                
                return (
                    { "name": `${site}`, "value": `${site}` }
                )
            }),
            value:this.props.value

        }
        this.handleChange = this.handleChange.bind(this);


    }
 
    handleChange(v) {
        this.setState({value:v})
       this.props.pickSite(v.value)
    }


    render() {
        return (
            <SelectSearch options={this.state.sitelist} value={this.state.value} name="site" placeholder="Choose your Site..." 
            autocomplete="on" onChange={this.handleChange} />)
    }
}

export default SearchBar;
