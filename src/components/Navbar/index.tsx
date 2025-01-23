import { NavLink } from "react-router";
import style from "./style.module.scss";

const Navbar = () => {
	return (
		<header className={style.header}>
			<ul className={style.navbar}>
				<li>
					<NavLink to="/">intro</NavLink>
				</li>
				<li>
					<NavLink to="/gettoknowme">
						<span className={style.circle}></span>get to know me
					</NavLink>
				</li>
				{/* <li><NavLink to="/projects">projects</NavLink></li> */}
				<li className={style.github__link}>
					<a href="https://github.com/arthuroberlin" target="_blank" rel="external">
						github
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<g id="Complete">
									<g id="arrow-up-right">
										<g>
											<polyline
												data-name="Right"
												fill="none"
												id="Right-2"
												points="18.7 12.4 18.7 5.3 11.6 5.3"
												stroke="#ffffff"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
											></polyline>
											<line
												fill="none"
												stroke="#ffffff"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												x1="5.3"
												x2="17.1"
												y1="18.7"
												y2="6.9"
											></line>
										</g>
									</g>
								</g>
							</g>
						</svg>
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
