import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/home');
  }
  
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Support Desk</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt />
              LogOut 
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                {" "}
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                {" "}
                <FaSignOutAlt /> Register{" "}
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
