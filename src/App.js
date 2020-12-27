import React, {Component} from 'react';
import DisplayName from './components/displayName';

class App extends Component {
    render() {
        return (
            <DisplayName displayName={this.state.displayName} totalUnits={this.state.total}/>
        )
    }

    state = {
      displayName: [],
      total: []
    };

    componentDidMount() {
        fetch('http://localhost:5000/api/drinks')
            .then(res => res.json())
            .then((drinksData) => {
                this.setState({ displayName: drinksData })
            })
            .catch(console.log)

            fetch('http://localhost:5000/api/totalUnits')
            .then(res => res.json())
            .then((totalData) => {
                this.setState({ total: totalData })
            })
            .catch(console.log)
    }
}

export default App;