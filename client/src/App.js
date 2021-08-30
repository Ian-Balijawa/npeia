import "./App.css";
import "normalize-css";
import Register from "./pages/register";
import SignInSide from "./pages/sign-in";
import SignUp from "./pages/sign-up";

function App() {
	return (
		<div className='App'>
			<SignUp />
			{/* <SignInSide /> */}
			{/* <Register /> */}
		</div>
	);
}

export default App;
