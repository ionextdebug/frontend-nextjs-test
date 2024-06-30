import { useState, useEffect } from 'react';

type CounterProps = {
	initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
	const [count, setCount] = useState(initialCount);

	const onCounterMount = new CustomEvent("onCounterMount");
	const onCounterUnmount = new CustomEvent("onCounterUnmount");
	const onCounterUpdate = new CustomEvent("onCounterUpdate", {detail:{count}});

	useEffect(() => {
		
		//console.log('Componente montado!');
		window.dispatchEvent(onCounterMount);

		return () => {
			//console.log('Componente desmontado!');
			window.dispatchEvent(onCounterUnmount);
		};
	}, []);

	useEffect(() => {
		//console.log('Componente atualizado!');
		window.dispatchEvent(onCounterUpdate);
	});

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<h2>Contador: {count}</h2>
			<button onClick={handleIncrement}>Incrementar +</button>
		</div>
	);
};
