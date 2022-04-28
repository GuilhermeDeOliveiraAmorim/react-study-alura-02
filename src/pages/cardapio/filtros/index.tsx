import React from 'react';
import filtros from './filtros.json';
import StyleFiltros from './Filtros.module.scss'

type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
  }

export default function Filtros({ filtro, setFiltro }: Props) {
    function selecionarFiltros(opcao: IOpcao) {
        return setFiltro(opcao.id);
    }
    return <div className={StyleFiltros.filtros}>
        {filtros.map((opcao) => (
            <button className={`${StyleFiltros.filtros__filtro} ${filtro === opcao.id ? StyleFiltros["filtros__filtro--ativo"] : ""}`} key={opcao.id} onClick={() => selecionarFiltros(opcao)}>
                {opcao.label}
            </button>
        ))}
    </div>
}