import { type ContactFormType } from '../../../../types/languages/contact';

interface Props {
	formValues: ContactFormType;
	useStates: any;
	useRefs: any;
	handlePhoneCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

export default function ConntactForm({
	formValues,
	useStates,
	useRefs,
	handlePhoneCodeChange,
	handlePhoneChange,
	handleSubmit,
}: Props) {
	return (
		<form
			onSubmit={handleSubmit}
			className="text-lg font-bold grow-1 w-full bg-black-semi rounded-lg flex flex-col p-sm"
		>
			<div className="p-inline-sm pt-sm-rem">
				<p className="leading-relaxed weight-md text-justify font-lg white-text pb-rem-2 skill-title">
					{formValues?.title}
				</p>
			</div>
			<div className="flex flex-column p-inline-sm row-gap-sm pb-rem-sm">
				<div className="flex flex-column gap-xs text-left">
					<h3 className="font-1/75 line-1/25 text-left description-text weight-xlg">
						{formValues?.name.label}
					</h3>
					<input
						id="name"
						ref={useRefs.nameRef}
						required
						autoComplete="name"
						type="text"
						value={useStates.name.value}
						onChange={e => useStates.name.setValue(e.target.value)}
						placeholder={formValues?.name.placeholder}
						className="w-full contact-input white-text"
					/>
				</div>
				<div className="flex flex-row gap-sm">
					<div className="flex flex-column gap-xs text-left w-full">
						<h3 className="font-1/75 line-1/25 text-left description-text weight-xlg">
							{formValues?.phone.label}
						</h3>
						<div className="flex flex-row">
							<input
								id="phone"
								autoComplete="tel"
								type="text"
								ref={useRefs.phoneCodeRef}
								className="shrink-0 w-15 contact-input radius-right-none white-text"
								placeholder="Code"
								value={useStates.phoneCode.value}
								onChange={handlePhoneCodeChange}
							/>
							<input
								id="phone"
								autoComplete="tel"
								type="text"
								ref={useRefs.phoneRef}
								className="grow-1 contact-input radius-left-none white-text"
								placeholder={formValues?.phone.placeholder}
								value={useStates.phone.value}
								onChange={handlePhoneChange}
							/>
						</div>
					</div>
					<div className="flex flex-column gap-xs text-left w-full">
						<h3 className="font-1/75 line-1/25 text-left description-text weight-xlg">
							{formValues?.email.label}
						</h3>
						<input
							required
							id="email"
							autoComplete="email"
							type="email"
							ref={useRefs.emailRef}
							value={useStates.email.value}
							onChange={e => useStates.email.setValue(e.target.value)}
							className="w-full contact-input white-text"
							placeholder={formValues?.email.placeholder}
						/>
					</div>
				</div>
				<div className="flex flex-column gap-xs text-left">
					<h3 className="font-1/75 line-1/25 text-left description-text weight-xlg">
						{formValues?.message.label}
					</h3>
					<textarea
						id="message"
						required
						autoComplete="off"
						ref={useRefs.messageRef}
						value={useStates.message.value}
						onChange={e => useStates.message.setValue(e.target.value)}
						className="w-full contact-input white-text"
						rows={4}
						placeholder={formValues?.message.placeholder}
					></textarea>
				</div>
				<button
					type="submit"
					className="translate-icons w-full text-center white-text font-lg border-none cursor-pointer"
				>
					{formValues?.submit}
				</button>
			</div>
		</form>
	);
}
