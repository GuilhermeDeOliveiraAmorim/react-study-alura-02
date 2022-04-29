import Item from './item'
import itens from './itens.json'

export default function Itens() {
    return (
        <div>
            {itens.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}