import React, {useState} from "react"
import { memberCalc } from "../api";
import Layout from "../containers/Layout"
export default function Calc(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {num1, num2, opcode} = inputs;

    const handleChange = (e) =>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberCalc({num1, num2, opcode})
        .then(res => setResult(res.data))
        .catch(err => console.log(`에러발생 : ${err}`))
    }
    return (<Layout>
        <form>
        <h1>Calc 폼</h1>
        <div>
            <label><b>number1</b></label>
            <input name="num1" onChange={handleChange}/><br/>
            <label><b>opcode</b></label>
            <select name="opcode" onChange={handleChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select>
            <br/>
            <label><b>number2</b></label>
            <input name="num2" onChange={handleChange}/>
            <button onClick={handleClick}>전송</button>
        </div>
        </form>
        <div>결과: {result} </div>
        </Layout>)
}