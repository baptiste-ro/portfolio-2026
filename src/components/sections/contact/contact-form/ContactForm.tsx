import { useRef, useState } from 'react';

export default function ConntactForm() {
	const [phoneCode, setPhoneCode] = useState('+');
	const [phone, setPhone] = useState('');

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const phoneCodeRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);

	function handlePhoneCodeChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value.length <= 4 && /^\+[0-9]*$/.test(e.target.value)) {
			setPhoneCode(e.target.value);
		}
		if (!e.target.value) {
			setPhoneCode('+');
		}
	}

	function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value.length <= 15 && /^[0-9]*$/.test(e.target.value)) {
			setPhone(e.target.value);
		}
	}

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		const payload = {
			name: nameRef.current?.value || '',
			email: emailRef.current?.value || '',
			phone: `${phoneCodeRef.current?.value} ${phoneRef.current?.value}` || '',
			message: messageRef.current?.value || '',
		};

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});

			const data: { success?: boolean; error?: string } = await res.json();

			if (data.success) {
				setName('');
				setEmail('');
				setPhone('');
				setMessage('');
			} else {
			}
		} catch (err) {}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="text-lg font-bold grow-1 w-full bg-black-semi rounded-lg flex flex-col p-sm"
		>
			<div className="p-inline-sm pt-sm-rem">
				<p className="leading-relaxed weight-md text-justify font-lg white-text pb-rem-2 skill-title">
					Contact me
				</p>
			</div>
			<div className="flex flex-column p-inline-sm row-gap-sm pb-rem-sm">
				<div className="flex flex-column gap-xs text-left">
					<h3 className="font-1/75 line-1/25 text-left description-text weight-xlg">
						Name *
					</h3>
					<input
						id="name"
						ref={nameRef}
						required
						autoComplete="name"
						type="text"
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder="How should I call you ?"
						className="w-full contact-input white-text"
					/>
				</div>
				<div className="flex flex-row gap-sm">
					<div className="flex flex-column gap-xs text-left w-full">
						<h3 className="font-1/75 line-1/25 text-left description-text weight-xlg">
							Phone
						</h3>
						<div className="flex flex-row">
							<input
								id="phone"
								autoComplete="tel"
								type="text"
								ref={phoneCodeRef}
								className="shrink-0 w-15 contact-input radius-right-none white-text"
								placeholder="Code"
								value={phoneCode}
								onChange={handlePhoneCodeChange}
							/>
							<input
								id="phone"
								autoComplete="tel"
								type="text"
								ref={phoneRef}
								className="grow-1 contact-input radius-left-none white-text"
								placeholder="Your phone number"
								value={phone}
								onChange={handlePhoneChange}
							/>
						</div>
					</div>
					<div className="flex flex-column gap-xs text-left w-full">
						<h3 className="font-1/75 line-1/25 text-left description-text weight-xlg">
							Mail *
						</h3>
						<input
							required
							id="email"
							autoComplete="email"
							type="email"
							ref={emailRef}
							value={email}
							onChange={e => setEmail(e.target.value)}
							className="w-full contact-input white-text"
							placeholder="Your email"
						/>
					</div>
				</div>
				<div className="flex flex-column gap-xs text-left">
					<h3 className="font-1/75 line-1/25 text-left description-text weight-xlg">
						Message *
					</h3>
					<textarea
						id="message"
						required
						autoComplete="off"
						ref={messageRef}
						value={message}
						onChange={e => setMessage(e.target.value)}
						className="w-full contact-input white-text"
						rows={4}
						placeholder="What would you like to say ?"
					></textarea>
				</div>
				<button
					type="submit"
					className="translate-icons w-full text-center white-text font-lg border-none cursor-pointer"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
