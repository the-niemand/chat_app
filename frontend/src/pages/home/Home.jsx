import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex overflow-hidden bg-white h-screen'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
