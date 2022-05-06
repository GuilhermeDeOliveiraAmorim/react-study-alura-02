import StylesPrato from './Prato.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/tagsPrato';

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
					<TagsPrato {...prato} />
				</div>
			</section>
		</>
	);
}