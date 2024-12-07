// src/components/Introduction.jsx
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import './Introduction.css';

const Introduction = () => {
	const { scrollYProgress: progressScroll } = useScroll();
	const scaleX = useSpring(progressScroll, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.5]);

	return (
		<>
			<motion.div className="progress-bar" style={{ scaleX }} />
			<section className="section">
				<motion.div
					className="fullscreen-title"
					style={{ scale }}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<motion.h1
						className="center-title"
						initial={{ scale: 0.8 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 1 }}
					>
						What is Art?
					</motion.h1>
				</motion.div>
				<motion.div
					className="definition-container"
					initial={{ opacity: 0, translateY: 50 }}
					whileInView={{ opacity: 1, translateY: 0 }}
					transition={{ duration: 1 }}
					viewport={{ amount: 0.5 }}
				>
					<div className="definition">
						<a
							href="https://dictionary.cambridge.org/dictionary/english/art"
							target="_blank"
							rel="noreferrer"
						>
							<strong>
								<i>Definition 1: </i>
							</strong>
						</a>
						<span>
							Art is the making of objects, images, music, etc. that are beautiful or that express
							feelings.
						</span>
					</div>
					<div className="definition">
						<a
							href="https://www.oed.com/search/dictionary/?scope=Entries&q=art"
							target="_blank"
							rel="noreferrer"
						>
							<strong>
								<i>Definition 2: </i>
							</strong>
						</a>
						<span>
							Art is the expression or application of human creative skill and imagination, typically in a
							visual form such as painting or sculpture, producing works to be appreciated primarily for
							their beauty or emotional power.
						</span>
					</div>
				</motion.div>
				<motion.div
					className="fullscreen-title"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<motion.h1
						className="center-title"
						initial={{ scale: 0.8 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 1 }}
					>
						What does art mean to me?
					</motion.h1>
				</motion.div>
				<motion.div
					className="definition-container"
					initial={{ opacity: 0, translateY: 50 }}
					whileInView={{ opacity: 1, translateY: 0 }}
					transition={{ duration: 1 }}
					viewport={{ amount: 0.5 }}
				>
					<div className="definition mine">
						<span>
							Art is the embodiment of an idea or a manifestation of imagination, emotion, or thought
							brought to life through creative expression.
						</span>
					</div>
				</motion.div>
				<motion.div
					className="fullscreen-title"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<motion.h1
						className="center-title"
						initial={{ scale: 0.8 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 1 }}
					>
						What does art mean to others?
					</motion.h1>
				</motion.div>
				<motion.div
					className="definition-container"
					initial={{ opacity: 0, translateY: 50 }}
					whileInView={{ opacity: 1, translateY: 0 }}
					transition={{ duration: 1 }}
					viewport={{ amount: 0.5 }}
				>
					<div className="definition">
						<strong>My girlfriend: </strong>
						<span>Art is the expression of the soul, something to show what words cannot express.</span>
					</div>
					<div className="definition">
						<strong>My dad: </strong>
						<span>
							Art is something beautiful, pleasant, something that would make me linger in front of it or
							make me think a lot about it.
						</span>
					</div>
					<div className="definition">
						<strong>My mom: </strong>
						<span>Art is everything that you love.</span>
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default Introduction;
