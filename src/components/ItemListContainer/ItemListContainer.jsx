
const categorias = ['Pantalones', 'Poleras', 'Polerones', 'Shorts', 'Gorras']

function ItemListContainer({greetings}) {
    //console.log(categorias)
  return (
    <>
    <h2>{greetings}</h2>
    <ul className="list-group">
    {categorias.map((category, index) =>
        (<li className="list-group-item" key={index}>{category}</li>)
    )}
    </ul>
    </>
  )
}

export default ItemListContainer