import React, { Component } from 'react';
import { getResults } from './utils.js';
export default class search extends Component {
    
    state = {
        name:'',
        result: []
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const result = await getResults(this.state.name);
        await this.setState({ result })
        console.log(this.state.result)
    }

    render() {
        const result = this.state.result
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                    <input onChange={async(e) => await this.setState({ name: e.target.value })}/>
                    <button>Search</button>
                    </label>
                </form>
                <div className = "results-container">
                    {result.map(entry => 
                    <div className="results-item">
                    <span>{entry.name}</span>
                    <img src={entry.image} alt={entry.name}/>
                    <span>Rating: {entry.rating}</span>
                    <span><a href={entry.url}>Yelp Link</a></span>
                    </div>
                    ) }
                </div>

            </div>
        )
    }
}
