import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
    const moveHome = useNavigate();
    let email;
    let isCheckedValidCode;

    function createUser(){
      const id = document.getElementById('id').value;
      const pd = document.getElementById('password').value;

      if( id === ''){
        alert("아이디를 입력해주세요");
        return;
      }

      if( pd === ''){
        alert("비밀번호를 입력해주세요");
        return;
      }

      if(!(isCheckedValidCode)){
        alert("이메일 인증을 해주세요");
        return;
      }

      fetch(`${process.env.REACT_APP_URL}/users/create/user/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email": email,
          "password": pd,
          "nickname": id
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))

      moveHome('/');
    }

    function receiveCode(){
      const front_email_part = document.getElementById('front_email_part').value;
      const back_email_part = document.getElementById('back_email_part').value;
      email = front_email_part + "@" + back_email_part;

      isCheckedValidCode = false;
      
      fetch(`${process.env.REACT_APP_URL}/users/create/user/send/code/email?email=` + email)
      .then((response) => response.json())
      .then(isReceiveTrue => {
          if(isReceiveTrue.result)
          document.getElementById('checkCode').style.display = 'block';
      })
      .catch(error => console.log(error));
    }

    function check_validCode(){
      const validCode = document.getElementById('input_validCode').value;
      
      fetch(`${process.env.REACT_APP_URL}/users/create/user/verify/code/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email": email,
          "verify_code": validCode
        }),
      })
        .then((response) => response.json())
        .then((data) => { isCheckedValidCode = data.result; });
    }

    return (
      <div className='wrap_register_form'>
        <h1>회원가입</h1>
        <div className="register_form">
          <span>아이디</span>
          <div className='id_check'>
            <input type="text" id='id' placeholder="아이디 입력"></input>
            <button>중복확인</button>
          </div>
          <span>비밀번호</span>
          <input type="password" id='password' placeholder="비밀번호 입력"></input>
          <span>비밀번호 확인</span>
          <input type="password" placeholder="비밀번호 재입력"></input>
          <span>이메일 주소</span>
          <div className='email_check'>
            <input type="text" id='front_email_part' placeholder="이메일 주소"></input>
            <span>@</span>
            <input type="text" id='back_email_part' placeholder="naver.com"></input>
            <button onClick={receiveCode}>인증번호 받기</button>
          </div>
          <div className='check_validCode_part' id='checkCode'>
            <input type='text' id='input_validCode' placeholder='인증코드 입력'></input>
            <button onClick={check_validCode}>인증확인</button>
          </div>
          <button onClick={createUser}>가입하기</button>
        </div>
      </div>
    );
  }
  
  export default Register;