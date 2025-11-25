function Pregunta({ question }) {

    return <>

        <div>
            <p className="fs-4 fw-bold">{ question.question }</p>
        </div>

        <div className="form-check">

            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" checked></input>
                <label className="form-check-label" for="radioDefault1">{ question.correct_answer }</label>

        </div>

        <div className="form-check">

            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" ></input>
                <label className="form-check-label" for="radioDefault2">{ question.incorrect_answers[0] }</label>

        </div>

        <div className="form-check">
            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault3" ></input>
                <label className="form-check-label" for="radioDefault3">{ question.incorrect_answers[1] }</label>

        </div>

        <div className="form-check">

            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault4" ></input>
                <label className="form-check-label" for="radioDefault4">{ question.incorrect_answers[2] }</label>

        </div>

    </>
}

export default Pregunta;