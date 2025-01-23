import { useState } from "react";
import style from "./style.module.scss";

const Warning = () => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) {
		const footer = document?.getElementById("footer");
		if (footer) {
			footer.style.marginBottom = "0px";
		}
	}

	return (
		isVisible && (
			<div className={style.warning}>
				<p>The experience is enhanced on dekstop 👨🏼‍💻</p>
				<button
					onClick={() => {
						setIsVisible(false);
					}}
				>
					X
				</button>
			</div>
		)
	);
};

export default Warning;
