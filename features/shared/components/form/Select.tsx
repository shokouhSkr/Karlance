interface SelectPropType {
	label: string;
	name: string;
	register: any;
	options: any;
	required: boolean;
}

const Select = ({ label, name, register, options, required }: SelectPropType) => {
	return (
		<div>
			<label
				htmlFor={label}
				className="mb-2 block text-right pr-2 text-secondary-700 whitespace-nowrap"
			>
				{label} {required && <span className="text-error">*</span>}
			</label>

			<select id={name} {...register(name)} className="textField__input">
				{options.map((option: any) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
