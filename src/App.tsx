import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import image1 from "./assets/image-1.jpg";
import image2 from "./assets/image-2.jpg";
import image3 from "./assets/image-3.jpg";
import image4 from "./assets/image-4.jpg";
import image5 from "./assets/image-5.jpg";
import NavBar from "./components/nav-bar";

function App() {
	const [showLoader, setShowLoader] = React.useState(true);
	const imageList = [image4, image2, image3, image5, image1];

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoader(false);
		}, 4000);

		return () => clearTimeout(timer);
	});

	// const textHeader = {
	// 	initial: {

	// 	},
	// 	animate: {
	// 		opacity: 1,
	// 		y: 0,
	// 		transition: {
	// 			duration: 1,
	// 			delay: 0.3,
	// 			ease: "easeInOut",
	// 		},
	// 	},
	// };

	const scrollButton = {
		initial: {
			opacity: 0,
			scale: 0,
		},
		animate: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1,
				delay: 1.5,
				delayChildren: 2.5,
			},
		},
	};

	const scrollButtonText = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};

	return (
		<div className="container">
			{/* <AnimateSharedLayout> */}
			<AnimatePresence>
				{showLoader ? (
					<motion.div key="loader" className="wrapper" onAnimationComplete={() => setShowLoader(false)}>
						{imageList.map((image, index) => {
							return (
								<motion.img
									initial={{
										opacity: 0,
										y: 100,
									}}
									animate={{
										opacity: 1,
										y: 0,
										transition: {
											duration: 1,
											delay: index * 0.5,
											ease: "easeInOut",
										},
									}}
									exit={{
										opacity: 0,
										y: -100,
										transition: {
											duration: 0.5,
											delay: index * 0.2,
											ease: "easeInOut",
										},
									}}
									src={image}
									alt={`image-${index + 1}`}
									key={index}
								/>
							);
						})}
					</motion.div>
				) : (
					<>
						<NavBar />
						<div
							style={{
								marginTop: "50px",
								position: "absolute",
								display: "flex",
								flexDirection: "column",
								top: "15%",
							}}
						>
							{Array.from(["brand", "experience", "studio"]).map((item, index) => (
								<motion.span
									initial={{
										opacity: 0,
										y: 50,
									}}
									animate={{
										opacity: 1,
										y: 0,
										transition: {
											duration: index * 0.7,
											delay: 0.3,
											ease: "easeInOut",
											staggerChildren: 0.5,
										},
									}}
									className="header-text"
									key={index}
									style={{
										// overflowY: "hidden",
										paddingLeft: `${index === 0 ? 0 : index === 1 ? 160 : 420}px`,
									}}
								>
									{Array.from(item).map((letter, index) => (
										<motion.span
											key={index}
											initial={{
												opacity: 0,
												y: index * 50,
											}}
											animate={{
												opacity: 1,
												y: 0,
												transition: {
													duration: 1,
													// delay: index * 0.5,
													ease: "easeInOut",
												},
											}}
										>
											{letter}
										</motion.span>
									))}
								</motion.span>
							))}
						</div>

						<motion.div
							initial={{
								opacity: 0,
								y: 30,
							}}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 1,
									delay: 0.3,
									ease: "easeInOut",
								},
							}}
							style={{
								position: "absolute",
								right: "20%",
								top: "27%",
								maxWidth: "280px",
							}}
						>
							<p
								style={{
									fontSize: "20px",
									color: "rgb(55 65 81)",
									fontWeight: "600",
								}}
							>
								We are specialised in setting up the foundation of your brand and setting you up for success.
							</p>
						</motion.div>

						<div
							style={{
								position: "absolute",
								right: "105px",
								left: "105px",
								zIndex: "-1",
								bottom: "-110px",
								height: "250px",
							}}
						>
							<div
								style={{
									width: "100%",
									overflow: "hidden",
								}}
							>
								<img
									src={image2}
									alt="image"
									style={{
										width: "100%",
										aspectRatio: "16/9",
										height: "100%",
										objectFit: "cover",
									}}
								/>
							</div>
						</div>
						<motion.div
							variants={scrollButton}
							initial="initial"
							animate="animate"
							style={{
								position: "absolute",
								bottom: "11%",
								left: "9%",
								backgroundColor: "white",
								width: "120px",
								height: "120px",
								borderRadius: "50%",
								padding: "20px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								boxShadow: "0px 0px 50px #49494937",
							}}
						>
							<motion.span variants={scrollButtonText}>
								sroll
								<br /> down
							</motion.span>
						</motion.div>
					</>
				)}
			</AnimatePresence>
			{/* </AnimateSharedLayout> */}
		</div>
	);
}

export default App;
