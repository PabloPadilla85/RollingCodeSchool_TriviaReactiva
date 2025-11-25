import { useEffect, useState } from "react";
import Trivia from "./Trivia";


function SolicitarTrivia() {

    const url = "https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=multiple";

    const [trivias, setTrivias] = useState();

    const getPreguntas = async () => {
        try {
            const response = await fetch(url);
            const datos = await response.json();
            const resultados = { ...datos };
            return resultados;
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error al obtener las preguntas");
        }
    }

    useEffect(() => {
        getPreguntas().then((respuesta) => {
            setTrivias(respuesta.results);
        });
        getPreguntas().catch((error) => {
            console.log(error);
        });
    }, []);


    return <>
        {
            (trivias) ? ( <Trivia trivias={trivias} /> ) : ( null )
        }
    </>
}

export default SolicitarTrivia