const Welcome = ({splashtag}) => (
	<div>
		Welcome, <br/> @{splashtag}
		<style jsx>{`
			div {
				font-size: 28px;
				font-weight: 500;
				text-align: center;
				margin-bottom: 20px;
				margin-top: 50px;
			}
			`}
		</style>
	</div>
)	


export default Welcome