import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	const user = JSON.parse(localStorage.getItem("chat-user"));



	useEffect(() => {

		const getConversations = async () => {
			setLoading(true);

			if (user.role === "member") {
				try {
					const res = await fetch("/api/users/admin", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						user: user,
					});
					const data = await res.json();
					if (data.error) {
						throw new Error(data.error);
					}
					console.log(data);
					setConversations(data);
				} catch (error) {
					toast.error(error.message);
					console.log(error);
				} finally {
					setLoading(false);
				}
			} else {
				try {
					const res = await fetch("/api/users", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						user: user,
					});
					const data = await res.json();
					if (data.error) {
						throw new Error(data.error);
					}
					setConversations(data);
				} catch (error) {
					toast.error(error.message);
				} finally {
					setLoading(false);
				}
			}

		};

		getConversations();
	}, []);

	return { loading, conversations };
};
export default useGetConversations;
