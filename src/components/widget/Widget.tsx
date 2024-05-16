'use client';

import React, { FC, useState } from 'react';

import BigWidget from '@/components/widget/BigWidget/BigWidget';
import CompactWidget from '@/components/widget/CompactWidget/CompactWidget';
import { IWidgetProps } from '@/components/widget/types/IWidgetProps';

import { rangeValue } from '@/utils/common';

import { useAppContext } from '@/context';

const Widget: FC<IWidgetProps> = ({ config, value, storeNewValue }) => {
	const { size } = useAppContext();
	const [isEdit, setEdit] = useState<boolean>(false);

	const Compo = size === 'lg' ? BigWidget : CompactWidget;

	return (
		<Compo
			config={config}
			value={rangeValue(config.minValue, config.maxValue, value)}
			isEdit={isEdit}
			storeNewValue={storeNewValue}
			changeEdit={() => setEdit(prev => !prev)}
		/>
	);
};

export default Widget;
