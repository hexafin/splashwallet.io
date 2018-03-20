import { colors, fonts } from "../../lib/constants"

const FloatingUsers = () => (
	<div>
		<Title />
		<PoweredByLightning />
		<FloatingUserBar />
		<style jsx>
			{`
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
		<style jsx>
			{`
				h2 {
					font-family: ${fonts.m};
					text-align: center;
				}
			`}
		</style>
	</div>
)

const PoweredByLightning = () => (
	<div className="outer">
		<img src="./static/PoweredByLighting.png" />
		<div className="desc">
			<div className="headline">
				Powered by <span>Lightning</span>
			</div>
			<div>
				Lightning allows <span>instant</span> and <span>less-than-1-cent</span>{" "}
				transactions
			</div>
		</div>
		<style jsx>
			{`
				.outer {
					display: flex;
					flex-direction: row;
				}
				.desc {
					color: #acacac;
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
			style={{ left: "-620px", top: "190px" }}
			group={1}
			src="./static/@charles.png"
			name="charles"
		/>
		<FloatingUser style={{ left: "-480px", top: "40px" }} name="bryce" />
		<FloatingUser
			style={{ left: "-320px", top: "160px" }}
			group={1}
			src="./static/@lea.png"
			name="lea"
		/>
		<FloatingUser
			style={{ left: "-160px", top: "30px" }}
			group={1}
			src="./static/@henrik.png"
			name="henrik"
		/>
		<FloatingUser
			style={{ left: "-10px", top: "200px" }}
			src="./static/@chiara.png"
			name="chiara"
		/>
		<FloatingUser
			group={1}
			style={{ left: "100px", top: "24px" }}
			name="jackie"
		/>
		<FloatingUser
			group={1}
			style={{ left: "260px", top: "180px" }}
			name="daniel"
		/>
		<FloatingUser
			style={{ left: "350px", top: "50px" }}
			src="./static/@matt.jpg"
			name="matt"
		/>
		<FloatingUser
			group={1}
			style={{ left: "520px", top: "130px" }}
			src="./static/@jack.png"
			name="jack"
		/>

		<style jsx>
			{`
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

const FloatingUser = ({ src, name, style, group }) => {
	let showDefault = false
	if (src == null) {
		showDefault = true
	}
	return (
		<div style={style} className={["outer", group && "floatDown"].join(" ")}>
			<div className="halo">
				<div
					className="image"
					style={
						showDefault
							? { background: "white" }
							: { backgroundImage: `url(${src})` }
					}
				>
					{showDefault ? (
						<img className="image-drop" src="./static/drop.png" />
					) : (
						<img className="image-smile" src="./static/smile.png" />
					)}
				</div>
			</div>
			<div className="name">@{name.toLowerCase()}</div>
			<style jsx>
				{`
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
						background-size: cover;
						transition: all 150ms ease;
						box-shadow: rgba(56, 56, 56, 0.17) 0 1px 20px;
					}

					.floatDown {
						animation: float 4s ease-in-out infinite;
						animation-delay: 2s;
					}

					.image:hover {
						transform: scale(1.05);
						box-shadow: rgba(56, 56, 56, 0.19) 0 1px 20px;
					}

					.image-smile {
						width: 40px;
						margin-top: 29%;
					}

					.image-drop {
						width: 30px;
						margin-top: 4px;
					}

					.name {
						margin-top: 15px;
						font-family: ${fonts.m};
					}

					@keyframes float {
						0% {
							transform: translatey(0px);
						}
						50% {
							transform: translatey(-6px);
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
