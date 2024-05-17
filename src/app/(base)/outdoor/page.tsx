import { Metadata } from 'next';

import pagesData from '@/config/pages';

import { Outdoor } from '@/app/(base)/outdoor/Outdoor';

const pageData = pagesData.get('Outdoor');

export const revalidate = 3600;

export const metadata: Metadata = {
	title: pageData?.title
};

export default function PulsePage() {
	return (
		<div>
			<Outdoor />
		</div>
	);
}
