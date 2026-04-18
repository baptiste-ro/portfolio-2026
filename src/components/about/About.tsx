export default function () {
	return (
		<section
			className="relative w-full min-h-[60vh] overflow-hidden bg-transparent border-t border-black/5 pb-sm"
			id="about"
		>
			<div className="relative z-10 px-m md:px-12 gap-x-6">
				<div className="flex flex-start gap-10 flex-column text-lg md:text-xl font-light leading-relaxed space-y-8">
					<h3 className="flex flex-column flex-start md:text-[4.5vw] leading-[0.9] font-bold tracking-tighter uppercase font-sans white-text">
						HELLO
						<span className="text-[var(--color-secondary-theme)]">THERE !</span>
					</h3>
					<p className="text-left text-large white-text">
						My name is Baptiste Royer, and I'm a full-stack developer and
						computer science student. I really love the complexity and the
						organisation of a backend project, building logically structured
						code. And at the same time, I can't deny that creating something
						that I can see the visualisation of is a really pleasing sensation.
					</p>
					<p className="text-left text-large white-text">
						I don't fear long coding session, in fact, I don't even notice how
						time I spend working. Also, finding bugs is a source of frustration
						for most, but for me, it's more of a challenge that I'll gladly
						accept… Except when he is taunting me at 2 in the morning.
					</p>
					<p className="text-left text-large white-text">
						What grew me an interest in coding, is that creating things using
						words on a screen felt like doing dark magic. I started learning
						coding quite early, with the help of a family member that was a
						trainer in this field, enhancing my curiosity regarding
						technologies.
					</p>
					<p className="text-left text-large white-text">
						Even though I am still in the learning phase, I am confident that
						this is the path I want to follow, and that coding is a passion that
						will never fade
					</p>
				</div>
			</div>
		</section>
	);
}
