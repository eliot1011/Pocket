import logo from '../assets/images/logo.png';

function App() {
	return (
		<div className="bg-gradient-to-b from-blue-400 to-blue-300 w-screen h-screen p-5 px-10 flex flex-col justify-between">
			<div className="text-center">
				<p className="text-sm">POCKET</p>
				<p className="text-xs">mini app</p>
				<div className='mt-10 flex justify-center'>
					<img src={logo} alt="logo" />
				</div>
				<div className='mt-5 font-bold text-2xl'>POCKET</div>
				<div className='mt-3'>your Gateway to Easy Rewards!</div>
			</div>
			<a href='/signup' className='w-full text-center p-2 text-blue-300 bg-white mb-20 rounded-md font-bold'>Get Started</a>
		</div>
	);
}

export default App;
