import tokensImg from '../assets/images/tokens.png';

const Signup = function () {

    return (
		<div className="flex flex-col justify-between w-full h-screen p-5 px-10 bg-gradient-to-b from-blue-400 to-blue-300">
			<div className="text-center">
				<p className="mt-10 text-sm">Welcome Bonus</p>
				<p className="text-3xl font-bold">500 Tokens</p>
				<div className='mt-20'>
					<img src={tokensImg} alt="tokens image" />
				</div>
				<p className='mt-5 text-[8px]'>As a first-time user, you'll receive <span>500 Tokens</span> instantly upon signing up.</p>
                <p className='text-[8px]'>Earn additional rewards every time you complete a task and unlock more opportunities along the way.</p>
			</div>
			<a href='home' className='w-full p-2 mb-20 font-bold text-center text-blue-300 bg-white rounded-md'>Sign up</a>
		</div>
    );
}

export default Signup;