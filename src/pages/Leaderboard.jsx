import Footer from '../components/Footer';
import girlImg from '../assets/images/girl.png';
import gemImg from '../assets/images/gem.png';
import crownImg from '../assets/images/crown.png';
import avatarImg from '../assets/images/avatar.png';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';

const Leaderboard = function () {
    const [period, setPeriod] = useState('week');

    return (
        <div className='flex flex-col pb-[100px] w-full min-h-screen bg-gradient-to-b from-[#6fbef6] via-[#35a9ea] to-[#93cff9]'>
            <div className='w-full mt-16'>
                <div className='flex justify-center -translate-x-8 translate-y-10'>
                    <img className='' src={crownImg} alt='crown image' />
                </div>
                <div className='flex mx-[30px]'>
                    <div className='flex justify-center flex-1 translate-y-20'><img src={girlImg} className='w-20 h-20' alt='avatar' /></div>
                    <div className='flex justify-center flex-1 translate-y-6'><img src={girlImg} className='w-20 h-20' alt='avatar' /></div>
                    <div className='flex justify-center flex-1 translate-y-20'><img src={girlImg} className='w-20 h-20' alt='avatar' /></div>
                </div>
                <div className='flex mx-[30px] items-end'>
                    <div className='flex flex-col items-center justify-center flex-1 gap-1 pt-8 pb-2 bg-[#98d1ff] bg-opacity-20 rounded-l-lg'>
                        <div className='flex items-center justify-center w-5 h-5 text-xs -translate-y-3 bg-gradient-to-t from-[#0e1932] to-[#4474a2] rotate-45 rounded-lg'><span className='-rotate-45'>2</span></div>
                        <div className='text-[12px] font-light'>Anil</div>
                        <div className='text-[14px] font-semibold'>44.000.932</div>
                        <div className='flex items-center gap-1 text-[14px] text-[#35a9ea]'>
                            <ReactSVG src='./imgs/gem.svg' /> 100
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center flex-1 gap-1 pt-10 pb-10 bg-white rounded-t-3xl'>
                        <div className='flex items-center justify-center w-5 h-5 text-xs -translate-y-7 bg-gradient-to-t from-[#c85929] to-[#fec63c] rotate-45 rounded-lg'><span className='-rotate-45'>1</span></div>
                        <div className='text-sm text-blue-400'>Anil</div>
                        <div className='font-bold text-blue-400'>44.000.932</div>
                        <div className='flex items-center gap-1 text-blue-500'>
                            <ReactSVG src='./imgs/gem.svg' /> 100
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center flex-1 gap-1 pt-8 pb-2 bg-[#98d1ff] bg-opacity-20 rounded-r-lg'>
                        <div className='flex items-center justify-center w-5 h-5 text-xs -translate-y-3 bg-gradient-to-t from-[#231450] to-[#3e4eca] rotate-45 rounded-lg'><span className='-rotate-45'>3</span></div>
                        <div className='text-[12px] font-light'>Anil</div>
                        <div className='text-[14px] font-semibold'>44.000.932</div>
                        <div className='flex items-center gap-1 text-[14px] text-[#35a9ea]'>
                            <ReactSVG src='./imgs/gem.svg' /> 100
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-4 mt-5'>
                <div className='flex-col items-center justify-center px-4 py-3 bg-[#6fbef6] rounded-xl'>
                    <div className='font-semibold text-center'>1.6K</div>
                    <div className='flex items-center gap-1 text-[12px] mt-[3px]'>Your Tokens <ReactSVG src='./imgs/arrow-right.svg' /></div>
                </div>
                <div className='flex-col items-center justify-center px-4 py-3 bg-[#6fbef6] rounded-xl'>
                    <div className='font-semibold text-center'>#4.7MK</div>
                    <div className='flex items-center gap-1 text-[12px] mt-[3px]'>Your Rank <ReactSVG src='./imgs/arrow-right.svg' /></div>
                </div>
            </div>
            <div className='flex justify-between items-center py-[4px] mx-[32px] mt-10 mb-[30px] bg-white bg-opacity-25 rounded-xl'>
                <div onClick={() => setPeriod('week')} className={`flex-1 text-center text-[12px] transition-all duration-300 font-semibold cursor-pointer py-[10px] rounded-lg ml-1 ${ period == 'week' ? '' : 'hover:' }bg-[#6fbef6]`}>Weekly</div>
                <div onClick={() => setPeriod('month')} className={`flex-1 text-center text-[12px] transition-all duration-300 font-semibold cursor-pointer py-[10px] rounded-lg mx-1 ${ period == 'month' ? '' : 'hover:' }bg-[#6fbef6]`}>Monthly</div>
                <div onClick={() => setPeriod('all')} className={`flex-1 text-center text-[12px] transition-all duration-300 font-semibold cursor-pointer py-[10px] rounded-lg mr-1 ${ period == 'all' ? '' : 'hover:' }bg-[#6fbef6]`}>All time</div>
            </div>
            <div>
                <div className='flex items-center mx-[32px] justify-between px-3 py-2 border-b border-white border-opacity-20'>
                    <div className='flex gap-2'>
                        <img src={girlImg} alt='avatar image' className='w-[35px] h-[35px]' />
                        <div>
                            <div className='flex text-[12px] items-center'>deluxe <ReactSVG src='./imgs/gem.svg' className='mr-[2px] ml-[5px]' /> <span className='text-[#0088cc] font-semibold'>50</span></div>
                            <div className='text-white text-[12px] text-opacity-35'>23.000.000</div>
                        </div>
                    </div>
                    <div className='font-bold text-[12px] shadow-lg'>4</div>
                </div>
                <div className='flex items-center mx-[32px] justify-between px-3 py-2 border-b border-white border-opacity-20'>
                    <div className='flex gap-2'>
                        <img src={girlImg} alt='avatar image' className='w-[35px] h-[35px]' />
                        <div>
                            <div className='flex text-[12px] items-center'>deluxe <ReactSVG src='./imgs/gem.svg' className='mr-[2px] ml-[5px]' /> <span className='text-[#0088cc] font-semibold'>50</span></div>
                            <div className='text-white text-[12px] text-opacity-35'>23.000.000</div>
                        </div>
                    </div>
                    <div className='font-bold text-[12px] shadow-lg'>4</div>
                </div>
                <div className='flex items-center mx-[15px] justify-between px-7 py-2 bg-white bg-opacity-70 rounded-lg'>
                    <div className='flex gap-2'>
                        <img src={avatarImg} alt='avatar image' className='w-[35px] h-[35px]' />
                        <div>
                            <div className='flex text-[12px] items-center text-[#35a9ea]'>deluxe <span className='ml-2 bg-[#0088cc] text-white rounded-full text-[10px] px-3 font-semibold'>You</span></div>
                            <div className='text-[#6fbef6] text-[12px]'>23.0</div>
                        </div>
                    </div>
                    <div className='font-bold text-[12px] shadow-lg text-[#6fbef6]'>4.7M</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Leaderboard;