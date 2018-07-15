import React, { Component } from 'react';
import axios from 'axios';

import { Table, Button, Jumbotron } from 'reactstrap';

const URL = 'http://localhost/drupal-8.5.5/node/';
const FORMAT = '?_format=json';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        };

        this.queryArticle = this.queryArticle.bind(this);
        this.cleanArticles = this.cleanArticles.bind(this);
    }

    cleanArticles() {
        this.setState({
            articles: []
        });
    }

    queryArticle(nodeNumber) {
        const req = axios.get(`${URL}${nodeNumber}${FORMAT}`);

        req.then((response) => {
            const tit = response.data.title[0].value;
            const det = response.data.body[0].value;
            this.setState(prevState => ({
                articles: [...prevState.articles, {
                    title: tit,
                    details: det
                }]
            }));
        }).catch((error) => {
            console.log(error);
        });
    }

    componentWillMount() {
        var nodeNumber = 1;

        while (nodeNumber != 51) {
            this.queryArticle(nodeNumber);
            nodeNumber++;
        }
    }

    renderTabBody() {
        return this.state.articles.map((node, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{node.title}</td>
                    <td>
                        <Button color="success" onClick={() => this.props.handleDetails(index)}>
                            Open details
                        </Button>
                    </td>
                </tr>
            );
        });
    }

    renderTabHead() {
        if (this.props.detailsState) {
            return (
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Article page</th>
                    </tr>
                </thead>
            );
        }
        return (
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Article page</th>
                </tr>
            </thead>
        );
    }

    renderContent() {
        if (!this.props.detailsState) {
            return (
                <Table>
                    {this.renderTabHead()}
                    <tbody>
                        {this.renderTabBody()}
                    </tbody>
                </Table>
            );
        }
        return (
            <Jumbotron>
                <h1 className="display-3">{this.state.articles[this.props.nodeIndex].title}</h1>
                <hr className="my-2" />
                <p className="lead">{this.state.articles[this.props.nodeIndex].details}</p>
                <Button color="danger" onClick={() => this.props.handleDetails(0)}>Back to the list</Button>
            </Jumbotron>
        );
    }

    render() {
        return (
            <div>
                <h1 className="display-3">Matière Noire</h1>
                {this.renderContent()}
            </div>
        );
    }
}

export default Content;