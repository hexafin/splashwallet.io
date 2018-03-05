import { colors, fonts } from '../../lib/constants'

export default () => (
	<div className="outer">
		<div className="background section">
			<div className="stat-section">
				<img className="filling-drop" src="./static/filling-drop.png"/>
				<div className="stats">
					<StatBox text="24.3%"/>
					<div className="title">of common first-name @splashtags already taken</div>
				</div>
			</div>
			<Box />
		</div>
		<style jsx> {`
			.outer {
				height: 580px;
    		position: relative;
			}
			.background {
				background: url('./static/grey_background.png');
				background-size: fit;
				height: 460px;
				width: 100vw;
		    position: absolute;
		    left: 50%;
		    right: 50%;
		    margin-left: -50vw;
		    margin-right: -50vw;
			}

			.title {
				font-family: ${fonts.m};
				font-size: 26px;
				max-width: 320px;
				margin-top: 10px;
			}

			.section {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
			}

			.filling-drop {
				width: 150px;
				height: 100%;
				margin-right: 20px;
				margin-top: 20px;
			}

			.stat-section {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-bottom: 50px;
				margin-top: 70px;
			}
			`}
		</style>
	</div>
)

const StatBox = ({text}) => (
	<div>
		{text}
		<style jsx>{`
			div {
				padding: 10px 20px;
				border-radius: 4px;
				font-family: ${fonts.b};
				font-size: 26px;
				color: ${colors.primary};
				background: ${colors.primaryLight};
				display: inline-block;
			}
			`}
		</style>
	</div>
)


const Box = () => (
	<div className="box">
		<div className="content">Together, let's make bitcoin fun and easy to use.</div>
		<div className="subtitle">The Splash team </div>
		<style jsx>{`
			.box {
				background: white;
				box-shadow: rgba(63,63,63,0.09) 0 6px 24px;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				text-align: center;
				padding: 30px 40px;
				max-width: 200px;
				border-radius: 4px;
			}
			.content {
				font-family: ${fonts.m};

			}
			.subtitle {
				margin-top: 10px;
				color: ${colors.grey};
			}
			`}
		</style>
	</div>
)