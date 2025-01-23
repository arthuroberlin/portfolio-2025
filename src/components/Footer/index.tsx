import Available from "./Available";
import style from "./style.module.scss";

const Footer = () => {
	return (
		<footer id={style.footer}>
			<div className={style.top__part}>
				<ul>
					<li>contact@arthuroberlin.fr</li>
					<li>PARIS 75011</li>
					<li>FRANCE</li>
				</ul>
			</div>
			<div className={style.bottom__part}>
				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/arthuroberlin"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					</li>
					<li>
						<a
							href="https://www.malt.fr/profile/arthuroberlinmartins"
							target="_blank"
							rel="noopener noreferrer"
						>
							Malt
						</a>
					</li>
					<li id="available" className={style.available}>
						<Available />
						<span className={style.circle}></span>
						<span>Available Now</span>
					</li>
				</ul>
				<p className="copyright">COPYRIGHT (C)2024-2025 All rights reserved</p>
			</div>
		</footer>
	);
};
export default Footer;
