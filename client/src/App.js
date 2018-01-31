import React, {Component} from 'react';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            reponses: [],
            reponseChoisie: '',
        };

        this._choix = this._choix.bind(this);
    }

    componentDidMount() {
        this.api().then(res => {
            this.setState({
                question: res.question, reponses: res.reponses
            });
        }).catch(err => console.log(err));
    }

    api = async () => {
        const response = await fetch('/api');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    _choix(choisie) {
        this.setState({
            reponseChoisie: choisie === 'oui' ? this.state.reponses.oui : this.state.reponses.non,
            reponses: []
        });
    }

    render() {
        const choix = Object.keys(this.state.reponses).map((key, index) =>
            <p role="button" key={index}>{key}</p>
        );
        return (
            <div className="App">
                <h2 className="question">
                    {this.state.question}
                </h2>
                <div className="choix" onClick={(event) => this._choix(event.target.innerHTML)}>
                    {choix}
                </div>
                <div className="reponse">
                    <h4>{this.state.reponseChoisie}</h4>
                </div>
            </div>
        );
    }
}

export default App;
