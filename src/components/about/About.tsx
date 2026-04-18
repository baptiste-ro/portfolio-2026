export default function () {
	return (
		<section
			className="relative w-full min-h-[60vh] overflow-hidden bg-transparent border-t border-black/5 pb-sm"
			id="about"
		>
			<div className="relative z-10 px-m md:px-12 gap-x-6">
				<div className="flex flex-start gap-10 flex-column text-lg md:text-xl font-light leading-relaxed space-y-8">
					<h3 className="flex flex-column flex-start md:text-[4.5vw] leading-[0.9] font-bold tracking-tighter uppercase font-sans white-text">
						HI
						<span className="text-[var(--color-secondary-theme)]">THERE</span>
					</h3>
					<p className="text-left text-large white-text">
						{' '}
						I'm a software engineer and computer science student with broad
						interests across systems, tooling, and application development. I
						enjoy working close to how things actually function, whether that's
						building web applications, designing backend services, or writing
						small utilities.
					</p>
					<p className="text-left text-large white-text">
						A lot of my work happens on the web, using tools like React, Spring
						Boot, Java, Python, and JavaScript, but I don't treat the browser as
						the boundary. I care about data, performance, security and
						reliability across the entire system and overall tinkering with
						systems.
					</p>
					<p className="text-left text-large white-text">
						I build software because I enjoy the process of understanding a
						problem and making something that holds up under use while solving
						said problem.
					</p>
					<p className="text-left text-large white-text">
						When I'm not coding, I'm usually tinkering with my Linux setup,
						reading about new technologies, exploring open-source projects or
						gaming.
					</p>
				</div>
			</div>
		</section>
	);
}
