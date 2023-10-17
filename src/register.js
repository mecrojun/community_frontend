import './register.css';

function Register() {
    return (
      <div className='wrap_register_form'>
        <h1>회원가입</h1>
        <div className="register_form">
          <span>아이디</span>
          <div className='id_check'>
            <input type="text" placeholder="아이디 입력"></input>
            <button>중복확인</button>
          </div>
          <span>비밀번호</span>
          <input type="password" placeholder="비밀번호 입력"></input>
          <span>비밀번호 확인</span>
          <input type="password" placeholder="비밀번호 재입력"></input>
          <span>이메일 주소</span>
          <div className='email_check'>
            <input type="text" placeholder="이메일 주소"></input>
            <span>@</span>
            <input type="text" placeholder="naver.com"></input>
            <button>인증번호 받기</button>
          </div>
          <button>가입하기</button>
        </div>
      </div>
    );
  }
  
  export default Register;