import { IWidgetConfig } from '@/components/widget/types/IWidgetConfig';

export interface IWidgetProps {
	config: IWidgetConfig;
	value: number;
	storeNewValue: (value: number) => void;
}

export interface IEditableWidgetProps extends IWidgetProps {
	isEdit: boolean;
	changeEdit: () => void;
}
