import StylesNotFound from './NotFound.module.scss'; 
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import StylesTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();
	return(
		<div className={classNames({
			[StylesNotFound.container]: true,
			[StylesTema.container]: true
		})}>
			<div className={StylesNotFound.voltar}>
				<button onClick={() => navigate(-1)}>
					{'< Voltar'}
				</button>
			</div>
			<NotFoundImage style={{height:'300px'}} />
		</div>
	);
}