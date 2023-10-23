import { useState } from 'react';
import './body.css';
import UserLoginPage from './userLoginPage';
import UserProfile from './userProfile';

function Body() {
    const [IsLogined, setIsLogined] = useState(false);
    const LoginSuccess = () => { setIsLogined(true); }
    const Logout = () => { setIsLogined(false); }

    return (
      <div className="body">
        <div className='posts'>
          <h1>콘텐츠들</h1> 
        </div>
        <div className='right_panel'>
          { IsLogined ? <UserProfile Logout={Logout}/> : <UserLoginPage LoginSuccess={LoginSuccess}/> }
          <div className='real_time_searching_word'>
            <h1>실시간 검색어</h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default Body;