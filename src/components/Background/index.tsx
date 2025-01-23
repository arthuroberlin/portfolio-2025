import style from "./style.module.scss";
import Video from "../../assets/background.mp4";

const Background = () => {
	return (
		<>
			<div className={style.background}></div>

			<video className={style.background__video} autoPlay loop muted playsInline>
				<source src={Video} type="video/mp4" />
			</video>
		</>
	);
};
export default Background;
