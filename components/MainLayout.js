import React from 'react'
import HeaderTags from './HeaderTags'
import Header from './Header'
import { colors } from '../lib/constants'

export default ({children}) => (
	<div>
		<HeaderTags/>
		<div className="container">
		<Header />

			{children}
		</div>
		<style jsx global>{`
			body, input, button {
				font-family: proxima-soft, sans-serif;
			  text-rendering: optimizeLegibility;
			  -webkit-font-smoothing: antialiased;
			  -moz-osx-font-smoothing: grayscale;
			  color: ${colors.dark};
			  transition: all 150ms ease;
			}

			body, html {
				margin: 0;
			}

			//for waves-animation
			html {
				background: #3B1BDB;
			}

			body {
				background: white;
			}

			a {
				text-decoration: none;
				color: ${colors.darkGrey};
				transition: all 150ms ease;
			}

			a:hover {
				color: ${colors.primary};
			}

			body {
				padding: 0 20px;
			}

			.container {
				max-width: 1100px;
				margin: 0 auto;
			}
			`}
		</style>
	</div>
)