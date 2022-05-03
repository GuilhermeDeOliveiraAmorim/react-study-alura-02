import { ReactComponent as Logo } from 'assets/logo.svg';
import StylesMenu from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
	const rotas = [
		{
			label: 'Início',
			to: '/'
		},
		{
			label: 'Cardápio',
			to: '/cardapio'
		},
		{
			label: 'Sobre',
			to: '/sobre'
		}
	];
	return (
		<nav className={StylesMenu.menu}>
			<Logo />
			<ul className={StylesMenu.menu__list}>
				{rotas.map((rota, index) => (
					<li key={index} className={StylesMenu.menu__link}>
						<Link to={rota.to}>
							{rota.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}