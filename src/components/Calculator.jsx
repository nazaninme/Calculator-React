import React from 'react'
import { useState } from 'react'


export default function Calculator() {
    const [number,setNumber]=useState('')
    
    function handleClick(e){
        setNumber(number.concat(e.target.value))
    }
    
    function handleClear(){
        setNumber('');
    }
    function handleSlice(e){
        setNumber(number.slice(0,-1))
    }

 

    function handleAnswer(){
        try{
            setNumber(eval(number).toString())
        }
        catch(error){
            setNumber('error')
        }
    }
  return (
    <section>
        <div className='bg-gray-900 w-96 h-screen mx-auto rounded-lg overflow-hidden mt-12'>
            <div className='text-gray-200 w-full text-2xl h-16 flex items-center justify-center'>
                <p>CALCULATOR</p>

            </div>
            <div className='w-full h-20 '>
                <input type="text" value={number} placeholder='0' className='w-full h-full border border-white bg-gray-900 text-3xl text-right pr-5 text-white' />
            </div>
            <div className='grid grid-cols-4 gap-2 mt-8 mx-5'>
                <button value="AC" onClick={handleClear} className='text-black w-20 h-20 bg-gray-400 rounded-full text-2xl flex justify-center items-center shadow'>AC</button>
                <button value="C" onClick={handleSlice} className='text-black w-20 h-20 bg-gray-400 rounded-full text-2xl flex justify-center items-center shadow'>C</button>
                <button value="/" onClick={handleClick} className='text-black w-20 h-20 bg-gray-400 rounded-full text-2xl flex justify-center items-center shadow'>/</button>
                <button value="+" onClick={handleClick} className='text-black w-20 h-42 bg-gray-400 rounded-full text-2xl flex justify-center items-center shadow row-span-2 '>+</button>

                <button value="9" onClick={handleClick}  className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>9</button>
                <button value="8" onClick={handleClick} className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>8</button>
                <button value="7" onClick={handleClick} className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>7</button>
                <button value="4" onClick={handleClick} className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>4</button>

                <button value="5" onClick={handleClick} className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>5</button>
                <button value="6" onClick={handleClick} className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>6</button>
                <button value="-" onClick={handleClick} className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>-</button>
                

                <button value="1" onClick={handleClick} className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>1</button>
                <button value="2" onClick={handleClick} className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>2</button>
                <button value="3" onClick={handleClick} className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>3</button>
                <button value="*" onClick={handleClick} className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>*</button>

                <button value="." onClick={handleClick} className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>.</button>
                <button value="0" onClick={handleClick} className='text-white w-20 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow'>0</button>
                <button onClick={handleAnswer} className='text-white w-42 h-20 bg-orange-600 rounded-full text-2xl flex justify-center items-center shadow col-span-2'>=</button>
                
            </div>
            

        </div>
    </section>
  )
}
