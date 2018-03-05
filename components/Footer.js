import Logo from './Logo'
import { colors } from '../lib/constants'

export default () => (
	<div className="outer">
		<div className="boxes">
		<div className="address">
			<Logo />
			<div className="address-content">1085 Harrison Street<br/>
			San Francisco, CA</div>
		</div>
		<div className="row">
			<a target="_blank" href="">Angelist</a>
			<a target="_blank" href="">Twitter</a>
			<a target="_blank" href="">Telegram</a>
		</div>
		<div className="row">
			<a target="_blank" href="">Press</a>
			<a target="_blank" href="">Contact</a>
		</div>
		<div className="row">
			<a target="_blank" href="">Privacy</a>
			<a target="_blank" href="">Terms</a>
		</div>
	</div>
		<div className="copyright">Copyright 2018 - Hexa Financial Group Inc.</div>
		<style jsx>{`

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
				margin-top: -18px;
			}

			.address-content {
				line-height: 30px;
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