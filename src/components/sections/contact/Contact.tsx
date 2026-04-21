import { useEffect, useState } from 'react';
import ContactForm from './contact-form/ContactForm';
import Socials from './socials/Socials';
import {
	contactTitle,
	type ContactSocialsType,
} from '../../../types/languages/contact';
import { useParams } from 'react-router';

export default function Contact() {
	const [title, setTitle] = useState<ContactSocialsType>(contactTitle.en);

	const { lang } = useParams() as { lang: string };

	useEffect(() => {
		setTitle(
			contactTitle[lang as keyof typeof contactTitle] || contactTitle.en
		);
	}, [lang]);

	return (
		<section className="pb-sm px-sm w-full">
			<div className="title">
				<p className="leading-relaxed white-text pb-sm skill-title">
					{title.title}
				</p>
			</div>
			<div className="flex flex-row gap-smx row-gap-md">
				<Socials />
				<ContactForm />
			</div>
		</section>
	);
}
