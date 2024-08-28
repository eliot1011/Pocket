import inviteImg from '../assets/images/invite.png';
import coinImg from '../assets/images/coin.png';
import tonImg from '../assets/images/ton.png';
import handMoneyImg from '../assets/images/handmoney.png';
import Footer from '../components/Footer';
import arrowLeftImg from '../assets/images/arrow_left.png';
import settingImg from '../assets/images/setting.png';
import pocketTitleImg from '../assets/images/pocket_title.png';
import linkImg from '../assets/images/link.png';

const Friends = function () {
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
            <div className='w-full'>
                <div className='relative z-10 flex justify-center'>
                    <img src={inviteImg} className='' alt='rocket image' />
                </div>
                <div className='pt-[50px] pb-[21px] mx-[61px] text-center -translate-y-[52px] bg-white bg-opacity-25 rounded-lg'>
                    <div className='text-[28px] font-semibold'>Invite friends</div>
                    <div className='text-[12px] mt-[4px] text-[#eef5f8]'>You and your friend will receive bonuses</div>
                </div>
            </div>
            <div className='w-full mt-[14px]'>
                <div className='mx-[30px] -mt-[44px] text-left'>Earned</div>
                <div className='mx-[30px] mt-[8px] py-2 grid justify-items-center grid-cols-2 bg-white bg-opacity-25 rounded-lg'>
                    <div className='flex items-center'>
                        <img src={coinImg} className='w-6 h-6 mr-[3px]' alt='coin image' />
                        <span className='font-bold'>0</span>
                    </div>
                    <div className='flex items-center'>
                        <img src={tonImg} className='w-6 h-6 mr-[3px]' alt='ton image' />
                        <span className='font-bold'>0</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-[13px] w-full mt-6 px-[47px]'>
                <button className='px-[48px] py-[12px] font-bold text-[#35a9ea] text-xs bg-white rounded-lg'>Invite a friend</button>
                <button className='flex items-center gap-3 px-5 py-3 text-xs bg-white bg-opacity-25 rounded-lg'><img src={linkImg} className='w-[22px] h-[22px]' alt='link image' />Copy</button>
            </div>
            <div className='w-full'>
                <div className='flex items-center gap-3 px-3 py-2 mx-[30px] mt-[29px] border rounded-lg'>
                    <img src={handMoneyImg} alt='hand money image' />
                    <div>
                        <div className='text-[21px] font-semibold'>Invite a friend</div>
                        <div className='text-[#eef5f8] text-[12px]'>1000 Tokens</div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex items-center gap-3 px-3 py-2 mx-[30px] mt-[29px] border rounded-lg'>
                    <img src={handMoneyImg} alt='hand money image' />
                    <div>
                        <div className='text-[21px] leading-[21px] font-semibold'>Invite a friend with Telegram Premium</div>
                        <div className='text-[#eef5f8] text-[12px] mt-[11px]'>3000 Tokens</div>
                    </div>
                </div>
            </div>
            <h1 className='mt-[11px] ml-[33px] text-lg font-semibold'>List of your friends</h1>
            <div className='mx-[33px] pt-[27px] pb-[40px] text-center text-[14px] bg-white bg-opacity-25 rounded-lg'>You haven't invited anyone yet.</div>
            <Footer />
        </div>
    );
}

export default Friends;