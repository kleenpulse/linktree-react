import React, { useState } from "react";
import Footer from "../components/Footer";
import Checkbox from "../components/Checkbox";
import "./Contact.scss";

const Contact = () => {
	const [val, setVal] = useState("");
	const name = "Isaac Gideon";

	function onChange(e) {
		setVal((e.target.value = `Hey ${name}, hope you are doing great. Let us collaborate on project axyz.`));
	}

	return (
		<div className="app__contact">
			<div className="app__contact-form">
				<form action="#">
					<div className="app__contact-title">
						<h2 className="bold-text">Contact Me</h2>
						<p className="contact-text">
							Hi there, contact me to ask about anything you have in mind.
						</p>
					</div>
					<div className="input-text">
						<div className="input-text-1">
							<label htmlFor="first_name">First name</label>
							<input
								type="text"
								name="first_name"
								id="first_name"
								placeholder="Enter your first name"
							/>
						</div>

						<div className="input-text-2">
							<label htmlFor="last_name">Last name</label>
							<input
								type="text"
								id="last_name"
								name="last_name"
								placeholder="Enter your last name"
							/>
						</div>
					</div>
					<div className="email">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="yourname@email.com"
						/>
					</div>
					<div className="msg">
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							placeholder="Send me a message and I'll reply you as soon as possible..."
							onFocus={onChange}
							defaultValue={val}
						></textarea>
					</div>
					<div className="checkbox">
						<Checkbox
							label={`You agree to providing your data to ${name} who may contact you.`}
						/>
					</div>
					<div className="btn">
						<button id="btn__submit">Send message</button>
					</div>
				</form>
			</div>

			<Footer />
		</div>
	);
};

export default Contact;
