import { ReactComponent as Logo } from 'assets/logo.svg';
import StylesMenu from './Menu.module.scss';

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
						<a href={rota.to}>
							{rota.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}