import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto opacity-60 hover:opacity-100 bg-[#FF4D30] p-3 rounded flex items-center justify-center cursor-pointer transition duration-200'>
			{!loading ? (
				<h1 onClick={logout} className="text-white font-bold text-[16px] ">Logout</h1>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
