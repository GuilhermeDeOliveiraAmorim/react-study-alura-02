import React from 'react';
import StyleItem from './Item.module.scss';
import { Prato } from 'types/Prato';
import TagsPrato from 'components/tagsPrato';

export default function Item(props: Prato) {
	const { title, description, photo } = props;

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
				<TagsPrato {...props}  />
			</div>
		</div>
	);
}
