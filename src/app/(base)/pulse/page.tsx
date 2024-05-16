import { Metadata } from 'next';

import pagesData from '@/config/pages';

import { Pulse } from '@/app/(base)/pulse/Pulse';

const pageData = pagesData.get('Pulse');

export const metadata: Metadata = {
	title: pageData?.title
};

export default function PulsePage() {
	return (
		<div>
			<Pulse />
		</div>
	);
}
