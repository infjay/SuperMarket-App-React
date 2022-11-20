import { useContext } from "react"
import { AppContext } from "./AppContext"

export const AddProductForm = (props) => {
    const app = useContext(AppContext)
    const {onFormSubmit,name,onNameChange,description,onDescriptionChange,validation} = props
    return <form onSubmit={onFormSubmit} className={app.theme==="dark" ? "dark" :""}>
    <div>
        <label htmlFor="name">Name :</label>
        <input id="name" value={name} onChange={onNameChange}
        type="text" placeholder="Enter the name" className="textfield" />
    </div>
    <div>
        <label htmlFor="description">Description :</label>
        <input id="description" value={description} onChange={onDescriptionChange} placeholder="Enter the description" className="textfield" />
    </div>
    <div className="form-footer">
        <div className="validation-message">{validation}</div>
        <input type="submit" className="btn btn-primary" value="Add product" />
    </div>
</form>
}