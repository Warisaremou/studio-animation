import { motion } from "framer-motion";

export default function NavBar() {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: -80,
			}}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 1,
					delay: 1.5,
					ease: "easeInOut",
				},
			}}
			className="nav-bar"
		>
			<h1 className="logo">Ollie</h1>

			<ul className="nav-links">
				<li>
					<a href="#">Design</a>
				</li>
				<li>
					<a href="#">Strategy</a>
				</li>
				<li>
					<a href="#">Cases</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Why work with us ?</a>
				</li>
			</ul>

			<button className="cto">Let's work together</button>
		</motion.div>
	);
}
