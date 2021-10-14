import React, { Component } from 'react';
import { getResults } from './utils.js';
export default class search extends Component {
    
    state = {
        name:'',

    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const result = await getResults(this.state.name);
        console.log(result)
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                    <input onChange={async(e) => await this.setState({ name: e.target.value })}/>
                    <button>Search</button>
                    </label>
                </form>
            </div>
        )
    }
}
