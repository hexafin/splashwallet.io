import Logo from "./Logo"
import { colors } from "../lib/constants"

export default () => (
	<div className="outer">
		<div className="boxes">
			<div className="address">
				<Logo />
				<div className="address-content">
					254 Elm Street
					<br />
					New Haven, CT
				</div>
			</div>
			<div className="row">
				<a target="_blank" href="https://angel.co/hexa-financial-group">
					Angelist
				</a>
				<a target="_blank" href="https://twitter.com/splashwallet">
					Twitter
				</a>
				<a target="_blank" href="https://t.me/joinchat/EjQODwyF10VliZ4fQ0SL8Q">
					Telegram
				</a>
			</div>
			<div className="row">
				<a target="_blank" href="mailto:support@hexafinancial.com">
					Contact
				</a>
				<a target="_blank" href="/privacy">
					Privacy
				</a>
			</div>
		</div>
		<div className="copyright">Copyright 2018 - Hexa Financial Group Inc.</div>
		<style jsx>
			{`

			.outer {
		
			}

			.boxes {
				display: flex;
				justify-content: center;
				justify-content: space-between;
   			max-width: 730px;
    		margin: 0 auto 80px;
			}


			.row {
				display: flex;
				flex-direction: column;
				line-height: 30px;
			}

			@media (max-width: 650px) {
				.boxes {
					flex-direction: row;
					flex-wrap: wrap;
				}
				.row {
					width: 30%;
				}
			}


			.address {
				display: flex;
				flex-direction: column;
				margin-top: -16px;
			}

			.address-content {
				line-height: 28px;
				margin-top: -13px;
				color: ${colors.grey};
			}

			.copyright {
				text-align: center;
				color ${colors.grey};
				margin-bottom: 10px;
			}
			`}
		</style>
	</div>
)

// <div className="row">

// 	<a target="_blank" href="">
// 		Terms
// 	</a>
// </div>

// <a target="_blank" href="">
// 	Press kit
// </a>
