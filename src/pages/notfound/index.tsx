import StylesNotFound from './NotFound.module.scss'; 
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import StylesTema from 'styles/Tema.module.scss';

export default function NotFound() {
	return(
		<div className={classNames({
			[StylesNotFound.container]: true,
			[StylesTema.container]: true
		})}>
			<NotFoundImage />
		</div>
	);
}