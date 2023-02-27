import { Link,Outlet, NavLink } from "react-router-dom";

const Header = () => {

  return (
<>

<div className="card-header">
{/* <Link to="/" className="navbar-brand">SHARETRADE.COM</Link> */}

</div>
    {/* <div className="card-group">
      
    </div> */}

<Outlet />
</>
  );
};
export default Header;