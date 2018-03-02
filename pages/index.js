import Layout from '../components/MainLayout'
import { colors } from '../lib/constants'
import axios from 'axios'
import Button from '../components/Button'
import LoadingCircle from '../components/LoadingCircle'
import Waves from '../components/Waves'
import SplashTagBar from '../components/SplashTagBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default () => (
	<Layout>
		<Hero/>
		<SplashTagBar />
		<Waves />
		<Footer />
	</Layout>
)