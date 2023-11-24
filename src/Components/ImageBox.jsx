import React from "react";
import { useState, useEffect } from "react";
import query from "../api.js";
import { RingLoader } from "react-spinners";

const ImageBox = ({ placeholder, boxNumber }) => {
	const [inputs, setText] = useState("");
	const [image, setImage] = useState("");
	const [btnId, setBtnId] = useState("btn");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [noImage, setNoImage] = useState(true);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	useEffect(() => {}, [image, error]);

	const handleClick = (e) => {
		if (btnId === "disabled") return;
		setError(false);
		setLoading(true);
		setBtnId("disabled");
		query({ inputs })
			.then((res) => {
				const imageObjectURL = URL.createObjectURL(res);
				setLoading(false);
				setNoImage(false);
				setImage(imageObjectURL);
				setBtnId("btn");
			})
			.catch((error) => {
				setError(true);
				setLoading(false);
				setBtnId("btn");
			});
	};

	return (
		<div className="box">
			<div className="input">
				<input
					typeof="text"
					placeholder={placeholder}
					value={inputs}
					onChange={handleChange}
					id="text_box"
				></input>
			</div>
			<div className="submit">
				<input
					type="submit"
					id={btnId}
					value="Search"
					onClick={handleClick}
				></input>
				<div className="boxNum">
					<h2>Box {boxNumber}</h2>
				</div>
			</div>

			<div className="image" style={{ background: "transparent" }}>
				{loading ? (
					<>
						<RingLoader
							color="#325469"
							size={130}
							speedMultiplier={1.2}
							className="loader"
						/>
						<p>Image is loading...</p>
					</>
				) : error ? (
					<h1>Error while loading</h1>
				) : noImage === true ? (
					<h1>Type something - Click Search</h1>
				) : (
					<img src={image} alt="" className="img_load" />
				)}
			</div>
		</div>
	);
};

export default ImageBox;
