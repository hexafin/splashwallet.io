import Layout from '../components/MainLayout'
import WaitlistSequence from '../components/WaitlistSequence'
import Waves from '../components/Waves'
import AddressToSplashtag from '../components/sections/AddressToSplashtag'
import FloatingUsers from '../components/sections/FloatingUsers'

export default () => (
	<Layout>
		<WaitlistSequence/>
		<Waves />
		<AddressToSplashtag />
		<FloatingUsers />
	</Layout>
)