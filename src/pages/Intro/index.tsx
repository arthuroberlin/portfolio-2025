import AnimatedLayout from "../../components/AnimatedLayout";
import DateTime from "../../components/DateTime";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import style from "./style.module.scss";

function Intro() {
	return (
		<div className={`page ${style.page__custom}`}>
			<div className="layout">
				<Navbar />
				<AnimatedLayout>
					<div className={style.content}>
						<div className={style.dateTime__container}>
							<DateTime />
						</div>
						<h1 className={`tilt-warp ${style.myName}`}>
							Arthur <span className={style.square}></span>
						</h1>
						<div className={style.resume__container}>
							<ul>
								<li>[01] Developper front from paris</li>
								<li>[02] Based in Paris</li>
								<li>[03] Specialized in react/next/ts</li>
								<li>[04] 4 years of experience</li>
							</ul>
						</div>
						<div className={style.stacks__container}>
							<ul>
								<li>[LANGAGE]:React</li>
								<li>[LANGAGE]:Next.js</li>
								<li>[LANGAGE]:Typescript</li>
								<li>[TanStack];[Tailwind];[Sass]</li>
								<li>[LANGAGE]:Javascript</li>
								<li>[OTHERS]: Github; Vite; Vercel; Pnpm;</li>
							</ul>
						</div>
					</div>
				</AnimatedLayout>
				<Footer />
			</div>
		</div>
	);
}

export default Intro;
