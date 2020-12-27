import React, {Component} from 'react';
import DisplayName from './components/displayName';

class App extends Component {
    render() {
        return (
            <DisplayName displayName={this.state.displayName} />
        )
    }

    state = {
      displayName: []
    };

    componentDidMount() {
        fetch('https://immense-lowlands-99162.herokuapp.com/api/helloEndpoint')
            .then(res => res.json())
            .then((data) => {
                this.setState({ displayName: data })
            })
            .catch(console.log)
    }
}

export default App;