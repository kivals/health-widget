import { Metadata } from 'next';

import pagesData from '@/config/pages';

import { Charts } from '@/app/charts/Charts';

const pageData = pagesData.get('Charts');

export const metadata: Metadata = {
	title: pageData?.title
};

export default function PulsePage() {
	return (
		<div>
			<Charts />
		</div>
	);
}
