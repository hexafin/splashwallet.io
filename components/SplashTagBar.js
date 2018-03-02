import { colors } from '../lib/constants'
import Button from './Button'
import LoadingCircle from './LoadingCircle'
import Checkmark from './Checkmark'
import axios from 'axios'
import debounce from 'lodash.debounce'

const api = 'https://us-central1-hexa-splash.cloudfunctions.net'
class SplashTagBar extends React.Component {
	constructor() {
		super()
		this.state = {
			submitted: false,
			splashtag: '',
			validationError: false,
			tagAvailable: true,
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.checkIfTagAvailable = debounce(this.checkIfTagAvailable, 200)
	}

	handleSubmit(event) {
		const splashtag = this.state.splashtag

		if (this.validateSplashtag(splashtag)) {
			axios.post(`${api}/claimSplashtag?splashtag=${splashtag}`)
			this.setState({
				submitted: true, 
				validationError: false,
				checkingAvailability: false,
			})
		} else {
			this.setState({validationError: true})
		}
	}

	handleChange(event) {
		const splashtag = this.forceLower(event.target.value)
		this.setState({splashtag: splashtag})
		console.log(splashtag.length)
		if (this.validateSplashtag(splashtag)) {
			this.setState({
				validationError: false,
				checkingAvailability: true
			})
	  	this.checkIfTagAvailable(splashtag)
		} else {

			if (splashtag.length >= 3 && splashtag.length < 15) {
				this.setState({
					validationError: 'Only letters and numbers :)',
					checkingAvailability: false
				})

			} else if (splashtag.length > 15) {
				this.setState({
					validationError: `That's too long. Keep it simple!`,
					checkingAvailability: false
				})
			} else if (splashtag.length < 3) {
				this.setState({
					validationError: 'Too short :)',
					checkingAvailability: false
				})
			} else {
				this.setState({
					validationError: false,
					checkingAvailability: false
				})
			}

		}

		if (splashtag.length < 1) { 
			console.log('setting validationerror to false')
			this.setState({validationError: false}) 
		}
	}

	forceLower(splashtag) {
		return splashtag.toLowerCase()
	}

	checkIfTagAvailable(splashtag) {

		const url = `${api}/splashtagAvailable?splashtag=`
		
		axios.get(`${url}${splashtag}`)
			.then(result => {
				const isAvailable = result.data.available

				if (isAvailable) {
					this.setState({
						tagAvailable: isAvailable,
						checkingAvailability: false
					})
				} else {
					this.setState({
						validationError: `Someone already took @${splashtag}`,
						tagAvailable: isAvailable,
					  checkingAvailability: false
					})
				}

			})
			.catch(error => {
				console.log('checkingAvailability', error)
				this.setState({tagAvailable: true, checkingAvailability: false})
			})

	}

	validateSplashtag(splashtag) {
	 if (/^[a-z0-9_-]{3,15}$/.test(splashtag)) {
	    return true
	  }
	    return false
	}

	render() {
		const {
			submitted,
			validationError,
			tagAvailable,
			checkingAvailability,
			splashtag,
		} = this.state

		const buttonContent = () => {
			if (checkingAvailability) {
				return <LoadingCircle />
			} else if (!tagAvailable) {
				return 'Already taken '
			} else if (validationError) {
				return 'Check splashtag'
			}  else {
				return 'Claim splashtag'
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

		const showCheckmark = () => {
			if (tagAvailable && splashtag.length > 2 && !validationError) {
				return <Checkmark />
			} 
		}

		return (
			<div className="wrap">
					<div className="splashtagbar">
					<div className="input-bar">
						<input 
						onChange={this.handleChange}
						value={this.state.splashtag}
						type="text"
						placeholder="Choose your splashtag"></input>
						 {showCheckmark()}
					</div>
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
					input {
						width: 220px;
						font-size: 18px;
						padding: 18px 20px;
						color: ${validationError ? '#ff3366' : colors.dark};
						font-weight: 500;
						border: none;
						box-shadow: rgba(63,63,63,0.09) 0 6px 34px 0;
						border-radius: 4px;
						-webkit-appearance: none;
					}

					@media (max-width: 550px) {
						input {
							width: calc(100% - 40px);
						}
						.input-bar {
							width: 100%;
						}
					}

					.input-bar {
						position: relative;
					}

					input::placeholder {
						color: ${colors.grey};
					}
					input:focus {
						outline: 0;
					}

					.splashtagbar {
						opacity: 1;
						display: flex;
    				flex-wrap: wrap;
    				justify-content: center;
					}

					.fade-out {
						opacity: 0;
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

export default SplashTagBar