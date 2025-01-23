import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router";

const AnimatedLayout = ({ children }: { children: React.ReactNode }) => {
	let location = useLocation();
	const pathName = location.pathname;

	return (
		<AnimatePresence mode="wait">
			<motion.div
				layout
				key={pathName}
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default AnimatedLayout;
