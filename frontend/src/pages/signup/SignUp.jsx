import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import LoginBg from '../../assets/bg.jpg'


const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		role: "member"

	});

	const { loading, signup } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
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
									Register
								</h1>
								<p className="text-slate-800"> Please enter your credentails to sign up!</p>
							</div>

							<form onSubmit={handleSubmit}>






								<div className="mb-3">
									<label className="font-medium mb-2 flex text-slate-800">Full Name</label>
									<input type="text" placeholder="Enter your username" className="w-full border rounded-md bg-transparent border-gray-400 p-3 text-slate-800"
										value={inputs.fullName}
										onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
									/>
								</div>



								<div className="mb-3" >
									<label className="font-medium mb-2 flex text-slate-800">
										Username
									</label>
									<input type="text" placeholder="Enter your username" className="w-full border rounded-md bg-transparent border-gray-400 p-3 text-slate-800"
										value={inputs.username}
										onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
									/>
								</div>



								<div className="mb-3">
									<label className="font-medium mb-2 flex text-slate-800">Password</label>
									<input type="password" placeholder="Enter your password" className="w-full border rounded-md bg-transparent border-gray-400 p-3 text-slate-800"
										value={inputs.password}
										onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
									/>
								</div>

								<div className="mb-3">
									<label className="font-medium mb-2 flex text-slate-800">
										Confirm Password
									</label>
									<input
										type='password'
										placeholder='Confirm Password'
										className="w-full border rounded-md bg-transparent border-gray-400 p-3 text-slate-800"
										value={inputs.confirmPassword}
										onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
									/>
								</div>


								<Link to='/login' className='text-sm  hover:underline hover:text-violent-600 inline-block  mb-6'>
									Already have an account?
								</Link>




								<div>
									<button className='block bg-[#FF4D30] opacity-85 hover:bg-[#FF4D30] hover:opacity-100 text-white w-full py-2 px-8 rounded mb-2 transition duration-200' disabled={loading}>
										{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
									</button>
								</div>

							</form>
						</div>
					</div>
				</div>

			</div>

		</div>
	);
};
export default SignUp;
