import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import LoginBg from '../../assets/bg.jpg'





const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="flex flex-col flex-auto w-full h-screen">
			<div className="h-full">
				<div className="grid lg:grid-cols-3 h-full">
					<div className="bg-[#FF4D30] bg-cover lg:flex bg-no-repeat hidden" style={{ backgroundImage: `url(${LoginBg})` }}></div>

					<div className="col-span-2 flex justify-center items-center">
						<div className="min-w-[650] px-8">
							<div className="mb-8">
								<h1 className="text-3xl font-medium text-slate-800">
									Welcome Back
								</h1>
								<p className="text-slate-800"> Please enter your credentails to sign in!</p>
							</div>

							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label className="font-medium mb-2 flex text-slate-800">Username</label>
									<input type="text" placeholder="Enter your username" className="w-full border rounded-md bg-transparent border-gray-400 p-3 text-slate-800"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</div>

								<div className="mb-3">
									<label className="font-medium mb-2 flex text-slate-800">Password</label>
									<input type="password" placeholder="Enter your password" className="w-full border rounded-md bg-transparent border-gray-400 p-3 text-slate-800"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								<div className="flex items-center justify-between mb-6">
									<div className="flex items-center gap-2">
										<input id="Remember" type="checkbox" className="cursor-pointer bg-white" />
										<label for="Remember">Remember</label>
									</div>


									<Link to='/signup' className='text-sm  hover:underline hover:text-violent-600 inline-block'>
										{"Don't"} have an account?
									</Link>
								</div>

								<button className='block bg-[#FF4D30] opacity-85 hover:bg-[#FF4D30] hover:opacity-100 text-white w-full py-2 px-8 rounded mb-2 transition duration-200' disabled={loading}>
									{loading ? <span className='loading loading-spinner '></span> : "Login"}
								</button>

							</form>
						</div>
					</div>
				</div>

			</div>

		</div>
	);
};



export default Login;

