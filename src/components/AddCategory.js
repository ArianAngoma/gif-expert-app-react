import {useState} from "react";
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    // Handle para poder cambiar el estado de inputValue
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // Previene el evento por default del formulario, en este caso que no recargue la página al enviar el formulario
        e.preventDefault();

        // Llamar la propiedad setCategories del componente padre GifExpertApp
        if (inputValue.trim().length > 2) {
            setCategories(cats => [...cats, inputValue]);

            // Limpiar el input al enviar el formulario
            setInputValue('');
        }
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

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;