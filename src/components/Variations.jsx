// src/components/Variations.jsx
import { motion } from 'motion/react';
import './Variations.css';

const Variations = () => {
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
					Variations of the word art
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
					<a href="https://www.merriam-webster.com/dictionary/artist" target="_blank" rel="noreferrer">
						<strong>
							<i>Artist: </i>
						</strong>
					</a>
					<span>the person who creates art</span>
				</div>
				<div className="definition">
					<a
						href="https://dictionary.cambridge.org/dictionary/english/artistic"
						target="_blank"
						rel="noreferrer"
					>
						<strong>
							<i>Artistic: </i>
						</strong>
					</a>
					<span>skilfully and attractively made</span>
				</div>
				<div className="definition">
					<a
						href="https://dictionary.cambridge.org/dictionary/english/artful"
						target="_blank"
						rel="noreferrer"
					>
						<strong>
							<i>Artful: </i>
						</strong>
					</a>
					<span>clever and skilful</span>
				</div>
				<div className="definition">
					<a href="https://www.merriam-webster.com/dictionary/artless" target="_blank" rel="noreferrer">
						<strong>
							<i>Artless: </i>
						</strong>
					</a>
					<span>lacking art, knowledge, or skill</span>
				</div>
				<div className="definition">
					<a
						href="https://dictionary.cambridge.org/dictionary/english/artisan"
						target="_blank"
						rel="noreferrer"
					>
						<strong>
							<i>Artisan: </i>
						</strong>
					</a>
					<span>someone who does skilled work with their hands</span>
				</div>
			</motion.div>
			<motion.div
				className="fullscreen-title"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<motion.h2 initial={{ scale: 0.7 }} whileInView={{ scale: 0.9 }} transition={{ duration: 1 }}>
					These variations of the word art imply the necessity of skill in order to create a piece of art. In
					my opinion, they get one thing right, that art is not about talent, but I wouldn&apos;t say that
					skill is required to create art. As art is the representation of an idea, thought or imagination,
					only the effort of manifesting it is needed. Of course, art is a subjective matter so human
					perception also plays a role in this regard. Therefore, I would say that skill may be needed to
					create <i className="emphasis">great</i> art (approved by a wider audience), but to just create art,
					no skill is required. <strong className="red-emphasis">*</strong>
				</motion.h2>
			</motion.div>
			<motion.h3 initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }}>
				<strong className="red-emphasis">*</strong> Idea approved by my girlfriend, my mom and my dad 🙂
			</motion.h3>
		</section>
	);
};

export default Variations;
