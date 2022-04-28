import StyleCardapio from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg'

export default function Cardapio() {
    return (
        <main>
            <nav className={StyleCardapio.menu}>
                <Logo /> Aluroni
            </nav>
            <header className={StyleCardapio.header}>
                <div className={StyleCardapio.header__text}>
                    A casa da massa do código
                </div>
            </header>
        </main>
    )
}