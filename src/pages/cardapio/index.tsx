import StyleCardapio from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg'
import Buscador from './buscador';
import { useState } from 'react';
import Filtros from './filtros';

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
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
            <section className={StyleCardapio.cardapio}>
                <h3 className={StyleCardapio.cardapio__titulo}>
                    Cardápio
                </h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={StyleCardapio.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                </div>
            </section>
        </main>
    )
}