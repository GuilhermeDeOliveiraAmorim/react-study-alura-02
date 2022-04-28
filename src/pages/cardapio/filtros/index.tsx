import filtros from './filtros.json';
import StyleFiltros from './Filtros.module.scss'

type IOpcao = typeof filtros[0];

export default function Filtros() {
    function selecionarFiltros(opcao: IOpcao) {}
    return <div className={StyleFiltros.filtros}>
        {filtros.map((opcao) => (
            <button className={StyleFiltros.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltros(opcao)}>
                {opcao.label}
            </button>
        ))}
    </div>
}