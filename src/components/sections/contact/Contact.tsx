import ContactForm from './contact-form/ContactForm';
import Socials from './socials/Socials';

export default function Contact() {
	return (
		<section className="pb-sm px-sm w-full">
			<div className="title">
				<p className="leading-relaxed white-text pb-sm skill-title">
					How to reach me ?
				</p>
			</div>
			<div className="flex flex-row gap-smx row-gap-md">
				<Socials />
				<ContactForm />
			</div>
		</section>
	);
}
