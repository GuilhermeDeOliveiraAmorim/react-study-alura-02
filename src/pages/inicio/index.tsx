import Menu from 'components/menu';
import cardapio from 'data/cardapio.json';
import StyleInicio from './Inicio.module.scss';
import StyleTema from 'styles/Tema.module.scss';

export default function Inicio() {
	let pratosRecomendados = [...cardapio];
	pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
	return (
		<section>
			<h3 className={StyleTema.titulo}>
				Recomendações
			</h3>
			<div className={StyleInicio.recomendados}>
				{pratosRecomendados.map(item => (
					<div key={item.id} className={StyleInicio.recomendado}>
						<div className={StyleInicio.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button className={StyleInicio.recomendado__botao}>
							Ver mais
						</button>
					</div>
				))}
			</div>
		</section>
	);
}