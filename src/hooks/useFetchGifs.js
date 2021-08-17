import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Hook para que la funcion getGif() solo se ejecute una vez a pesar de haber cambios en el estado del componente
    useEffect(() => {
        getGifs(category).then(images => {
            setState({
                data: images,
                loading: false
            })
        });
    }, [category]);

    return state; // {data: [], loading: true}
}