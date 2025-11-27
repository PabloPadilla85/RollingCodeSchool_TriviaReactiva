import Pregunta from "./Pregunta";

function Trivia({trivias}) {
    return <section className="d-flex flex-column gap-2 align-items-start w-75 my-3">
        {
            trivias.map( (question,index) => (
                <Pregunta question={question} index={index} key={index} />
            ) )
        }
    </section>
}

export default Trivia