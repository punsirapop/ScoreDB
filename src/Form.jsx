import './Form.css'
import React, {useEffect, useState} from 'react'
import Records from './sample-data.json'
import DisplayData from './Table'

function Form(){

    const [fn, setFn] = useState([])
    const [ln, setLn] = useState([])
    const [g, setG] = useState([])
    const [s, setS] = useState([])

    const [fnError, setFnE] = useState([])
    const [lnError, setLnE] = useState([])
    const [gError, setGE] = useState([])
    const [sError, setSE] = useState([])

    let isFailedSubmitted = false

    function HandleChange(event){
        switch (event.target.id) {
            case 'fn':
                setFn(event.target.value)
                break;
            case 'ln':
                setLn(event.target.value)
                break;
            case 'g':
                setG(event.target.value)
                break;
            case 's':
                setS(event.target.value)
                break;
            default:
                break;
        }
        console.log("Check " + isFailedSubmitted)
        if (isFailedSubmitted) Validate(event.target.id)
    }

    async function HandleSubmit(event) {
        event.preventDefault()
        let isPassed = await Validate("")
        if (isPassed){
            let addMe = {
                "id": Records.length + 1,
                "firstname": fn,
                "lastname": ln,
                "gender": g,
                "score": s
            }
            Records.push(addMe)
            DisplayData()
            console.log("pushed " + Records.length)

            setFn("")
            setLn("")
            setG("")
            setS("")
            isFailedSubmitted = false
        }
        else{
            isFailedSubmitted = true
        }
    }

    function Validate(id){
        let isPassed = true
        console.log(id)
        switch (id) {
            case 'fn':
                if (fn == ""){
                    setFnE("First name is required")
                    isPassed = false
                }
                else
                    setFnE("")
                break;
            case 'ln':
                if (ln == ""){
                    setLnE("Last name is required")
                    isPassed = false
                }
                else
                    setLnE("")
                break;
            case 'g':
                if (g == ""){
                    setGE("Gender is required")
                    isPassed = false
                }
                else
                    setGE("")
                break;
            case 's':
                if (s == ""){
                    setSE("Score is required")
                    isPassed = false
                }
                else if (isNaN(s)){
                    setSE("Score must be a number")
                    isPassed = false
                }
                else if (s > 100){
                    setSE("Mximum is 100")
                    isPassed = falsea
                }
                else if (s < 0){
                    setSE("Minimum number is 0")
                    isPassed = false
                }
                else
                    setSE("")
                break;
            default:
                isPassed = Validate('fn')
                isPassed = Validate('ln')
                isPassed = Validate('g')
                isPassed = Validate('s')
                break;
        }
        console.log(isPassed)
        return isPassed;
    }

    return(
        <div className='Container'>

            <form>
                <div className='InputHolder'>
                    <label>First Name</label><br/>
                    <input className='Input' id='fn' value={fn} style={{width: "200px"}} onChange={HandleChange}></input>
                    <p className='Error'>{fnError}</p>
                </div>
                <div className='InputHolder'>
                    <label>Last Name</label><br/>
                    <input className='Input' id='ln' value={ln} style={{width: "200px"}} onChange={HandleChange}></input>
                    <p className='Error'>{lnError}</p>
                </div>
                <div className='InputHolder'>
                    <label>Gender</label><br/>
                    <select className='Input' id='g' value={g} style={{width: "200px"}} onChange={HandleChange}>
                        <option value={""}></option>
                        <option value={"M"}>Male</option>
                        <option value={"F"}>Female</option>
                        <option value={"U"}>Unknown</option>
                    </select>
                    <p className='Error'>{gError}</p>
                </div>
                <div className='InputHolder'>
                    <label>Score</label><br/>
                    <input type="number" className='Input' id='s' value={s} style={{width: "200px"}} onChange={HandleChange}></input>
                    <p className='Error'>{sError}</p>
                </div>
                <input type='submit' className='ConfirmButton' onClick={HandleSubmit}></input>
                <input type='reset' className='CancelButton'></input>
            </form>

        </div>
    )
}

export default Form
export {Records}