import './body.css';

function Body() {
    return (
      <div className="body">
        <div className='posts'>
          <h1>콘텐츠들</h1>
        </div>
        <div className='right_panel'>
          <div className='right_panel_upper'>
            <form className='login_form'>
              <input className='login_form_part' type='text' placeholder='아이디'></input>
              <input className='login_form_part' type='password' placeholder='비밀번호'></input>
              <input className='login_form_part_btn' type='submit' value='로그인'></input>
            </form>

            <div class="wrap_divide_line">
              <hr class="divide_line"></hr>
              <span class="divide_line_text">social login</span>
              <hr class="divide_line"></hr>
            </div>

            <div className='social_login_panel'>
              <button className='social_Google_login_btn'>Google로 시작하기</button>
              <button className='social_Facebook_login_btn'>Facebook으로 시작하기</button>
              <button className='social_Kakao_login_btn'>카카오로 시작하기</button>
            </div>
          </div>
          <div className='real_time_searching_word'>
            <h1>실시간 검색어</h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default Body;