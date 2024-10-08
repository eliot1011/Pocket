import rocketImg from '../assets/images/rocket.png';
import Footer from '../components/Footer';
import { ReactSVG } from 'react-svg';

const Earn = function () {
    return (
        <div className='flex flex-col w-full pb-[100px] min-h-screen bg-gradient-to-b from-[#6fbef6] via-[#35a9ea] to-[#93cff9]'>
            <div className='flex items-center justify-end mt-20 ml-[32px]'>
                <div className='absolute left-[32px]'>
                    <p className='text-[32px] font-bold break-keep'>Earn more coins</p>
                    <p className='text-[10px]'>Make our tasks to get more coins</p>
                </div>
                <img src={rocketImg} alt='rocket image' />
            </div>
            <div className='mt-[6px] mx-[32px]'>
                <div className='text-[19px] font-bold'>Daily Task</div>
                <div className='flex items-center justify-between py-3 border-b'>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center w-[43px] h-[43px] bg-white border rounded-lg bg-opacity-10'>
                            <ReactSVG src='./imgs/calendar.svg' />
                        </div>
                        <div>
                            <div className='text-[8px] text-white text-opacity-[57%]'>500 Tokens</div>
                            <div className='text-xs'>Daily Reward</div>
                            <div className='text-[8px] text-[#2568ef]'>Get reward &gt;</div>
                        </div>
                    </div>
                    <button className='w-[85px] h-[31px] text-[10px] bg-[#93cff9] rounded-lg'>Redeem</button>
                </div>
                <div className='flex items-center justify-between py-3 border-b'>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center w-[43px] h-[43px] bg-white border rounded-lg bg-opacity-10'>
                            <ReactSVG src='./imgs/twitter.svg' />
                        </div>
                        <div>
                            <div className='text-[8px] text-white text-opacity-[57%]'>250 Tokens</div>
                            <div className='text-xs'>Retweet our post</div>
                            <div className='text-[8px] text-[#2568ef]'>Get reward &gt;</div>
                        </div>
                    </div>
                    <button className='w-[85px] h-[31px] bg-white text-[10px] text-[#35a9ea] rounded-lg'>Redeem</button>
                </div>
            </div>
            <div className='mt-[44px] mx-[32px]'>
                <div className='text-[19px] font-bold'>Task List</div>
                <div className='flex items-center justify-between py-3 border-b'>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center w-[43px] h-[43px] bg-white border rounded-lg bg-opacity-10'>
                            <ReactSVG src='./imgs/wallet.svg' />
                        </div>
                        <div>
                            <div className='text-[8px] text-white text-opacity-[57%]'>1000 Tokens</div>
                            <div className='text-xs'>Wallet connect</div>
                            <div className='text-[8px] text-[#2568ef]'>Get reward &gt;</div>
                        </div>
                    </div>
                    <button className='w-[85px] h-[31px] text-[10px] bg-[#93cff9] rounded-lg'>Redeem</button>
                </div>
                <div className='flex items-center justify-between py-3 border-b'>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center w-[43px] h-[43px] bg-white border rounded-lg bg-opacity-10'>
                            <ReactSVG src='./imgs/telegram.svg' />
                        </div>
                        <div>
                            <div className='text-[8px] text-white text-opacity-[57%]'>300 Tokens</div>
                            <div className='text-xs'>Join our TG channel</div>
                            <div className='text-[8px] text-[#2568ef]'>Get reward &gt;</div>
                        </div>
                    </div>
                    <button className='w-[85px] h-[31px] bg-white text-[10px] text-[#35a9ea] rounded-lg'>Redeem</button>
                </div>
                <div className='flex items-center justify-between py-3 border-b'>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center w-[43px] h-[43px] bg-white border rounded-lg bg-opacity-10'>
                            <ReactSVG src='./imgs/twitter.svg' />
                        </div>
                        <div>
                            <div className='text-[8px] text-white text-opacity-[57%]'>300 Tokens</div>
                            <div className='text-xs'>Follow our X account</div>
                            <div className='text-[8px] text-[#2568ef]'>Get reward &gt;</div>
                        </div>
                    </div>
                    <button className='w-[85px] h-[31px] text-[10px] bg-[#93cff9] rounded-lg'>Redeem</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Earn;