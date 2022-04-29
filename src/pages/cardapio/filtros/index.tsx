import React from 'react';
import filtros from './filtros.json';
import StyleFiltros from './Filtros.module.scss'
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
  }

export default function Filtros({ filtro, setFiltro }: Props) {
    function selecionarFiltros(opcao: IOpcao) {
        if (filtro === opcao.id) return setFiltro(null);
        return setFiltro(opcao.id);
    }
    return <div className={StyleFiltros.filtros}>
        {filtros.map((opcao) => (
            <button
             className={classNames({
                 [StyleFiltros.filtros__filtro]: true,
                 [StyleFiltros['filtros__filtro--ativo']]: filtro === opcao.id
             })} key={opcao.id} onClick={() => selecionarFiltros(opcao)}>
                {opcao.label}
            </button>
        ))}
    </div>
}