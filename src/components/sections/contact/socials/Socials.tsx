import Github from './Github';
import Linkedin from './Linkedin';
import Mail from './Mail';
import Phone from './Phone';

export default function Socials({ title }: { title: string }) {
	return (
		<div className="text-lg font-bold shrink-0 bg-black-semi rounded-lg flex flex-col p-sm">
			<div className="p-inline-sm pt-sm-rem">
				<p className="leading-relaxed weight-md pb-sm text-justify font-lg white-text skill-title">
					{title}
				</p>
			</div>
			<div className="p-2 pt-0 space-y-4">
				<Mail />
				<Phone />
				<Linkedin />
				<Github />
			</div>
		</div>
	);
}
