import { useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

const Footer = function () {
    const location = useLocation();

    return (
        <div className='fixed bottom-0 left-0 flex justify-between items-end w-full h-[87px] pb-[10px] bg-[#93cff9] rounded-t-[34px]'>
            <a href='/home' className={`flex flex-col items-center w-32 transition-all duration-300 group ${location.pathname == '/home' ? '-translate-y-4' : 'hover:-translate-y-4'} ${location.pathname == '/home' ? 'scale-125' : 'hover:scale-125'}`}>
                {/* <img src={homeImg} className='h-[20px]' alt='home image' /> */}
                <ReactSVG src='./imgs/home.svg' />
                <span className='text-[10px]'>Home</span>
                <ReactSVG src='./imgs/triangle.svg' className={`mt-1 transition-all duration-300 ${location.pathname == '/home' ? '' : 'translate-y-10 group-hover:translate-y-0'}`} />
            </a>
            <a href='/friends' className={`flex flex-col items-center w-32 transition-all duration-300 group ${location.pathname == '/friends' ? '-translate-y-4' : 'hover:-translate-y-4'} ${location.pathname == '/friends' ? 'scale-125' : 'hover:scale-125'}`}>
                <ReactSVG src='./imgs/friends.svg' />
                <span className='text-[10px]'>Friends</span>
                <ReactSVG src='./imgs/triangle.svg' className={`mt-1 w-2 transition-all duration-300 ${location.pathname == '/friends' ? '' : 'translate-y-10 group-hover:translate-y-0'}`} />
            </a>
            <a href='/earn' className={`flex flex-col items-center w-32 transition-all duration-300 group ${location.pathname == '/earn' ? '-translate-y-4' : 'hover:-translate-y-4'} ${location.pathname == '/earn' ? 'scale-125' : 'hover:scale-125'}`}>
                <ReactSVG src='./imgs/earn.svg' />
                <span className='text-[10px]'>Earn</span>
                <ReactSVG src='./imgs/triangle.svg' className={`mt-1 w-2 transition-all duration-300 ${location.pathname == '/earn' ? '' : 'translate-y-10 group-hover:translate-y-0'}`} />
            </a>
            <a href='/leaderboard' className={`flex flex-col items-center w-32 transition-all duration-300 group ${location.pathname == '/leaderboard' ? '-translate-y-4' : 'hover:-translate-y-4'} ${location.pathname == '/leaderboard' ? 'scale-125' : 'hover:scale-125'}`}>
                <ReactSVG src='./imgs/leaderboard.svg' />
                <span className='text-[10px]'>Leaderboard</span>
                <ReactSVG src='./imgs/triangle.svg' className={`mt-1 w-2 transition-all duration-300 ${location.pathname == '/leaderboard' ? '' : 'translate-y-10 group-hover:translate-y-0'}`} />
            </a>
            <div className='absolute w-full bottom-1'>
                <div className='mx-auto rounded-full bg-white h-[5px] w-[134px]'></div>
            </div>
        </div>
    );
}

export default Footer;