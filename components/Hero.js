import { colors } from '../lib/constants'

const Hero = () => (
	<div>
		<img src="./static/app_Icon.png"/>
		<h1>The most user friendly bitcoin wallet</h1>
		<h2>Reserve your splashtag below</h2>

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

export default Hero