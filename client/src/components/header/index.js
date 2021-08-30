import "./styles.css";
const Header = () => {
	return (
		<div className='container'>
			<img src='/images/logo.png' alt='logo' />
			<nav>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Menu</li>
					<li>Contact</li>
				</ul>

				<button>sign up</button>
			</nav>
		</div>
	);
};

export default Header;
