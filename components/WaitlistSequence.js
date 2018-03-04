import { Component } from 'react'
import Waves from './Waves'
import SplashTagBar from './SplashTagBar'
import Hero from './Hero'
import Footer from './Footer'
import Timer from './Timer'
import AppStoreDownload from './AppStoreDownload'
import { colors } from '../lib/constants'
import easeIn from './animations/easeIn'
import TimeMessage from './TimeMessage'
import Welcome from './Welcome'
import PhoneCapture from './PhoneCapture'
import PhoneNumberBar from './PhoneNumberBar'

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
		},() => setTimeout(() => {
			this.setState({showPhoneCapture: true})
		}, 150))
	}

	render() {
		const { 
			splashtagChosen,
		  splashtag,
		  showPhoneCapture
		} = this.state
		return (
			<div className="container">
			
				{!showPhoneCapture && 
					<div className="splashtag-container">
					<Hero/>
					<SplashTagBar handleSubmit={this.handleSubmit.bind(this)}/>
				</div>
				}
				{showPhoneCapture && <div className="phone-message">
						<Wel splashtag={splashtag}/>
						<EaseInTimeMessage 
							splashtag={splashtag}
							start={splashtagChosen}
							/>
						<EaseInPhoneCapture splashtag={splashtag}/>
				</div>
				}
				<div>
					</div>
					
				
				<style jsx>{`
					.container {
						display: flex;
						justify-content: center;
					}

					.phone-message {
						display: flex;
						align-items: center;
						flex-direction: column;
					}

					.splashtag-container {
						transition: all 150ms ease;
						position: relative;
						visibility: ${splashtagChosen ? 'hidden' : 'unset'}
						opacity: ${splashtagChosen ? 0 : 1};
						transform: ${splashtagChosen ? 'translateY(20px)' : 'translateY(0px)'}
					}

					`}
				</style>
			</div>
			)
	}
} 

const Wel = easeIn({delay: 500})(Welcome)
const EaseInPhoneCapture = easeIn({delay: 1500})(PhoneCapture)
const EaseInTimeMessage = easeIn({delay: 1200})(TimeMessage)

export default WaitlistSequence