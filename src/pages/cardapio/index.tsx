import StyleCardapio from './Cardapio.module.scss';
import Buscador from './buscador';
import { useState } from 'react';
import Filtros from './filtros';
import Ordenador from './ordenador';
import Itens from './itens';
import React from 'react';
import StyleTema from 'styles/Tema.module.scss';

export default function Cardapio() {

	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState('');
    
	return (
		<>
			<section className={StyleCardapio.cardapio}>
				<h3 className={StyleTema.titulo}>
                    Cardápio
				</h3>
				<Buscador busca={busca} setBusca={setBusca} />
				<div className={StyleCardapio.cardapio__filtros}>
					<Filtros filtro={filtro} setFiltro={setFiltro} />
					<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
				</div>
				<Itens busca={busca} filtro={filtro} ordenador={ordenador} />
			</section>
		</>
	);
}