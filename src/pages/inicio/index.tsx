import cardapio from 'data/cardapio.json';
import StyleInicio from './Inicio.module.scss';
import StyleTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

export default function Inicio() {
	let pratosRecomendados = [...cardapio];
	pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
	const navigate = useNavigate();
	function redirecionarParaDetalhes(prato: typeof cardapio[0]) {
		navigate(`/prato/${prato.id}`, { state: { ...prato } });
	}
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
						<button
							className={StyleInicio.recomendado__botao}
							onClick={() => redirecionarParaDetalhes(item)}
						>
							Ver mais
						</button>
					</div>
				))}
			</div>
			<h3>
				Nossa casa
			</h3>
			<div className={StyleInicio.nossaCasa}>
				<img src={nossaCasa} alt="Casa do aluroni" />
				<div className={StyleInicio.nossaCasa__endereco}>
					Rua Vergueiro, 3185 <br /><br /> Vila Mariana - SP
				</div>
			</div>
		</section>
	);
}