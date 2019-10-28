import React, { Component,useState } from 'react';
import InputNumber from './InputNumber';

import "./App.css";

function App(){
    const [value,setValue] = useState('aaa')
    return (
        <div>
        <InputNumber value={value} onChange={e=>{}}/>
        <InputNumber defaultValue={value} onChange={e=>{}}/>
        </div>
    )
}
export default App;
