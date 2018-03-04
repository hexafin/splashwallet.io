import { colors } from '../lib/constants'
import Button from './Button'
import LoadingCircle from './LoadingCircle'
import Checkmark from './Checkmark'
import axios from 'axios'
import debounce from 'lodash.debounce'
import Input from './Input'
import PhoneInput from './PhoneInput'
// import 'react-phone-number-input/rrui.css'
// import 'react-phone-number-input/style.css'

const api = 'https://us-central1-hexa-splash.cloudfunctions.net'

class PhoneNumberBar extends React.Component {
	constructor() {
		super()
		this.state = {
			submitted: false,
			phone: '',
			validationError: false,
			tagAvailable: true,
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		// this.checkIfTagAvailable = debounce(this.checkIfTagAvailable, 200)
	}

	resetButton() {
		this.setState({submitted: false})
	}

	handleSubmit() {
		const phone = this.state.phone.replace('+', '')
		console.log('phone', phone)
		this.setState({
			submitted: false, 
			validationError: false,
			checkingAvailability: true,
		})

		if (this.validatePhone(phone)) {
			axios.get(`${api}/claimSplashtag?splashtag=${this.props.splashtag}&phone=${phone}`)
				.then(result => {
					console.log('result', result.data)
					this.setState({
						checkingAvailability: false,
						submitted: true
					}, () => {
						setTimeout(() => {
							this.setState({submitted: false})
						}, 1000)
					})

			})
			.catch(error => {
				console.log('checkingAvailability', error)
				this.setState({checkingAvailability: false, submitted: false})
			})
			// this.props.handleSubmit(splashtag)
		} else {
			this.setState({validationError: true})
		}
	}

	handleChange(phone) {
		console.log('handlehc', phone)
		this.setState({phone: phone})
		// console.log(phone.length)
		// if (this.validatephone(phone)) {
		// 	this.setState({
		// 		validationError: false,
		// 		checkingAvailability: true
		// 	})
	 //  	this.checkIfTagAvailable(phone)
		// } else {

		// 	if (phone.length >= 3 && phone.length < 15) {
		// 		this.setState({
		// 			validationError: 'Only letters and numbers :)',
		// 			checkingAvailability: false
		// 		})

		// 	} else if (phone.length > 15) {
		// 		this.setState({
		// 			validationError: `That's too long. Keep it simple!`,
		// 			checkingAvailability: false
		// 		})
		// 	} else if (phone.length < 3) {
		// 		this.setState({
		// 			validationError: 'Too short :)',
		// 			checkingAvailability: false
		// 		})
		// 	} else {
		// 		this.setState({
		// 			validationError: false,
		// 			checkingAvailability: false
		// 		})
		// 	}

		// }

		// if (phone.length < 1) { 
		// 	console.log('setting validationerror to false')
		// 	this.setState({validationError: false}) 
		// }
	}


	validatePhone(splashtag) {
		return true
	 // if (/^[a-z0-9_-]{3,15}$/.test(splashtag)) {
	 //    return true
	 //  }
	 //    return false
	}

	render() {
		const {
			submitted,
			validationError,
			tagAvailable,
			checkingAvailability,
			phone,
		} = this.state

		const buttonContent = () => {
			if (checkingAvailability) {
				return <LoadingCircle />
			} else if (!tagAvailable) {
				return 'Already taken '
			} else if (validationError) {
				return 'Check splashtag'
			} else if (submitted) {
				return 'Done!'
			} else {
				return 'Text me the link'
			}
		}

		const buttonDisabled = () => {
			if (validationError) {
				return true
			} else if (this.state.tagAvailable) {
				return false
			} else {

				return true
			}
		}

		return (
			<div className="wrap">
					<div className="splashtagbar">
					<PhoneInput
						onChange={phone => this.handleChange(phone)}/>
					<Button 
						disabled={buttonDisabled()}
						onClick={this.handleSubmit}>
						{buttonContent()}
					</Button>
				</div>
				<div className="validationError">{validationError}</div>

				<style jsx>{`

					.wrap {
						display: flex;
						justify-content: center;
						flex-direction: column;
					}

					.splashtagbar {
						opacity: 1;
						display: flex;
    				flex-wrap: wrap;
    				justify-content: center;
					}

					.validationError {
						margin: 12px auto;
						color: ${colors.darkGrey};
						font-weight: 500;
					}

					`}
				</style>
			</div>
		)
	}
}

// <Input 
					// 	isValid={!validationError}
					// 	showCheckmark={(tagAvailable && splashtag.length > 2 && !validationError)}
					// 	value={this.state.splashtag}
					// 	handleChange={this.handleChange}
					// 	placeholder="Choose your splashtag"/>

export default PhoneNumberBar