import { LogoSmallColor } from '../components/Icons'

export default () => (
	<div>
		<LogoSmallColor/>
		<h2>Splash</h2>
		<style jsx>{`
			div {
				display: flex;
				align-items: center;
			}
			h2 {
				font-size: 21px;
				margin-left: 5px;
			}
		`}
		</style>
	</div>
)