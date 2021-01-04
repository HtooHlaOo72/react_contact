import React, { Component } from 'react'

export default class SingleInput extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.name.toUpperCase()} : </label>
                <input 
                type={this.props.type} 
                name={this.props.name}
                className="form-control" 
                placeholder={"Enter "+this.props.name} 
                id={this.props.id} 
                value={this.props.value}
                onChange={this.props.onChange}
                />
            </div>
        )
    }
}
