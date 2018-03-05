import {colors, fonts} from '../../lib/constants'

const FloatingUsers = () => (
	<div>
		<Title/>
		<PoweredByLighting/>
		<FloatingUserBar />
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
				text-align: center;
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
					color: #ACACAC;
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
	<div className="floating-bar">
			<FloatingUser 
				style={{left: '-620px', top: '190px'}}
				src="./static/doji.png" 
				name="daniel"/>
			<FloatingUser 
				style={{left: '-480px', top: '40px'}}
				name="bryce"/>
			<FloatingUser 
				style={{left: '-320px', top: '160px'}}
				src="./static/jule.png" 
				name="jaden"/>
			<FloatingUser 
				style={{left: '-140px', top: '30px'}}
				src="./static/james.png" 
				name="tony"/>
			<FloatingUser 
				style={{left: '0px', top: '200px'}}
				src="./static/roland.png" 
				name="tyler"/>
			<FloatingUser 
				style={{left: '120px', top: '30px'}}
				name="jackie"/>
			<FloatingUser 
				style={{left: '260px', top: '180px'}}
				src="./static/me2.png" 
				name="guilio"/>
			<FloatingUser 
				style={{left: '350px', top: '50px'}}
				src="./static/jamie.png" 
				name="lukas"/>
			<FloatingUser 
				style={{left: '520px', top: '130px'}}
				src="./static/josi.png" 
				name="hayley"/>

		<style jsx>{`

			.floating-bar {
				width: 100%;
				position: relative;
				margin-bottom: 400px;
				margin-left: auto;
		    margin-right: auto;
		    width: 10px;
		    height: 10px;
		    margin-top: 100px;
			}

			.floating {
				position: relative;
				height: 150px;
			}

			.bar1 {
				// display: flex;
				// justify-content: space-between;
			}

			.bar2 {
				display: flex;
				justify-content: space-between;
			}
			`}
		</style>
	</div>
)

const FloatingUser = ({src, name, style}) => {
	let showDefault = false
	if (src == null) {
		showDefault = true
	}
		return (
			<div style={style} className="outer">
			<div className="halo">
				<div className="image" style={showDefault ? {background: 'white'} : {backgroundImage: `url(${src})`}}>
					{showDefault ? 
						<img className="image-drop" src="./static/drop.png"/>
						:
						<img className="image-smile" src="./static/smile.png"/>
					}
				</div>
			</div>
				<div className="name">@{name.toLowerCase()}</div>
					<style jsx>{`
						.outer {
							display: flex;
							justify-content: center;
							align-items: center;
							flex-direction: column;
							animation: float 4s ease-in-out infinite;
							width: 90px;
							position: absolute;
						}

						.halo {
							background: ${colors.primaryLight};
							padding: 10px;
							border-radius: 1000px;
						}

						.image {
							width: 60px;
					    height: 60px;
					    border: solid 5px white;
							border-radius: 1000px;
							display: flex;
					    justify-content: center;
					    align-items: center;
					    background-size: contain;
					    transition: all 150ms ease;
							box-shadow: rgba(56,56,56,0.17) 0 1px 20px;
						}

						.image:hover {
							transform: scale(1.05);
					    box-shadow: rgba(56, 56, 56, 0.19) 0 1px 20px;
						}

						.image-smile {
							width: 40px;
		   				margin-top: 40%;
						}

						.image-drop {
					    width: 30px;
					    margin-top: 4px;
						}

						.name {
							margin-top: 15px;
							font-family: ${fonts.m}
						}

						@keyframes float {
							0% {
								transform: translatey(0px);
							}
							50% {
								transform: translatey(-10px);
							}
							100% {
								transform: translatey(0px);
							}
						}


						`}
					</style>

			</div>

		)
}

export default FloatingUsers

