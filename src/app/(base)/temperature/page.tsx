import { Metadata } from 'next';

import pagesData from '@/config/pages';

import { Temperature } from '@/app/(base)/temperature/Temperature';

const pageData = pagesData.get('Temperature');

export const metadata: Metadata = {
	title: pageData?.title
};

export default function Page() {
	return (
		<div>
			<Temperature />
		</div>
	);
}
