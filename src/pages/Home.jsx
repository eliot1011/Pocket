import moneyImg from '../assets/images/money.png';
import avatarImg from '../assets/images/avatar.png';
import dexImg from '../assets/images/dex.png';
import tonImg from '../assets/images/toncoin.png';
import { CiSettings } from 'react-icons/ci';
import { MdOutlineBolt } from 'react-icons/md';
import Footer from '../components/Footer';

const Home = function () {
    return (
        <div className="w-full min-h-screen pb-32 bg-gradient-to-b from-blue-400 to-blue-300">
            <div className='px-8'>
                <div className='flex items-end justify-between pt-10'>
                    <div className='flex gap-2'>
                        <img src={avatarImg} className='w-10 h-10' alt="avatar image" />
                        <div>
                            <p className='font-bold'>John Peter</p>
                            <p className='text-xs'>0x85687646564s8f88wee</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-end gap-2'>
                        <button><CiSettings /></button>
                        <button className='px-3 py-2 text-xs font-bold text-blue-300 bg-white rounded-md'>Connect Wallet</button>
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <img src={moneyImg} alt="money image" />
                </div>
                <div>
                    <p className='mt-5 text-2xl font-bold text-center'>109 343</p>
                    <p className='flex items-center justify-center'><span className='text-orange-600'><MdOutlineBolt /></span>998/1000</p>
                </div>
                <div className='w-full py-2 mt-5 bg-blue-200 rounded-xl'>
                    <div className='flex items-center justify-center'>
                        <div className='text-lg font-bold text-blue-500'>Swap in DEX</div>
                        <img src={dexImg} alt="dex image" />
                    </div>
                    <p className='text-3xl font-bold text-center'>Coming Soon</p>
                </div>
                <div className='w-full py-2 mt-5 bg-blue-200 rounded-xl'>
                    <div className='flex items-center justify-center'>
                        <div className='text-lg font-bold text-blue-500'>Holding TON</div>
                        <img src={tonImg} alt="ton image" />
                    </div>
                    <p className='text-3xl font-bold text-center'>Coming Soon</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;