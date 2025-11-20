import styles from './style/index.module.css'
import logo from '../../assets/images/logo.png'

export const Header = () => {
    return (
        <header>
            <img src = {logo} alt = '#'></img>
            <div className = {styles.group3476}>
                <p>8 800 555 80 80</p>
                <button>Заказать звонок </button>
            </div>
        </header>
    )

}