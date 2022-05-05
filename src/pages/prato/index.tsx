import StylesPrato from './Prato.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import cardapio from 'data/cardapio.json';

export default function Prato() {
	const { id } = useParams();
	const prato = cardapio.find(item => item.id === Number(id));
	if (!prato) {
		return '';
	}
	const navigate = useNavigate();
	return (
		<>
			<button className={StylesPrato.voltar} onClick={() => navigate(-1)}>
				{'< Voltar'}
			</button>
			<section className={StylesPrato.container}>
				<h1 className={StylesPrato.titulo}>
					{prato.title}
				</h1>
				<div>
					<img src={prato.photo} alt={prato.title} />
				</div>
				<div className={StylesPrato.conteudo}>
					<p className={StylesPrato.conteudo__descricao}>
						{prato.description}
					</p>
					<div className={StylesPrato.tags}>
						<div className={classNames({
							[StylesPrato.tags]: true,
							[StylesPrato[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true
						})}>
							{prato.category.label}
						</div>
						<div className={StylesPrato.tags__porcao}>
							{prato.size}g
						</div>
						<div className={StylesPrato.tags__qtdpessoas}>
							Serve {prato.serving} pessoa{prato.serving === 1 ? '' : 's'}
						</div>
						<div className={StylesPrato.tags__valor}>
							R$ {prato.price.toFixed(2)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}