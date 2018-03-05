import Timer from './Timer'
import { colors, fonts } from '../lib/constants'

const TimeMessage = ({start}) => (
	<div>
	We’re reserving your splashtag for <span>{start && <Timer/>}</span> minutes.
	<span> Download the app to claim it.</span>
		<style jsx>{`
			div {
				color: ${colors.dark};
				font-size: 22px;
				text-align: center;
				max-width: 500px;
				margin-bottom: 30px;

			}
			span {
				color: ${colors.primary};
				font-family: ${fonts.m};
			}
			`}
		</style>
	</div>
)

export default TimeMessage