import { colors, fonts } from '../../lib/constants'

const AddressToSplashtag = () => (
	<div className="outer">
		<h2>Let's turn long bitcoin addresses <br/> into <span>@splashtags</span></h2>
		<SplashtagDemo />
		<style jsx>{`

			.outer {
				margin-top: 280px;
				margin-bottom: 100px;
				text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			@media (max-width: 650px) {
				.outer {
					margin-top: 370px;
				}
			}

			@media (min-width: 1380px) {
				.outer {
					margin-top: 400px;
				}
			}
			h2 {
				font-size: 32px;
			}
			span {
				color: ${colors.primary};
			}
		`}
		</style>
	</div>

)

const SplashtagDemo = () => (
	<div className="box">
		<div>
		<div className="splashtag">@yourname</div>
		<div className="desc">Your splashtag</div>
		</div>
		<style jsx> {`

			.box {
				background: white;
				border-radius: 5px;
				box-shadow: rgba(63,63,63,0.09) 0 4px 24px -2px;
				width: 300px;
				height: 100px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 140px;
    		text-align: center;
			}
			.splashtag {
				color: ${colors.primary}
				font-family: ${fonts.b}
				font-size: 24px;
				margin-bottom: 10px;
				margin-top: -6px;
			}

			.desc {
				font-size: 18px;
			}

			`}
		</style>
	</div>
)
export default AddressToSplashtag