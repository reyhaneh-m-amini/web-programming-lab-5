import Card from './Card'

function Product({ title, price }) {
  return (
    <Card>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
    </Card>
  )
}

export default Product
