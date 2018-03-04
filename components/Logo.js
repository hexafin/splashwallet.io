import { LogoSmallColor } from '../components/Icons'
import { colors } from '../lib/constants'

export default () => (
	<a href="./">
		<div>
			<LogoSmallColor/>
			<h2>Splash</h2>		
		</div>
			<style jsx>{`
				div {
					display: flex;
					align-items: center;
				}
				h2 {
					font-size: 21px;
					margin-left: 5px;
				}
				a {
					color: ${colors.dark};
				}
			`}
			</style>
		</a>		
)