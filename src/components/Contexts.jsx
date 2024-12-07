// src/components/Contexts.jsx
import { motion, useScroll, useTransform } from 'motion/react';
import './Contexts.css';

const Contexts = () => {
	const { scrollYProgress } = useScroll();
	const rotate = useTransform(scrollYProgress, [0.5, 0.8], ['0deg', '10deg']);

	return (
		<section className="section">
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
					Art in different contexts
				</motion.h1>
			</motion.div>
			<motion.div
				className="definition-container"
				style={{ rotate }}
				initial={{ opacity: 0, translateY: 50 }}
				whileInView={{ opacity: 1, translateY: 0 }}
				transition={{ duration: 1 }}
				viewport={{ amount: 0.5 }}
			>
				<div className="definition">
					<strong>Museum Context: </strong>
					<span>
						Art is an interactive experience, shaped by the design of exhibitions, the viewer&apos;s
						engagement, and the social setting, which influence its appreciation and emotional impact.
					</span>
				</div>
				<div className="definition">
					<strong>Natural Environments: </strong>
					<span>
						Art often aligns with the innate human tendency to find beauty in nature, evoking peace,
						connection, and positive emotional responses.
					</span>
				</div>
				<div className="definition">
					<strong>Urban/Built Environments: </strong>
					<span>
						Art in cities and architecture enhances aesthetic appreciation while influencing social
						behaviors and relationships through designed spaces.
					</span>
				</div>
				<div className="definition">
					<strong>Ecological Contexts: </strong>
					<span>
						Art in everyday or ecological settings becomes a multidimensional experience, linked to
						emotional resonance, intellectual engagement, and a sense of discovery.
					</span>
				</div>
				<div className="definition">
					<strong>Laboratory Settings: </strong>
					<span>
						Art is studied as a cognitive and emotional process, often losing the richness of context but
						allowing for controlled insights into perception and reaction.
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
					Impossible Contexts
				</motion.h1>
			</motion.div>
			<motion.h2 initial={{ scale: 0.7 }} whileInView={{ scale: 0.9 }} transition={{ duration: 1 }}>
				I believe that every piece of creation and everything that surrounds us is a form of art… Therefore I
				cannot think of any <i>&quot;impossible&quot;</i> context for art, but what does AI think about it? So,
				I asked ChatGPT and it gave me the following 2 <i>&quot;impossible&quot;</i> contexts:
			</motion.h2>
			<motion.div
				className="definition-container"
				initial={{ opacity: 0, translateY: 50 }}
				whileInView={{ opacity: 1, translateY: 0 }}
				transition={{ duration: 1 }}
				viewport={{ amount: 0.5 }}
			>
				<div className="definition">
					<strong>A Void or Total Isolation: </strong>
					<span>
						A piece of art placed in an entirely inaccessible location, like the vacuum of space far beyond
						human reach or instruments to detect it, would challenge its existence as <i>&quot;art&quot;</i>{' '}
						since it would lack an audience to engage with it.
					</span>
				</div>
				<div className="definition">
					<strong>A Context Without Cognition: </strong>
					<span>
						Environments inhabited solely by beings incapable of perceiving or interpreting stimuli (e.g.,
						purely mechanical systems or unreactive matter) would render art meaningless.
					</span>
				</div>
			</motion.div>
		</section>
	);
};

export default Contexts;
