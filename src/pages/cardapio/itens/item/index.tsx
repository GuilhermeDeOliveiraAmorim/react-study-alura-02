import React from 'react';
import StyleItem from './Item.module.scss';
import cardapio from 'data/cardapio.json';
import classNames from 'classnames';

type Props = typeof cardapio[0];

export default function Item(props: Props) {
	const { title, description, category, size, serving, price, photo } = props;

	return (
		<div className={StyleItem.item}>
			<div className={StyleItem.item__imagem}>
				<img src={photo} alt={title} />
			</div>
			<div className={StyleItem.item__descricao}>
				<div className={StyleItem.item__titulo}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<div className={StyleItem.item__tags}>
					<div
						className={classNames({
							[StyleItem.item__tipo]: true,
							[StyleItem[
								`item__tipo__${category.label.toLowerCase()}`
							]]: true,
						})}
					>
						{category.label}
					</div>
					<div className={StyleItem.item__qtdpessoas}>{size}g</div>
					<div className={StyleItem.item__porcao}>
                        Serve até {serving} pessoa{serving === 1 ? '' : 's'}
					</div>
					<div className={StyleItem.item__valor}>
                        R$ {price.toFixed(2)}
					</div>
				</div>
			</div>
		</div>
	);
}
