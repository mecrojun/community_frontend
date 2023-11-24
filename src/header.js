import { Link, useNavigate } from 'react-router-dom';
import './header.css';


export let postListData;

function Header() {
  const movePage = useNavigate();

  const test = async() => {
    await fetch(`${process.env.REACT_APP_URL}/post-article?skip=0&take=10`)
    .then((response) => response.json())
    .then((data) => { 
      postListData = data.result;
      movePage('/post'); 
    })
  }

  return (
    <div className="header">
      <div className='search_header'>        
        <form>
          <input className='searchbar' type='text' name='search' placeholder='검색어 입력'></input>
          <button className='searchbtn'></button>
        </form>
      </div>
      <div className='navbar'>
        <text className='navMenu' onClick={ test }>게시판</text>
        <Link className='navMenu' to={'/'}>공지사항</Link>
        <Link className='navMenu' to={'/'}>Q&A</Link>
      </div>
    </div>
  );
}

export default Header;