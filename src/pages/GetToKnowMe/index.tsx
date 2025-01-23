import { Helmet } from "react-helmet";
import AnimatedLayout from "../../components/AnimatedLayout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import style from "./style.module.scss";

interface ExperienceProps {
	date: string;
	text: string;
}

interface SkillProps {
	category: string;
	skills: Array<string>;
}

const Experience = ({ date, text }: ExperienceProps) => {
	return (
		<div className={style.experience}>
			<span className={style.experience__date}>{date}</span>
			<p className={style.experience__text}>{text}</p>
		</div>
	);
};

const Skills = ({ category, skills }: SkillProps) => {
	const chunkedSkills = [];
	for (let i = 0; i < skills.length; i += 3) {
		chunkedSkills.push(skills.slice(i, i + 3));
	}

	return (
		<div className={style.skill}>
			<span className={style.category}>[{category}]</span>
			<div className={style.skills__list_container}>
				{chunkedSkills.map((chunk, index) => (
					<ul key={index} className={style.skills__list}>
						{chunk.map((skill, idx) => (
							<li key={idx}>{skill}</li>
						))}
					</ul>
				))}
			</div>
		</div>
	);
};

const GetToKnowMe = () => {
	return (
		<>
			<Helmet>
				<title>Arthur.</title>
			</Helmet>
			<div className={`page ${style.page__custom}`}>
				<div className="layout">
					<Navbar />
					<AnimatedLayout>
						<div className={style.content}>
							<h1 className={style.page__title}>Archives</h1>
							<div className={style.experience__container}>
								<div className={style.experience__column}>
									<Experience
										date="2024"
										text="Freelance front-end developer at INFINI on a project to create a recruitment platform with Nextjs/TanStack and shadcn/ui."
									/>
									<Experience
										date="2023-24"
										text="Creation of the “MyNameIs” browser game (single player and multiplayer) for Konbini, a French media for 18-25 year-olds!"
									/>
								</div>
								<div className={style.experience__column}>
									<Experience
										date="2023-24"
										text="Developer front-end React/Next.js consultant at Hubvisory, a Paris-based product consulting agency."
									/>
									<Experience
										date="2022"
										text="Work at Ferway on the creation of V1.5 of a SaaS (React - Firebase) payroll management product."
									/>
								</div>
								<div className={style.experience__column}>
									<Experience
										date="2020-21"
										text="Freelance contract at the international headquarters of the Bank - Crédit Mutuel. Creation of several features in javascript vanilla. Development of a V2 in collaboration with the design and DA teams."
									/>
									<Experience
										date="2020-22"
										text="Full-stack developer initially before switching to a front-end focus. Contract in various industries ( e-commerce, banking & insurance, robotics ... ) collaborating with various customers and developers on a variety of exciting projects."
									/>
								</div>
							</div>
							<div className={style.skills__container}>
								<h1>Skills</h1>
								<div className={style.skills__wrapper}>
									<Skills
										category="front-end"
										skills={["Next 13&14", "TypeScript", "React", "TanStack", "Tailwind", "SASS"]}
									/>
									<Skills
										category="others"
										skills={[
											"Github",
											"Gitlab",
											"Firebase",
											"Npm",
											"Pnpm",
											"Yarn",
											"Vite",
											"Vercel",
											"Figma",
										]}
									/>
									<Skills category="soft skills" skills={["Jira", "Notion"]} />
									<Skills
										category="Good experiences"
										skills={[
											"Next12",
											"xState",
											"GSAP",
											"MongoDB",
											"Jquery",
											"MUI",
											"styled-components",
											"Emotion",
										]}
									/>
									<Skills
										category="little experiences"
										skills={["C#", "Python", "Django", "RubyOnRails"]}
									/>
									<Skills
										category="work methodologies"
										skills={[
											"Communication",
											"Scrum",
											"Kanban",
											"Agile",
											"Pair programming",
											"Crunch",
										]}
									/>
								</div>
							</div>
						</div>
					</AnimatedLayout>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default GetToKnowMe;
