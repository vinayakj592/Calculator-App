import React, {useState} from 'react';

const btnStyle= "w-full m-2 py-2 text-xl font-semibold text-white bg-[#414361] rounded-lg"

function res(v){
	try{
		v = v.replace("÷","/");
		v = v.replace("×","*");
	}catch{}
	console.log(v);
	v = eval(v);
	v = Math.round(Number(v)*100)/100;
	return (v);
}

function roundoff2(v){
	v = Number(v);
	v = Math.round(v*100)/100;
	return String(v);
}

function App() {
	const [value, setValue] = useState('');
	return (
		<>
			<div>
				<h1 className='text-white text-3xl text-center mt-4 font-bold'>
					Calculator</h1>
			</div>
			<div className='mt-8 flex justify-center w-full'>
				<form action='' className='w-full sm:w-1/2 lg:w-1/4 p-6 rounded-lg bg-[#FFFFFF]/[0.10]'>
					<div className='calcidisplay w-full'>
						<input type='text' className='text-right pe-2 outline-0 ps-1 w-full mb-2 h-8 py-6 rounded-lg bg-[#2A2D43] text-white text-4xl' value={ value }/>
					</div>
					
					<div className='btnrow flex justify-evenly'>
						<input type='button' className={btnStyle} value="^2" onClick={e=>setValue(roundoff2(Math.pow(value,2)))}/>
						<input type='button' className={btnStyle} value="10^" onClick={e=>setValue(roundoff2(Math.pow(10,value)))}/>
						<input type='button' className={btnStyle} value="C" onClick={e=>setValue("")}/>
						<input type='button' className={btnStyle} value="⌫" onClick={e=>setValue(String(value).slice(0,-1))}/>
					</div>
					<div className='btnrow flex justify-evenly'>
						<input type='button' className={btnStyle} value="(" onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value=")" onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value="√" onClick={e=>setValue(roundoff2(Math.pow(value,0.5)))}/>
						<input type='button' className={btnStyle} value="÷" onClick={e=>setValue(value+e.target.value)}/>
					</div>
					<div className='btnrow flex justify-evenly'>
						<input type='button' className={btnStyle} value="7" onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value="8" onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value="9" onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value="×" onClick={e=>setValue(value+e.target.value)}/>
					</div>
					<div className='btnrow flex justify-evenly'>
						<input type='button' className={btnStyle} value="4" onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value="5" onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value="6" onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value="-" onClick={e=>setValue(value+e.target.value)}/>
					</div>
					<div className='btnrow flex justify-evenly'>
						<input type='button' className={btnStyle} value="1" onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value="2" onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value="3" onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value="+" onClick={e=>setValue(value+e.target.value)}/>
					</div>
					<div className='btnrow flex justify-evenly'>
						<input type='button' className={btnStyle} value="00" onClick={e=>setValue(String(Number(value)*100))}/>
						<input type='button' className={btnStyle} value="0" onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value="." onClick={e=>setValue(value+e.target.value)}/>
						<input type='button' className={btnStyle} value="=" onClick={e=>setValue(res(value))}/>
					</div>
				</form>
			</div>

		</>
	);
}

export default App;
