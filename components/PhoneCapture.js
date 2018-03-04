import PhoneNumberBar from './PhoneNumberBar'
import AppStoreDownload from './AppStoreDownload'

const PhoneCapture = ({splashtag}) => (
	<div className="phone-message">
		<PhoneNumberBar 
			splashtag={splashtag} />
		<div style={{marginTop: '30px'}}/>
		<AppStoreDownload />
		<style jsx>{`
		.phone-message {
			display: flex;
			align-items: center;
			flex-direction: column;
		}
		`}
	</style>
	</div> 
)

export default PhoneCapture