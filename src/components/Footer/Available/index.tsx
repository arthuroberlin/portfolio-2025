import { useEffect, useState } from "react";
import style from "./style.module.scss";

const Available = () => {
	const [visible, setVisible] = useState(false);
	const [isRendered, setIsRendered] = useState(false);
	let timeoutId: ReturnType<typeof setTimeout>;

	useEffect(() => {
		const availableBlock = document.getElementById("available");

		const handleMouseOver = () => {
			setIsRendered(true);
			setTimeout(() => setVisible(true), 100); //delay
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => setVisible(false), 2000);
		};

		availableBlock?.addEventListener("mouseover", handleMouseOver);

		return () => {
			availableBlock?.removeEventListener("mouseover", handleMouseOver);
			clearTimeout(timeoutId);
		};
	}, []);

	useEffect(() => {
		if (!visible) {
			timeoutId = setTimeout(() => setIsRendered(false), 1000); // delay
		}
	}, [visible]);

	return (
		isRendered && (
			<div className={`${style.available__action} ${visible ? style.visible : style.hidden}`}>
				<a
					href="https://www.linkedin.com/in/arthuroberlin/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Message me here!
				</a>
			</div>
		)
	);
};

export default Available;
