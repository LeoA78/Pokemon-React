import { useDispatch } from "react-redux";
import { logoutUser } from "../../slices/user/userSlice";

const Logout = () => {
  const dispatch = useDispatch();

  dispatch(logoutUser());
};

export default Logout;
