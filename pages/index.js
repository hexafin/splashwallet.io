import Layout from '../components/MainLayout'
import { colors } from '../lib/constants'
import axios from 'axios'
import debounce from 'lodash.debounce'
import Button from '../components/Button'
import LoadingCircle from '../components/LoadingCircle'
import Waves from '../components/Waves'

export default () => (
	<Layout>
		<Hero/>
		<Waves />
	</Layout>
)

		// <SplashTagBar />

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
	}

	handleSubmit(event) {
		const splashtag = this.state.splashtag
		if (this.validateSplashtag(splashtag)) {
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
			this.setState({validationError: false})
	  	this.checkIfTagAvailable(splashtag)
		} else {
			this.setState({validationError: true, checkingAvailability: false})
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
		const url = `https://us-central1-hexa-splash.cloudfunctions.net/splashtagAvailable?splashtag=`
		this.setState({checkingAvailability: true})
		axios.get(`${url}${splashtag}`)
			.then(result => {
				console.log('tagAvailable', result.data)
				this.setState({tagAvailable: result.data, checkingAvailability: false})
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
		const {submitted, validationError, tagAvailable, checkingAvailability} = this.state

		const buttonContent = () => {
			if (checkingAvailability) {
				var inBrowser=(typeof navigator !== "undefined")
				if (inBrowser) {
					return <LoadingCircle />
				} else {
					return
				}
			} else if (validationError) {
				return 'Check splashtag'
			} else if (!tagAvailable) {
				return 'Already taken '
			} else {
				return 'Claim splashtag'
			}
		}

		const buttonDisabled = () => {
			if (validationError) {
				console.log('validationerror', validationError)
				return true
			} else if (this.state.tagAvailable) {
			console.log('tagAvailable1', this.state.tagAvailable)
				return false
			} else {
			console.log('else' )

				return false
			}
		}

		return (
			<div className="wrap">
					<div className="splashtagbar">
					<input 
					onChange={this.handleChange}
					value={this.state.splashtag}
					type="text"
					placeholder="Choose your splashtag"></input>
				</div>
				<Button 
					disabled={buttonDisabled()}
					onClick={this.handleSubmit}>
					{buttonContent()}
				</Button>

				<style jsx>{`

					.wrap {
						display: flex;
						justify-content: center;
					}
					input {
						width: 220px;
						font-size: 18px;
						padding: 18px 20px;
						color: ${validationError ? '#ff3366' : colors.dark};
						font-weight: 500;
						border: none;
						box-shadow: rgba(63,63,63,0.08) 0 6px 34px 0;
					}

					input::placeholder {
						color: ${colors.grey};
					}
					input:focus {
						outline: 0;
					}

					.splashtagbar {
						opacity: 1;
					}

					.fade-out {
						opacity: 0;
					}


					`}
				</style>
			</div>
		)
	}
}



const Hero = () => (
	<div>
		<img src="./static/app_Icon.png"/>
		<h1>Coming March 2018</h1>
		<h2>Changing bitcoin forever.</h2>

		<style jsx>{`
			div {
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				margin-top: 100px;
			}

			img {
				width: 120px;
			}
			h1 {
				margin-bottom: 0px;
			}

			h2 {
				font-weight: 400;
				color: ${colors.grey};
				margin: 0 0 30px;
			}

		`}</style>
	</div>
)