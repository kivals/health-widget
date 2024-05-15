'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import pagesData from '@/config/pages';

import styles from './Header.module.scss';

const navLinks = Array.from(pagesData.values());

export function Header() {
	const pathname = usePathname();

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				{navLinks.map(link => (
					<li key={link.name}>
						<Link
							className={clsx(
								styles.link,
								pathname.startsWith(link.url) && styles.active
							)}
							href={link.url}
						>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
