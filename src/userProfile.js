function UserProfile({ Logout }) {
    function userOut() { Logout(); }

    return (
      <div className="UserProfile">
        <h1>유저 프로필 정보입니다</h1>
        <button onClick={userOut}>로그아웃</button>
      </div>
    );
  }
  
  export default UserProfile;