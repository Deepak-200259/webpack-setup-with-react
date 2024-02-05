import './style.css';
import IMAGE from './react.png';
import Logo from './react-2.svg';

export const App = () => {
	return (
		<>
			<h1>
				Basic Webpack - {process.env.NODE_ENV} {process.env.name}
			</h1>
			<img
				src={IMAGE}
				alt="React Logo"
				width={300}
				height={300}
			/>
			<img
				src={Logo}
				alt="React Logo"
				width={300}
				height={300}
			/>
		</>
	);
};
