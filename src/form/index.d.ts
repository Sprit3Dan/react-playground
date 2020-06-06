type error = string;

export type FormCTX = {
	onItemChange: (name: string) => (e: React.ChangeEvent<any>) => void;
	// itemValue: (forKey: string, isValid?: () => true | error) => any;
	// getItemValue: (forKey: string) => any;
	// itemValidationError: (forKey: string) => string | null;
};
