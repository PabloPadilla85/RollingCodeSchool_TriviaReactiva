function Pregunta({ question, index }) {

    return <>
        <div>
            <p className="fs-4 fw-semibold">{question.question}</p>
        </div>
        <div className="bg-dark-subtle rounded p-2">

            <div className="form-check fs-6">

                <input className="form-check-input" type="radio" name={"radio" + index} id="radioDefault1"></input>
                <label className="form-check-label" for="radioDefault1">{question.correct_answer}</label>

            </div>

            <div className="form-check fs-6">

                <input className="form-check-input" type="radio" name={"radio" + index} id="radioDefault2" ></input>
                <label className="form-check-label" for="radioDefault2">{question.incorrect_answers[0]}</label>

            </div>

            <div className="form-check fs-6">
                <input className="form-check-input" type="radio" name={"radio" + index} id="radioDefault3" ></input>
                <label className="form-check-label" for="radioDefault3">{question.incorrect_answers[1]}</label>

            </div>

            <div className="form-check fs-6">

                <input className="form-check-input" type="radio" name={"radio" + index} id="radioDefault4" ></input>
                <label className="form-check-label" for="radioDefault4">{question.incorrect_answers[2]}</label>

            </div>
        </div>
    </>
}

export default Pregunta;