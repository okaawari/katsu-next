import Nav from './Nav'
import Meta from './Meta'
import Sidebar from './sideBar'

const Layout = ({ children }) => {
    return (
        <>
        <Meta />
        <>
            <main>
            {children}
            </main>
        </>
        </>
    )
}

export default Layout