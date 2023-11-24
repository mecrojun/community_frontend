function MyInfo() {

    function bringMyPosts() {
        console.log("내 게시글 목록");
    }

    return (
      <div className="MyInfo">
        <div>
            <h1>내 게시글 목록</h1>
            { bringMyPosts() }
        </div>
      </div>
    );
  }
  
  export default MyInfo;