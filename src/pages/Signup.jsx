import tokensImg from '../assets/images/tokens.png';

const Signup = function () {

    return (
		<div className='flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-[#6fbef6] via-[#35a9ea] to-[#93cff9]'>
			<div className="flex flex-col items-center w-full my-auto">
				<p className='font-semibold'>Welcome Bonus</p>
				<p className='text-3xl font-bold mt-[5px]'>500 Tokens</p>
				<div className='mt-[81px]'>
					<img src={tokensImg} alt='tokens image' />
				</div>
				<p className='mt-[55px] text-[12px] px-2 text-center'>As a first-time user, you'll receive <span className='font-semibold'>500 Tokens</span> instantly upon signing up.</p>
				<p className='text-[12px] px-2 text-center'>Earn additional rewards every time you complete a task and unlock more opportunities along the way.</p>
				<a href='/home' className='w-[315px] h-[46px] font-semibold text-[13px] flex justify-center mt-[33px] items-center text-[#35a9ea] bg-[#f5f5f5] rounded-md'>Sign up</a>
			</div>
		</div>
    );
}

export default Signup;