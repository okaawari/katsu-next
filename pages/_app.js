import Layout from '../src/components/Layout'
import '../styles/globals.css'
import Navbar from '../src/components/Nav'
import RightSideBar from '../src/components/sideBar'

function MyApp({ Component, pageProps }) {
  return (
      <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
        <RightSideBar />
        <div style={{width: '100%'}}>
          <Navbar />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </div> 
  )
}

export default MyApp
