import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <h1 className={classes.logo}>JBL Lovers</h1>
            <section>
                <button>Auriculares</button>
                <button>Parlantes</button>
                <button>Barras de Sonido</button>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default NavBar