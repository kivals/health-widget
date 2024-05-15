import type { Metadata } from 'next';

import pagesData from '@/config/pages';

import { Pressure } from '@/app/(base)/pressure/Pressure';

const pageData = pagesData.get('Pressure');

export const metadata: Metadata = {
	title: pageData?.title
};

export default function Page() {
	return (
		<div>
			<Pressure />
		</div>
	);
}
