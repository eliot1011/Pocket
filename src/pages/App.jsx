import logo from '../assets/images/logo.png';
import pocketTitleImg from '../assets/images/pocket_title.png';

function App() {
	return (
		<div className='flex flex-col w-screen min-h-screen bg-gradient-to-b from-[#6fbef6] via-[#35a9ea] to-[#93cff9]'>
			<div className='flex flex-col justify-center items-center mt-[55px]'>
				<img src={pocketTitleImg} alt='pocket title image' className='w-[62px]' />
				<img src={logo} className='mt-20' alt='logo' />
			</div>
			<h1 className='mt-5 text-center text-[29px] font-extrabold'>POCKET</h1>
			<p className='mt-[6px] text-center'>your Gateway to Easy Rewards!</p>
			<a href='/signup' className='w-[315px] h-[46px] mx-auto font-semibold text-[13px] flex justify-center mt-[68px] items-center text-[#35a9ea] bg-[#f5f5f5] rounded-md'>Get Started</a>
		</div>
	);
}

export default App;
