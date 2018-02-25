import { colors } from '../lib/constants'

const Button = ({children, disabled, onClick, width}) => {
	let classes = []
	if (disabled) {classes.push('disabled')}
	return (
	<button className={classes.join(' ')} onClick={onClick}>{children}

		<style jsx>{`
			button {
				margin: 0;
				margin-left: 12px;
				top: -2px;	
				font-size: 18px;		
				padding: 18px 25px;	
				background: ${colors.primary};
				color: white;	
				border-radius: 4px;
				border: none;
				width: 185px;
				font-weight: 700;
				box-shadow: rgba(63,63,63,0.08) 0 6px 14px 0;
				transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
			}

			button:focus {
				outline: 0;
			}

			button:hover {
				background: ${colors.primaryHover};
				color: white;
				cursor: pointer;
				transform: scale(1.02);
			}

			.disabled {
				background: #E4E3E5;
			}


			`}
		</style>

	</button>
	)
}

export default Button