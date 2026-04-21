import en_form from '../../assets/texts/en/contact/contact.json';
import fr_form from '../../assets/texts/fr/contact/contact.json';

export const contact = {
	en: en_form,
	fr: fr_form,
};

export type ContactType = {
	title: string;
	socials: {
		title: string;
	};
	form: {
		title: string;
		name: {
			label: string;
			placeholder: string;
		};
		email: {
			label: string;
			placeholder: string;
		};
		phone: {
			label: string;
			placeholder: string;
		};
		message: {
			label: string;
			placeholder: string;
		};
		submit: string;
	};
};

export type ContactFormType = ContactType["form"];