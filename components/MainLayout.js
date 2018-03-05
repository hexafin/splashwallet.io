import React from 'react'
import HeaderTags from './HeaderTags'
import Header from './Header'
import { colors, fonts } from '../lib/constants'

export default ({children}) => (
	<div>
		<HeaderTags/>
		<div className="outer-container">
		<Header />

			{children}
		</div>
		<style jsx global>{`
			body, input, button {
				font-family: ${fonts.r};
			  text-rendering: optimizeLegibility;
			  -webkit-font-smoothing: antialiased;
			  -moz-osx-font-smoothing: grayscale;
			  color: ${colors.dark};
			  transition: all 150ms ease;
			}

			body, html {
				margin: 0;
			}

			h1, h2, h3, h4, h5, h6 {
				font-family: ${fonts.b};
				font-weight: normal;
				font-style: normal;
			}

			div {
				font-weight: normal;
				font-style: normal;
			}

			//for waves-animation
			html {
				// background: #3B1BDB;
			}

			body {
				// background: white;
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

			.outer-container {
				max-width: 1100px;
				margin: 0 auto;
			}
			`}
		</style>
	</div>
)