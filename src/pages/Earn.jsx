import rocketImg from '../assets/images/rocket.png';
import Footer from '../components/Footer';
import arrowLeftImg from '../assets/images/arrow_left.png';
import settingImg from '../assets/images/setting.png';
import pocketTitleImg from '../assets/images/pocket_title.png';
import calendarImg from '../assets/images/calendar.png';
import twitterImg from '../assets/images/twitter.png';
import walletImg from '../assets/images/wallet.png';
import telegramImg from '../assets/images/telegram.png';

const Earn = function () {
    return (
        <div className='flex flex-col w-full min-h-screen bg-gradient-to-b from-[#6fbef6] via-[#35a9ea] to-[#93cff9]'>
            <div className='flex items-center justify-between w-full mt-[58px] px-[20px]'>
                <a className='flex items-center'>
                    <img src={arrowLeftImg} className='mr-[8px]' alt='arrow left image' />
                    <div>Back</div>
                </a>
                <img src={pocketTitleImg} className='' alt='pocket title image' />
                <a href=''>
                    <img src={settingImg} className='w-[22px] h-[22px]' alt='setting image' />
                </a>
            </div>
            <div className='flex items-center justify-end mt-2 ml-[32px]'>
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
                            <img src={calendarImg} className='w-[20px] h-[20px]' alt='calendar image' />
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
                            <img src={twitterImg} className='w-[20px] h-[20px]' alt='twitter image' />
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
                            <img src={walletImg} className='w-[20px] h-[20px]' alt='wallet image' />
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
                            <img src={telegramImg} className='w-[20px] h-[20px]' alt='telegram image' />
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
                            <img src={twitterImg} className='w-[20px] h-[20px]' alt='twitter image' />
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