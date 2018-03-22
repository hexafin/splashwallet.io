import Link from "next/link"
import Logo from "./Logo"

const Header = () => (
	<div>
		<Logo />
		<a href="https://medium.com/splash-wallet/splash-lets-make-using-crypto-easy-25303b456a6b">
			Learn more
		</a>
		<style jsx>
			{`
				div {
					display: flex;
					justify-content: space-between;
					margin: 12px auto 0;
					align-items: center;
				}
			`}
		</style>
	</div>
)

export default Header
