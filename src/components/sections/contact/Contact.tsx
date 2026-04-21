import ContactForm from './contact-form/ContactForm';
import Socials from './socials/Socials';
import { type ContactType } from '../../../types/languages/contact';

interface ContactProps {
	contact: ContactType;
	useStates: any;
	useRefs: any;
	handlePhoneCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

export default function Contact({
	contact,
	useStates,
	useRefs,
	handlePhoneCodeChange,
	handlePhoneChange,
	handleSubmit,
}: ContactProps) {
	return (
		<section className="pb-sm px-sm w-full">
			<div className="title">
				<p className="leading-relaxed white-text pb-sm skill-title">
					{contact.title}
				</p>
			</div>
			<div className="flex flex-row gap-smx row-gap-md">
				<Socials title={contact.socials.title} />
				<ContactForm
					formValues={contact.form}
					useStates={useStates}
					useRefs={useRefs}
					handlePhoneCodeChange={handlePhoneCodeChange}
					handlePhoneChange={handlePhoneChange}
					handleSubmit={handleSubmit}
				/>
			</div>
		</section>
	);
}
