import { Outlet } from 'react-router-dom';
import StylePaginaPadrao from './PaginaPadrao.module.scss';

export default function PaginaPadrao() {
	return (
		<>
			<header className={StylePaginaPadrao.header}>
				<div className={StylePaginaPadrao.header__text}>
                    A casa da massa
				</div>
			</header>
			<div>
				<Outlet />
			</div>
		</>
	);
}
