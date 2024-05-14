import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import LoginBg from '../../assets/bg.jpg'

// const Login = () => {
// 	const [username, setUsername] = useState("");
// 	const [password, setPassword] = useState("");

// 	const { loading, login } = useLogin();

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		await login(username, password);
// 	};

// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-white '>
// 				<h1 className='text-3xl font-bold text-center text-blue-600'>
// 					Login
// 				</h1>

// 				<form onSubmit={handleSubmit} className="flex flex-col gap-3">
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input
// 							type='text'
// 							placeholder='Enter username'
// 							className='w-full input input-bordered  h-10'
// 							value={username}
// 							onChange={(e) => setUsername(e.target.value)}
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 							value={password}
// 							onChange={(e) => setPassword(e.target.value)}
// 						/>
// 					</div>
// 					<Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</Link>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 bg-slate-700' disabled={loading}>
// 							{loading ? <span className='loading loading-spinner '></span> : "Login"}
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;






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
						<div className="min-w-[450] px-8">
							<div className="mb-8">
								<h1 className="text-3xl font-medium text-slate-950">
									Welcome Back
								</h1>
								<p> Please enter your credentails to sign in!</p>
							</div>

							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label className="font-medium mb-2 flex">Username</label>
									<input type="text" placeholder="Enter your username" className="w-full border rounded-md bg-transparent border-gray-400 p-3 text-slate-800"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</div>

								<div className="mb-3">
									<label className="font-medium mb-2 flex">Password</label>
									<input type="password" placeholder="Enter your password" className="w-full border rounded-md bg-transparent border-gray-400 p-3 text-slate-800"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								<div className="flex items-center justify-between mb-6">
									<div className="flex items-center gap-2">
										<input id="Remember" type="checkbox" />
										<label for="Remember">Remember</label>
									</div>


									<Link to='/signup' className='text-sm  hover:underline hover:text-violent-600 inline-block'>
										{"Don't"} have an account?
									</Link>
								</div>

								<button className='block bg-[#FF4D30] opacity-70 hover:bg-[#FF4D30] hover:opacity-100 text-white w-full py-2 px-8 rounded mb-2 transition duration-200' disabled={loading}>
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

