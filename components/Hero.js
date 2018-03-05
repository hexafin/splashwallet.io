import { colors, fonts } from '../lib/constants'

const Hero = () => (
	<div className="hero">
		<img src="./static/app_Icon.png"/>
		<div className="text">
			<h1>The most user friendly bitcoin wallet</h1>
			<h2>Let's make using bitcoin easy</h2>
		</div>
		<style jsx>{`
			.hero {
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
				align-items: flex-start;
				margin-top: 120px;

			}

			@media (max-width: 550px) {
				.hero {
					margin-top: 30px;
					align-items: center;
					text-align: center;
				}

				img {
					display: none;
				}
			}

			img {
				width: 120px;
				display: none;
			}

			.text {
			}
			
			h1 {
				margin-bottom: 0px;
			}

			h2 {
				font-family: ${fonts.r};
				color: ${colors.grey};
				margin: 12px 0 30px;
			}

			@media (max-width: 550px) {

			}


		`}</style>
	</div>
)

export default Hero