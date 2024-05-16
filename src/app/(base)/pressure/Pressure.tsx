'use client';

import { BigWidget } from '@/components/widget/BigWidget/BigWidget';
import { CompactWidget } from '@/components/widget/CompactWidget/CompactWidget';

import { useAppContext } from '@/context';

export function Pressure() {
	const { size } = useAppContext();
	return size === 'lg' ? <BigWidget /> : <CompactWidget />;
}
