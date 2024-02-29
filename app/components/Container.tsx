import clsx from "clsx"
import type { FunctionComponent, ReactNode } from "react"
import styles from "./Container.module.css"

export type ContainerProps = {
	type?: "default" | "full"
	children: ReactNode
}

export const Container: FunctionComponent<ContainerProps> = ({
	type = "default",
	children,
}) => {
	return (
		<div className={clsx(styles.wrapper, styles[`is_size_${type}`])}>
			{children}
		</div>
	)
}
