import StyleCardapio from './Cardapio.module.scss';
import Buscador from './buscador';
import { useState } from 'react';
import Filtros from './filtros';
import Ordenador from './ordenador';
import Itens from './itens';
import React from 'react';
import Menu from 'components/menu';

export default function Cardapio() {

	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState('');
    
	return (
		<main>
			<Menu />
			<header className={StyleCardapio.header}>
				<div className={StyleCardapio.header__text}>
                    A casa da massa
				</div>
			</header>
			<section className={StyleCardapio.cardapio}>
				<h3 className={StyleCardapio.cardapio__titulo}>
                    Cardápio
				</h3>
				<Buscador busca={busca} setBusca={setBusca} />
				<div className={StyleCardapio.cardapio__filtros}>
					<Filtros filtro={filtro} setFiltro={setFiltro} />
					<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
				</div>
				<Itens busca={busca} filtro={filtro} ordenador={ordenador} />
			</section>
		</main>
	);
}