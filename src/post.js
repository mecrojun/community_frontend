import { useNavigate } from 'react-router-dom';
import './post.css';
import { postListData } from './header';
import { saveCommentData, savePostData } from './dataManage';


function Post() {
    const navigate = useNavigate();

    const enterPost = (e) => {
      const target = e.target.previousElementSibling;
      const id = target.textContent;

      fetch(`${process.env.REACT_APP_URL}/post-article/${id}`)
      .then((response) => response.json())
      .then((PostData) => {
        savePostData(PostData.result);

        fetch(`${process.env.REACT_APP_URL}/comment?postId=`+id)
        .then((response) => response.json())
        .then((CommentData) => {
          saveCommentData(CommentData.result);

          navigate("/watchPost");
        })
      })
    }

    function showPost() {
      const TABLE_TR_ELEMENT = postListData.map(postData => <tr key={postData.id}><td>{ postData.id }</td>
                                                            <td className='clickTD' onClick={ enterPost }>{ postData.title }</td>
                                                            <td>{ postData.nickname }</td><td>{ postData.created_at }</td><td>{ postData.watch }</td></tr>);
      return <table className='postTable'>
        <tr><td>번호</td><td>제목</td><td>글쓴이</td><td>작성일</td><td>조회</td></tr>
        { TABLE_TR_ELEMENT }
        </table>
    }

    return (
      <div className='post_div'>
        <h1>게시판 페이지</h1>
        { showPost() }
        <button className='createPostBtn' onClick={() => { navigate("/createPost"); }}>게시글 작성</button>
      </div>
    );
  }
  
  export default Post;