import {useState, useEffect} from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    // Hook para que la funcion getGif() solo se ejecute una vez a pesar de haber cambios en el estado del componente
    useEffect(() => {
        getGif();
    }, [])

    const getGif = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=gOrIoBdvHeKsTQqOu8XnLe60FI4Q2Yx5';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs);
    }

    return (
        <div>
            <h3>{category}</h3>
            {
                images.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img}/>
                ))
            }
        </div>
    )
}

export default GifGrid;