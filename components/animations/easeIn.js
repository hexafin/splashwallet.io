import { Component } from 'react'

const easeIn = ({delay}) => (Target) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {show: false};
        }

        componentDidMount() {
          console.log('mount', delay)
        	setTimeout(() => {
        		this.setState({show: true})
        	}, delay)
        }

        render() {
            return (
                <div>
                	<Target {...this.props} />
                  <style jsx>{`
                  	div {
                  		transition: 700ms ease all;
											opacity: ${this.state.show ? 1 : 0}
                  	}
                  	`}
                  </style>
                </div>
            );
        }
    }
}

export default easeIn
