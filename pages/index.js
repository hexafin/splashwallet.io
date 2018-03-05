import Layout from '../components/MainLayout'
import WaitlistSequence from '../components/WaitlistSequence'
import Waves from '../components/Waves'
import AddressToSplashtag from '../components/sections/AddressToSplashtag'
import FloatingUsers from '../components/sections/FloatingUsers'
import Footer from '../components/Footer'
import NamesLeft from '../components/sections/NamesLeft'
import CTA from '../components/sections/CTA'

export default () => (
	<Layout>
		<WaitlistSequence/>
		<Waves />
		<AddressToSplashtag />
		<FloatingUsers />
		<NamesLeft />
		<CTA />
		<Footer />
	</Layout>
)