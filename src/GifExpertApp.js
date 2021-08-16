import {useState} from "react";

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleApp = () => {
        // setCategories([...categories, 'Anime']);
        setCategories(cats => [...cats, 'Anime']);
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={handleApp}>Agregar</button>

            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </div>
    )
}

export default GifExpertApp;