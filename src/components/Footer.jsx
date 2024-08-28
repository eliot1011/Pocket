import homeImg from '../assets/images/home.png';
import friendsImg from '../assets/images/friends.png';
import earnImg from '../assets/images/earn.png';
import leaderboardImg from '../assets/images/leaderboard.png';

const Footer = function () {
    return (
        <div className="fixed bottom-0 left-0 flex justify-between items-end w-full h-[87px] pb-[18px] bg-[#93cff9] rounded-t-[34px]">
            <a href="/home" className="flex flex-col items-center w-32">
                <img src={homeImg} className='h-[20px]' alt="home image" />
                <span className="text-[10px]">Home</span>
            </a>
            <a href="/friends" className="flex flex-col items-center w-32">
                <img src={friendsImg} className='h-[20px]' alt="home image" />
                <span className="text-[10px]">Friends</span>
            </a>
            <a href="/earn" className="flex flex-col items-center w-32">
                <img src={earnImg} className='h-[20px]' alt="home image" />
                <span className="text-[10px]">Earn</span>
            </a>
            <a href="/leaderboard" className="flex flex-col items-center w-32">
                <img src={leaderboardImg} className='h-[20px]' alt="home image" />
                <span className="text-[10px]">Leaderboard</span>
            </a>
            <div className="absolute w-full bottom-1">
                <div className='mx-auto rounded-full bg-white h-[5px] w-[134px]'></div>
            </div>
        </div>
    );
}

export default Footer;