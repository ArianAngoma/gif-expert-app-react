import {useState} from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // Agregar elemento al array con useState
    /*const handleApp = () => {
        // setCategories([...categories, 'Anime']);
        setCategories(cats => [...cats, 'Anime']);
    }*/

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory/>

            <hr/>

            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </div>
    )
}

export default GifExpertApp;