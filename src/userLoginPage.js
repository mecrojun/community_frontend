import './userLoginPage.css';

function UserLoginPage({ LoginSuccess }) {
  let UserToken=""; //undefined면 로그인이 안되었다는 것으로

  function userLogin(){
    const id = document.getElementById('id').value;
    const pd = document.getElementById('password').value;

    fetch("http://127.0.0.1:4000/users/nickname/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "nickname": id,
          "password": pd
        }),
      })
        .then((response) => response.json())
        .then((data) => 
        { UserToken = data.result; 
          if( UserToken != undefined )
            LoginSuccess();
          else
            window.confirm("아이디 또는 비밀번호를 확인해 주세요"); })
  }

    return (
      <div className="UserLogin_div">
        <div className='login_form'>
              <div className='input_info'>
              <input type='text' id="id" placeholder='아이디'></input>
              <input type='password' id="password" placeholder='비밀번호'></input>
              </div>
              <button className='login_form_btn' onClick={userLogin}>로그인</button>
          </div>
          <div className='find_info_or_register'>
              <a href='#!'>아이디찾기</a>
              <a href='#!'>비밀번호찾기</a>
              <a href='/register'>회원가입</a>
          </div>

          <div className="wrap_divide_line">
              <hr className="divide_line"></hr>
              <span className="divide_line_text">social login</span>
              <hr className="divide_line"></hr>
          </div>

          <div className='social_login_panel'>
              <button className='social_Google_login_btn'>Google로 시작하기</button>
              <button className='social_Facebook_login_btn'>Facebook으로 시작하기</button>
              <button className='social_Kakao_login_btn'>카카오로 시작하기</button>
          </div>
      </div>
    );
  }
  
  export default UserLoginPage;