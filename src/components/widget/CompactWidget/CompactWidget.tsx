import clsx from 'clsx';

import styles from './CompactWidget.module.scss';

export function CompactWidget() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={clsx(styles.title)}>Систолическое давление</h2>
			</div>
			<div className={styles.body}></div>
		</div>
	);
}
