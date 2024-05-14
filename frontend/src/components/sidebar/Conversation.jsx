import { useState } from 'react'; // Import useState hook
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const [isHovered, setIsHovered] = useState(false); // Define isHovered state variable
	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
	const text_style = isHovered || isSelected ? 'font-bold text-white' : 'font-bold text-slate-800';

	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-[#FF4D30] rounded px-5 py-3 cursor-pointer
                ${isSelected ? "bg-[#FF4D30]" : ""}
            `}
				onClick={() => setSelectedConversation(conversation)}
				style={{ color: isSelected || isHovered ? 'white' : 'black' }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className={text_style}>{conversation.username}</p>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;
