export const AddProductForm = (props) => {

    return <form onSubmit={props.onFormSubmit}>
    <div>
        <label htmlFor="name">Name :</label>
        <input id="name" value={props.name} onChange={props.onNameChange}
        type="text" placeholder="Enter the name" className="textfield" />
    </div>
    <div>
        <label htmlFor="description">Description :</label>
        <input id="description" value={props.description} onChange={props.onDescriptionChange} placeholder="Enter the description" className="textfield" />
    </div>
    <div className="form-footer">
        <div className="validation-message">{props.validation}</div>
        <input type="submit" className="btn btn-primary" value="Add product" />
    </div>
</form>
}