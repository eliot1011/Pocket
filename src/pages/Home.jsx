import moneyImg from '../assets/images/money.png';
import avatarImg from '../assets/images/avatar.png';
import dexImg from '../assets/images/dex.png';
import tonImg from '../assets/images/toncoin.png';
import Footer from '../components/Footer';
import settingImg from '../assets/images/setting.png';
import boltImg from '../assets/images/bolt.png';

const Home = function () {
    return (
        <div className='flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-[#6fbef6] via-[#35a9ea] to-[#93cff9]'>
            <div className='px-[34px] w-full'>
                <div className='flex items-end justify-between w-full pt-10'>
                    <div className='flex gap-2'>
                        <img src={avatarImg} className='w-[41px] h-[41px]' alt='avatar image' />
                        <div>
                            <p className='font-semibold'>John Peter</p>
                            <p className='text-[11px]'>0x85687646564s</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-end gap-2'>
                        <a href=''><img src={settingImg} className='w-[17px] h-[17px]' alt='setting image' /></a>
                        <button className='w-[97px] h-[31px] font-semibold text-[#35a9ea] text-[9px] bg-white rounded-md'>Connect Wallet</button>
                    </div>
                </div>
                <div className='flex justify-center mt-[67px]'>
                    <img src={moneyImg} alt='money image' />
                </div>
                <div>
                    <p className='mt-[22px] text-[37px] font-bold text-center'>109 343</p>
                    <p className='flex items-center justify-center text-sm'><img src={boltImg} className='h-[17px] mr-[2px]' alt='bolt image' />998/1000</p>
                </div>
                <div className='w-full py-2 mt-[34px] bg-white bg-opacity-25 rounded-lg'>
                    <div className='flex items-center justify-center'>
                        <div className='text-[19px] font-bold text-[#35a9ea]'>Swap in DEX</div>
                        <img src={dexImg} alt='dex image' />
                    </div>
                    <p className='text-[28px] -mt-2 font-bold text-center'>Coming Soon</p>
                </div>
                <div className='w-full py-2 mt-[14px] bg-white bg-opacity-25 rounded-lg'>
                    <div className='flex items-center justify-center'>
                        <div className='text-[19px] font-bold text-[#35a9ea]'>Holding TON</div>
                        <img src={tonImg} alt='dex image' />
                    </div>
                    <p className='text-[28px] -mt-2 font-bold text-center'>Coming Soon</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;