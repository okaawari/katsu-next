import headerStyles from '../styles/Header.module.css'

const Header = () => {
    
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>Ipsum aute ex labore est aliqua incididunt nulla ex ex et dolore non do.</p>
        </div>
    )
}

export default Header