import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className='search_header'>        
        <form>
          <input className='searchbar' type='text' placeholder='검색어 입력'></input>
          <button className='searchbtn'></button>
        </form>
      </div>
      <div className='navbar'>
        <Link className='navMenu' to={'/'}>게시판</Link>
        <Link className='navMenu' to={'/'}>공지사항</Link>
        <Link className='navMenu' to={'/'}>Q&A</Link>
      </div>
    </div>
  );
}

export default Header;