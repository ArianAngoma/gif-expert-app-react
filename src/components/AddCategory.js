import {useState} from "react";

const AddCategory = () => {
    const [inputValue, setInputValue] = useState('Hola Mundo');

    // Handle para poder cambiar el estado de inputValue
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // Previene el evento por default del formulario, en este caso que no recargue la página al enviar el formulario
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default AddCategory;