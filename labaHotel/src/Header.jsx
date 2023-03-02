import { Link,Outlet, NavLink } from "react-router-dom";
import { UserAuth } from "./pages/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const { logout } = UserAuth();
  
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await logout()
      navigate('/')
      console.log('You are logged out');
    }catch (e){
      console.log(e.message);  
    }
  }


  return (
<>

  
<div className="app-card">
<div className="card-header">
<img className="card-icon" src="images/FE-2-design_favicon.png" alt="" ></img>

</div>
    <div className="card-group" >
      <img className="card-image" src="https://firebasestorage.googleapis.com/v0/b/hotel-da9e2.appspot.com/o/avatar-370-456322-512.webp?alt=media&token=21617e25-bdab-4468-b50b-13c1d77fbbd3" alt=""></img>
      <Link className="navbar-brand" to="/" onClick={handleLogout} > Log Out</Link>
    </div>
</div>
<Outlet />
</>
  );
}

export default Header; 