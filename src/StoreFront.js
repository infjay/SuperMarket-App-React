import React,{useState} from "react";
import Product from "./Product";

export default function StoreFront(){
    const [products, setProducts] = useState([])
    const [name, setName] = useState()
    const [description,setDescription] = useState()


const handleFormSubmit= (event)=>{ 
    event.preventDefault()
    setProducts([...products,{id:products.length + 1,name:name, description:description}]);
    setName("");
    setDescription("");
}

const handleProductDelete = (id) => {
    setProducts(products.filter(product => product.id !== id))
}

return <> <form onSubmit={handleFormSubmit}>
        <div>
            <label htmlFor="name">Name :</label>
            <input id="name" value={name} onChange={e => setName(e.target.value)}
            type="text" placeholder="Enter the name" className="textfield" />
        </div>
        <div>
            <label htmlFor="description">Description :</label>
            <input id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter the description" className="textfield" />
        </div>
        <div className="form-footer">
            <div className="validation-message"></div>
            <input type="submit" className="btn btn-primary" value="Add product" />
        </div>
    </form>
    <div>
        {products.length === 0 && <p>Add your first product</p>}
    </div>
    <ul className="store-front">
        {products.map((product) => 
        (<li key={product.id}>
        <Product details={product}/>
        <button onClick={()=> handleProductDelete(product.id)}>Delete</button>
        </li>))}
    </ul>
</>
}