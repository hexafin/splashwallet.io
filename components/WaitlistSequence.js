import { Component } from 'react'
import Waves from '../components/Waves'
import SplashTagBar from '../components/SplashTagBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

class WaitlistSequence extends Component {
	constructor(props) {
		super(props)
		this.state = {
			splashtagChosen: false,
		}
	}

	handleSubmit(splashtag) {
		this.setState({
			splashtag: splashtag,
			splashtagChosen: true
		})
	}

	render() {
		
		return (
			<div>
				{this.state.splashtagChosen ? 
				<div>
					<Wel splashtag={this.state.splashtag}/>
				</div> :
				<div>
					<Hero/>
					<SplashTagBar handleSubmit={this.handleSubmit.bind(this)}/>
				</div>
				}
				<Waves />
				<Footer />
			</div>
			)
	}
} 


const makeMoveUp = (Target) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {moveTop: false};
        }

        onClick = () => {
        	console.log('hey')
            this.setState({moveTop: !this.state.moveTop});
        };

        render() {
            return (
                <Target isOpen={true}
                        onClick={this.onClick}
                        {...this.props}
                        hide={this.state.moveTop}/>
            );
        }
    }
};


const Welcome = ({splashtag, hide, onClick}) => (
	<div onClick={onClick} className={[hide && 'hide'].join('')}>
		Welcome, <br/> @{splashtag}
		<style jsx>{`
			div {
				font-size: 26px;
				font-weight: 500;
				text-align: center;
			}
			.hide {
				opacity: 0;
				transition: all 500ms ease;
			}
			`}
		</style>
	</div>
)	

const Wel = makeMoveUp(Welcome)


export default WaitlistSequence