import React, { useState } from "react";

const Checkbox = ({ label, checked, ...props }) => {
	const defaultChecked = checked ? checked : false;
	const [isChecked, setIsChecked] = useState(defaultChecked);
	return (
		<div className="checkbox">
			<label>
				<input
					id="checkbox"
					type="checkbox"
					checked={isChecked}
					onChange={() => setIsChecked((prev) => !prev)}
					className={isChecked ? "checked" : ""}
					{...props}
				/>
			</label>
			<span>{label}</span>
		</div>
	);
};
export default Checkbox;
