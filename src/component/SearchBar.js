import React from "react";

class SearchBar extends React.Component{

    state = { term: '' };

    OnInputChange = event => {
        this.setState({ term: event.target.value});
    };
    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };
    render() {

    return (
        <div className="search-bar segment ui">
            <form onSubmit={this.onFormSubmit} action="" className="ui form">
                <div className="field">
                    <label htmlFor="">Video Search</label>
                    <input 
                    type="text" 
                    value={this.state.term}  
                    className="form-control" 
                    onChange={this.OnInputChange}
                    />
                </div>
            </form>
        </div>
    );
    };
};

export default SearchBar;