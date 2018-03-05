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
					<div className="hero-container">
						<div className="splashtag-container">
						<Hero/>
						<SplashTagBar handleSubmit={this.handleSubmit.bind(this)}/>
						</div>
					<AppPreview />

					</div>
				}
				{showPhoneCapture && <div className="phone-message">
						<EaseInWelcome splashtag={splashtag}/>
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
						height: 620px;
					}

					.hero-container {
						display: flex;
						justify-content: space-around;
						width: 100%;
					}

					@media (max-width: 550px) {
						.hero-container {
							flex-direction: column;
							align-items: center;
						}


					}

					.phone-message {
						display: flex;
						align-items: center;
						flex-direction: column;
					}

					.hero-container {
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

const AppPreview = () => (
	<div className="app-preview">
		<img className="phone" src="./static/phone-image.png"/>
		<img className="preview" src="./static/app-preview.png"/>

		<style jsx>{`

				.app-preview {
					position: relative;
					height: 620px;
					width: 301px;
					transform: scale(0.9);
				} 


				.phone {
					position: absolute;
			    z-index: 1;
			    height: 620px;
				}

				.preview {
					height: 596px;
    			left: 13px;
			    top: 12px;
			    border-radius: 30px;
			    position: absolute;
			    z-index: 0;
					box-shadow: #00000026 0 15px 70px -10px;

				}

				@media (max-width: 330px) {
					.app-preview {
						transform: scale(0.8)
					}
				}

				// @media (max-width: 330px) {
				// 	.app-preview {
				// 		height: 520px;
				//     width: 254px;
				//     margin: 0 auto;
				// 	}

				// 	.phone {
				//     z-index: 1;
				//     height: 520px;
				// 	}

				// 	.preview {
				// 		height: 499px;
				//     left: 11px;
				//     top: 11px;
				//     border-radius: 24px;
				// 	}
				// }

			`}
			</style>
	</div>
)

const EaseInWelcome = easeIn({delay: 500})(Welcome)
const EaseInPhoneCapture = easeIn({delay: 2500})(PhoneCapture)
const EaseInTimeMessage = easeIn({delay: 1300})(TimeMessage)

export default WaitlistSequence