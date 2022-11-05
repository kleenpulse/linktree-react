import React, { useState } from "react";

const Checkbox = ({ label, checked, ...props }) => {
	const defaultChecked = checked ? checked : false;
	const [isChecked, setIsChecked] = useState(defaultChecked);
	return (
		<div className="checkbox input-control">
			<label>
				<input
					required
					id="checkbox"
					type="checkbox"
					checked={isChecked}
					onChange={() => setIsChecked((prev) => !prev)}
					className={isChecked ? "checked" : ""}
					{...props}
				/>
				<div class="error" data-error="Please click this box to processedw"></div>
			</label>
			<span>{label}</span>
		</div>
	);
};
export default Checkbox;
