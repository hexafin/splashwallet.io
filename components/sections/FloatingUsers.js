import {colors, fonts} from '../../lib/constants'

const FloatingUsers = () => (
	<div>
		<Title/>
		<PoweredByLighting/>
		<FloatingUser src="./static/me2.png" name="daniel"/>
		<style jsx>{`
			div {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			`}
		</style>
	</div>
)

const Title = () => (
	<div>
		<h2>Send and receive bitcoin instantly using your @splashtag</h2>
		<style jsx> {`
			h2 {
				font-family: ${fonts.m};
			}

			`}
		</style>
	</div>
)

const PoweredByLighting = () => (
	<div className="outer">
		<img src="./static/PoweredByLighting.png"/>
		<div className="desc">
			<div className="headline">Powered by <span>Lightning</span></div>
			<div>Lighting allows <span>instant</span> and <span>
less-than-1-cent</span> transactions</div>
		</div>
		<style jsx> {`

				.outer {
					display: flex;
					flex-direction: row;
				}
				.desc {
					color: ${colors.darkGrey};
					display: flex;
					flex-direction: column;
					justify-content: center;
					margin-left: 10px;
					max-width: 220px;
				}

				.desc span {
					color: ${colors.darkGrey};
					font-family: ${fonts.b};
				}

				.headline {
					color: ${colors.dark};
					font-family: ${fonts.m};
					font-size: 18px;
				}

				img {
					width: 85px;
					height: 85px;
					transition: all 150ms ease;
				}
				img:hover {
					transform: scale(1.05);
				}

				.headline span {
					color: ${colors.primary};
				}

			`}
		</style>
	</div>
)

const FloatingUserBar = () => (
	<div>
	</div>
)

const FloatingUser = ({src, name}) => (
	<div className="outer">
				<img src={src} />
		<div className="name">@{name.toLowerCase()}</div>
			<style jsx>{`
				.outer {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
				img {
					border-radius: 1000px;
					width: 70px;
					border: solid 5px white;
					box-shadow: ${colors.primaryLight} 0 0 0 8px;
				}

				.name {
					margin-top: 15px;
					font-family: ${fonts.m}
				}

				`}
			</style>

	</div>
)

export default FloatingUsers

