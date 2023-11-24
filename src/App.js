import "./App.css";
import Header from "./Components/Header";
import ImageBox from "./Components/ImageBox";

import image1 from "../src/Images/i10.jpg";

function App() {
	const images = [image1];

	const imageUrl = `url(${images[0]})`;
	const style = {
		backgroundImage: imageUrl,
		backgroundSize: "60vw",
		backgroundRepeat: "repeat",
	};

	return (
		<>
			<Header />
			<div className="body" style={style}>
				<ImageBox placeholder="type\\a rat and cat" boxNumber="1" />
				<ImageBox
					placeholder="type\\tony stark in multiverse"
					boxNumber="2"
				/>
				<ImageBox placeholder="type\\groot and yoda" boxNumber="3" />
				<ImageBox placeholder="type\\antman and wasp" boxNumber="4" />
				<ImageBox placeholder="type\\rocket and groot" boxNumber="5" />
				<ImageBox placeholder="type\\first day of universe" boxNumber="6" />
				<ImageBox placeholder="type\\big bang real picture" boxNumber="7" />
				<ImageBox placeholder="type\\image of multiverse" boxNumber="8" />
				<ImageBox placeholder="type\\ironman and groot" boxNumber="9" />
				<ImageBox placeholder="type\\ironman and groot" boxNumber="10" />
			</div>
		</>
	);
}

export default App;
