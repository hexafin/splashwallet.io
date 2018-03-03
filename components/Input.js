import { colors } from '../lib/constants'
import Checkmark from './Checkmark'

const Input = ({isValid, showCheckmark, value, placeholder, handleChange}) => (
	<div className="input-bar">
		<input 
		onChange={handleChange}
		value={value}
		type="text"
		placeholder={placeholder}></input>
		 {showCheckmark && <Checkmark />}
		<style jsx>{`
			input {
				width: 220px;
				font-size: 18px;
				padding: 18px 20px;
				color: ${!isValid ? '#ff3366' : colors.dark};
				font-weight: 500;
				border: none;
				box-shadow: rgba(63,63,63,0.09) 0 6px 34px 0;
				border-radius: 4px;
				-webkit-appearance: none;
				-webkit-tap-highlight-color: rgba(0,0,0,0);
			}

			@media (max-width: 550px) {
				input {
					width: calc(100% - 40px);
				}
				.input-bar {
					width: 100%;
				}
			}

			.input-bar {
				position: relative;
			}

			input::placeholder {
				color: ${colors.grey};
			}
			
			input:focus {
				outline: 0;
			}
			`}
		</style>
	</div>

)

export default Input