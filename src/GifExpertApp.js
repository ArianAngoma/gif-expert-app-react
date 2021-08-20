import {useState} from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({defaultCategories = ['One Punch']}) => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(defaultCategories);

    // Agregar elemento al array con useState
    /*const handleApp = () => {
        // setCategories([...categories, 'Anime']);
        setCategories(cats => [...cats, 'Anime']);
    }*/

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>

            <hr/>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp;