'use client';

import React, { FC } from 'react';

import BigWidget from '@/components/widget/BigWidget/BigWidget';
import { CompactWidget } from '@/components/widget/CompactWidget/CompactWidget';
import { IWidgetProps } from '@/components/widget/IWidgetProps';

import { useAppContext } from '@/context';

const Widget: FC<IWidgetProps> = ({ config, value }) => {
	const { size } = useAppContext();

	return size === 'lg' ? (
		<BigWidget
			config={config}
			value={value}
		/>
	) : (
		<CompactWidget />
	);
};

export default Widget;
