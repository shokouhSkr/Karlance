import { Dispatch, SetStateAction } from "react";
import { RegisterOptions } from "react-hook-form";

export interface SendOTPPropType {
	isSendingOTP: boolean;
	onSendOTP: any;
	register: any;
}

export interface CheckOTPPropType {
	phoneNumber: string;
	onBack: Dispatch<SetStateAction<number>>;
	onResendOTP: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
	otpResponse: any;
}

export interface ProposalChangeStatusPropType {
	proposalId: string;
	onClose: () => void;
}

export interface ChangeUserStatusPropType {
	userId: string;
	onClose: () => void;
}

export interface TextFieldPropType {
	label: string;
	name: string;
	validationSchema?: RegisterOptions;
	register: any;
	error?: any;
	required?: boolean;
	type?: string;
}

export interface ProjectDeletePropType {
	resourceName: string;
	disabled: boolean;
	onClose: () => void;
	onDelete: any;
	isDeleting: boolean;
	// onConfirm: (id: string, options: { onSuccess: () => void }) => void;
}

export interface ProjectFormPropType {
	onClose: () => void;
	projectToEdit?: any;
}

export interface ProposalPropType {
	proposal: any;
	index: number;
}

export interface NavLink {
	title: string;
	path: string;
	icon: React.ReactElement;
}

export interface DarkModeContextType {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}

export interface FilterPropType {
	options: { value: string; label: string }[];
	filterField: string;
}

export interface FilterSelectPropType {
	options: { value: string; label: string }[];
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
