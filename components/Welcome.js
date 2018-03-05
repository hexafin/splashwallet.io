import { fonts } from '../lib/constants'

const Welcome = ({splashtag}) => (
	<div>
		Welcome, <br/> @{splashtag}
		<style jsx>{`
			div {
				font-family: ${fonts.m};
				font-size: 28px;
				text-align: center;
				margin-bottom: 20px;
				margin-top: 50px;
			}
			`}
		</style>
	</div>
)	


export default Welcome