import Button from '../Button'
import { colors, fonts } from '../../lib/constants'

export default () => (
	<div>
		<h2>Join the splash community</h2>
		<h3>Start using crypto in real life</h3>
		<a href="#"><Button>Claim splashtag</Button></a>
		<style jsx>{`

			div {
				text-align: center;
				margin-bottom: 140px;
			}

			h2 {
				font-size: 32px;
				margin-bottom: -10px;
			}

			h3 {
				color: ${colors.grey};
				font-family: ${fonts.m};
				margin-bottom: 30px;
			}

			`}
		</style>
	</div>


)