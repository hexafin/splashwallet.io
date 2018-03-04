const AppStoreDownload = () => (
	<div>
		<a href="" target="_blank">
			<img src="./static/appstore.png"/>
		</a>
		<style jsx>{`
			img {
				width: 200px;
				transition: all 150ms ease;
				box-shadow: rgba(63,63,63,0.08) 0 6px 14px 0;
			}

			img:hover {
				transform: scale(1.02)
			}
			`}
		</style>
	</div>
)

export default AppStoreDownload