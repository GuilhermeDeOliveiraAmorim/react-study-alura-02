import StyleOrdenador from './Ordenador.module.scss'
import opcoes from './opcoes.json';

export default function Ordenador() {
    return (
        <button className={StyleOrdenador.ordenador}>
            <span>
                Ordenar Por
            </span>
            <div>
                {opcoes.map(opcao => (
                    <div className={StyleOrdenador.ordenador__option} key={opcao.value}>
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    )    
}