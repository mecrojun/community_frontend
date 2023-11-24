import ReactQuill from 'react-quill';
import { bringCommentData, bringPostData } from './dataManage';
import './watchPost.css'
import { getCookie } from './cookie';

function WatchPost() {

    const postInfo = bringPostData();
    const commentInfo = bringCommentData();
    let text;
    let relateId = -1;

    function PostInfoParseHtml(){
      return <div dangerouslySetInnerHTML={ {__html: postInfo.post} }></div>
    }

    function set_comment_text (commentData){
      return commentData.delete_comment ? <td className='reply_comment_TD' onClick={ replyComment } style="color:#ccc">"이 댓글은 삭제되었습니다"</td>
                                        : <td className='reply_comment_TD' onClick={ replyComment } dangerouslySetInnerHTML={ {__html : commentData.comment} }></td> 
    }

    function CommentInfoParseHtml(){
      const TABLE_TR_ELEMENT = commentInfo.map(commentData => <tr key={commentData.commitId}><td className='reply_comment_nickname'>{ "닉네임" }</td>
                                                            { set_comment_text(commentData) }
                                                            <td className='reply_comment_createAT'>{ commentData.created_at }</td></tr>); 
      
      return <table className='commentTable'>{ TABLE_TR_ELEMENT }</table>
    }

    function replyComment(){
      console.log("대댓글 달기");
    }

    function saveText(){
      text = document.getElementById('comment_area').innerText;
    }

    function comment_send(){
        const paragraphs = text.split('\n');
        const comment_html = paragraphs.map(function (paragraph) {
            return '<p>' + paragraph + '</p>';
          }).join('');

          console.log(comment_html);
          fetch(`${process.env.REACT_APP_URL}/comment`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + getCookie("token")
            },
            body: JSON.stringify({
                "postId": postInfo.id,
                "nickname": "닉네임",
                "relateId": relateId,
                "comment": comment_html
            }),
          })
    }

    return (
      <div className="WatchPost">
        <hr className='post_hr'></hr>
        <div>
            <span>{ postInfo.title }</span>            
        </div>
        <div>
            <span>{ postInfo.nickname }</span>
            <span> | </span>
            <span>{ postInfo.created_at }</span>
        </div>
        <hr className='post_hr'></hr>
        <div className='postText'>
            { PostInfoParseHtml() }
        </div>
        <hr className='post_hr'></hr>
        <div className='comment_panel'>
            <div contentEditable className='comment_area' id='comment_area' placeholder='댓글을 입력해주세요.' onInput={saveText}>
                <div></div>
            </div>
            <button className='comment_submit' onClick={comment_send}>작성</button>
        </div>
        <hr className='comment_hr'></hr>
        <div className='comments_div'>
          { CommentInfoParseHtml() }
        </div>
      </div>
    );
  }
  
  export default WatchPost;