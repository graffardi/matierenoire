import React, { Component } from 'react';

import '../../style/style.css';
import Content from './Content';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: false,
            index: 0
        };

        this.handleClickDetails = this.handleClickDetails.bind(this);
    }

    handleClickDetails(indexClicked) {
        this.setState({
            details: (!this.state.details),
            index: indexClicked
        });
    }

    render() {
        return (
            <div className="app-container">
                <Content detailsState={this.state.details}
                    handleDetails={this.handleClickDetails}
                    nodeIndex={this.state.index} />
            </div>
        );
    }
}

export default App;