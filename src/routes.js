import Menu from 'components/menu';
import Cardapio from 'pages/cardapio';
import Inicio from 'pages/inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyleRoutes from './Routes.module.scss';

export default function AppRouter() {
	return (
		<main>
			<Router>
				<Menu />
				<header className={StyleRoutes.header}>
					<div className={StyleRoutes.header__text}>
                        A casa da massa
					</div>
				</header>
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/cardapio" element={<Cardapio />} />
				</Routes>
			</Router>
		</main>
	);
}
