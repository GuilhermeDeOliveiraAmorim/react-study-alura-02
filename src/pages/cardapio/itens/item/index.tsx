import logo from "assets/logo.svg";
import StyleItem from "./Item.module.scss";

export default function Item() {
    return (
        <div className={StyleItem.item}>
            <div className={StyleItem.item__imagem}>
                <img src={logo} alt="imagem" />
            </div>
            <div className={StyleItem.item__descricao}>
                <div className={StyleItem.item__titulo}>
                    <h2>
                        Comida
                    </h2>
                    <p>
                        Descrição
                    </p>
                </div>
                <div className={StyleItem.item__tags}>
                    <div className={StyleItem.item__tipo}>
                        Tipo
                    </div>
                    <div className={StyleItem.item__qtdpessoas}>
                        400g
                    </div>
                    <div className={StyleItem.item__valor}>
                        R$ Valor
                    </div>
                </div>
            </div>
        </div>
    )
}