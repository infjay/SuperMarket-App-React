import React,{useState} from "react";
import { AddProductForm } from "./AddProductForm";
import { ProductList } from "./ProductList";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function StoreFront(){
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const [description,setDescription] = useState("")
    const [validation,setValidation] = useState("")
    const app = useContext(AppContext)

const handleFormSubmit= (event)=>{ 
    event.preventDefault()
    if(!name){
        setValidation("Please enter a name");
        return;
    }
    if(!description){
        setValidation("Please enter a description");
        return;
    }
    setProducts([...products,{id:products.length + 1,name:name, description:description}]);
    setName("");
    setDescription("");
}
function handleNameChange(event){
    setName(event.target.value)
}
function handleDescriptionChange(event){
    setDescription(event.target.value)
}

const handleProductDelete = (id) => {
    setProducts(products.filter(product => product.id !== id))
}

return <> 
    <p>Show Prices in {app.currency}</p>
    <AddProductForm name={name} description={description} validation={validation} onNameChange={handleNameChange} onDescriptionChange={handleDescriptionChange} onFormSubmit={handleFormSubmit} />
    <div>
        {products.length === 0 && <p>Add your first product</p>}
    </div>
    <ProductList products={products} onProductDelete={handleProductDelete} />
</>
}