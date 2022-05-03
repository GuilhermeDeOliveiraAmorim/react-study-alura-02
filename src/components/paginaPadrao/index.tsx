import { Outlet } from 'react-router-dom';
import StylePaginaPadrao from './PaginaPadrao.module.scss';
import StyleTema from 'styles/Tema.module.scss';

export default function PaginaPadrao() {
	return (
		<>
			<header className={StylePaginaPadrao.header}>
				<div className={StylePaginaPadrao.header__text}>
                    A casa da massa
				</div>
			</header>
			<div className={StyleTema.container}>
				<Outlet />
			</div>
		</>
	);
}
