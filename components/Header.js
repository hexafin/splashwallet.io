import Link from 'next/link'
import Logo from './Logo'

const Header = () => (
	<div>
		<Logo />
		<a href="https://medium.com/splash-wallet">Learn more</a>
		<style jsx>{`
			div {
				display: flex;
				justify-content: space-between;
				margin: 0 auto;
				align-items: center;
			}
			`}
		</style>
	</div>
)

export default Header