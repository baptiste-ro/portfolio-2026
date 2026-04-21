import en_form from '../../assets/texts/en/contact/form.json';
import fr_form from '../../assets/texts/fr/contact/form.json';

import en_socials from '../../assets/texts/en/contact/socials.json';
import fr_socials from '../../assets/texts/fr/contact/socials.json';

import en_title from '../../assets/texts/en/contact/title.json';
import fr_title from '../../assets/texts/fr/contact/title.json';

export const contactForm = {
	en: en_form,
	fr: fr_form,
};

export const contactSocials = {
	en: en_socials,
	fr: fr_socials,
};

export const contactTitle = {
	en: en_title,
	fr: fr_title,
};

export type ContactFormType = {
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

export type ContactSocialsType = {
	title: string;
};

export type ContactTitleType = {
	title: string;
};
