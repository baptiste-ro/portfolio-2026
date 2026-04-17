export default function () {
	return (
		<section
			className="relative w-full min-h-[60vh] overflow-hidden bg-white border-t border-black/5"
			id="about"
		>
			<div className="relative z-10 py-32 px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-x-6">
				<div className="col-span-1 md:col-span-6 text-neutral-800 text-lg md:text-xl font-light leading-relaxed space-y-8">
					<h3 className="text-[10vw] md:text-[4.5vw] leading-[0.9] font-bold tracking-tighter uppercase font-sans text-neutral-900 mb-12">
						hI
						<br />
						<span className="text-neutral-400">THERE</span>
					</h3>
					<p>
						{' '}
						I'm a software engineer and computer science student with broad
						interests across systems, tooling, and application development. I
						enjoy working close to how things actually function, whether that's
						building web applications, designing backend services, or writing
						small utilities.
					</p>
					<p>
						A lot of my work happens on the web, using tools like React, Spring
						Boot, Java, Python, and JavaScript, but I don't treat the browser as
						the boundary. I care about data, performance, security and
						reliability across the entire system and overall tinkering with
						systems.
					</p>
					<p>
						I build software because I enjoy the process of understanding a
						problem and making something that holds up under use while solving
						said problem.
					</p>
					<p>
						When I'm not coding, I'm usually tinkering with my Linux setup,
						reading about new technologies, exploring open-source projects or
						gaming.
					</p>
				</div>
			</div>
		</section>
	);
}
