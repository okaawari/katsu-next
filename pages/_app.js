import Layout from '../src/components/Layout'
import '../styles/globals.css'
import Navbar from '../src/components/Nav'
import RightSideBar from '../src/components/sideBar'

function MyApp({ Component, pageProps }) {
  return (
      <div className='flex flex-row w-full'>
        <RightSideBar />
        <div className='w-full'>
          <Navbar />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </div> 
  )
}

export default MyApp
