import Product from "./Product"

export const ProductList = (props) => {
    const {products,onProductDelete} = props
    return <ul className="store-front">
    {products.map((product) => 
    (<li key={product.id}>
    <Product details={product}/>
    <button onClick={()=> onProductDelete(product.id)}>Delete</button>
    </li>))}
</ul>
}