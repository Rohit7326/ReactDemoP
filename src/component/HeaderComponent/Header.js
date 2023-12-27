import './Header.css';
import Nav from '../NavComponent/Nav'
function Header(){
return(
    <>
      <div id='header'>
          <Nav/>
          <h1 className='s1'>THE KSG410 AND R50 DEFENDER</h1>
          <h1 className='s2'>ARE NOW SHIPPING</h1>
      </div>
    </>
);
}
export default Header;