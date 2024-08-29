import inviteImg from '../assets/images/invite.png';
import handMoneyImg from '../assets/images/handmoney.png';
import Footer from '../components/Footer';
import { ReactSVG } from 'react-svg';

const Friends = function () {
    return (
        <div className='flex flex-col pb-[100px] w-full min-h-screen bg-gradient-to-b from-[#6fbef6] via-[#35a9ea] to-[#93cff9]'>
            <div className='w-full mt-16'>
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
                        <ReactSVG src='./imgs/coin.svg' className='mr-[3px]' />
                        <span className='font-bold'>0</span>
                    </div>
                    <div className='flex items-center'>
                        <ReactSVG src='./imgs/ton.svg' className='mr-[3px]' />
                        <span className='font-bold'>0</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-[13px] w-full mt-6 px-[47px]'>
                <button className='px-[48px] py-[12px] font-bold text-[#35a9ea] text-xs bg-white rounded-lg'>Invite a friend</button>
                <button className='flex items-center gap-3 px-5 py-3 text-xs bg-white bg-opacity-25 rounded-lg'><ReactSVG src='./imgs/link.svg' />Copy</button>
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