import { NavLink } from "react-router";
import ErrorAscii from "../../components/ErrorAscii";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import style from "./style.module.scss";

function Error() {
	return (
		<div className={`page ${style.page__custom}`}>
			<Navbar />
			<div className={style.notFound}>
				<ErrorAscii />
				<h1>:/</h1>
				<p>Could not find requested page or ressource(s).</p>
				<NavLink to="/">back to home ➡️</NavLink>
			</div>
			<Footer />
		</div>
	);
}

export default Error;
