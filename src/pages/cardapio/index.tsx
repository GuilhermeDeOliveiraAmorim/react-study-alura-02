import StyleCardapio from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg'

export default function Cardapio() {
    return (
        <main>
            <nav className={StyleCardapio.menu}>
                <Logo />
            </nav>
        </main>
    )
}