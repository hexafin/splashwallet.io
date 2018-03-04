import { colors } from '../lib/constants'

const Hero = () => (
	<div className="hero">
		<img src="./static/app_Icon.png"/>
		<div className="text">
			<h1>Using bitcoin shouldn't be hard</h1>
			<h2>Reserve your splashtag below</h2>
		</div>
		<style jsx>{`
			.hero {
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				margin-top: 100px;

			}

			@media (max-width: 550px) {
				.hero {
					margin-top: 50px;
				}
			}

			img {
				width: 120px;
			}

			.text {
				text-align: center;
			}
			
			h1 {
				margin-bottom: 0px;
			}

			h2 {
				font-weight: 400;
				color: ${colors.grey};
				margin: 0 0 30px;
			}

			@media (max-width: 550px) {

			}


		`}</style>
	</div>
)

export default Hero