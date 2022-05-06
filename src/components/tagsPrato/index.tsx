import StyleTagsPrato from './TagsPrato.module.scss';
import classNames from 'classnames';
import { Prato } from 'types/Prato';

export default function TagsPrato({
	category,
	serving,
	size,
	price
}: Prato) {
	return (
		<div className={StyleTagsPrato.tags__tags}>
			<div
				className={classNames({
					[StyleTagsPrato.tags__tipo]: true,
					[StyleTagsPrato[
						`tags__tipo__${category.label.toLowerCase()}`
					]]: true,
				})}
			>
				{category.label}
			</div>
			<div className={StyleTagsPrato.tags__qtdpessoas}>{size}g</div>
			<div className={StyleTagsPrato.tags__porcao}>
                Serve até {serving} pessoa{serving === 1 ? '' : 's'}
			</div>
			<div className={StyleTagsPrato.tags__valor}>
                R$ {price.toFixed(2)}
			</div>
		</div>
	);
}