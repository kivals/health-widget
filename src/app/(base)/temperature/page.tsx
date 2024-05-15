import type { Metadata } from 'next';

import { Temperature } from '@/app/(base)/temperature/Temperature';

export const metadata: Metadata = {
	title: 'Temperature',
	description: 'Temperature page'
};

export default function TemperaturePage() {
	return <Temperature />;
}

/*export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
};

export default function DashboardPage() {
	return <div>DashboardPage</div>;
}*/
