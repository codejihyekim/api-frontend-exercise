import React, { useState } from "react";
import { memberBmi } from "../api";
import Layout from "../containers/Layout";
export default function Bmi(){
    const [inpust, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {name, height, weight} = inpust;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inpust, [name]:value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name, height, weight}
        memberBmi(bmiRequest)
        .then(res => {
            setResult(res.data)
        })
        .catch(err => console.log(`에러발생: ${err}`))
    }

    return (<Layout>
        <form>
        <h1>BMI 폼</h1>
        <div>
            <label><b>name</b></label>
            <input name="name" onChange={handleChange}/><br/>
            <label><b>height</b></label>
            <input name="height" onChange={handleChange}/><br/>
            <label><b>weight</b></label>
            <input name="weight" onChange={handleChange}/><br/>
            <button onClick={handleClick}>BMI 체크</button>
        </div>
        </form>
        <div>결과: {result} </div>
        </Layout>)
}