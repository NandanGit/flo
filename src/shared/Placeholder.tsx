import { Skeleton } from '@mui/material';

interface PlaceholderProps extends React.ComponentProps<typeof Skeleton> {
	loading: boolean;
}

export const Placeholder: React.FC<PlaceholderProps> = ({
	children,
	loading,
	animation = 'pulse', // (wave | pulse) pulse is the default
	...rest
}) => {
	if (loading)
		return (
			<Skeleton animation={animation} {...rest}>
				{children}
			</Skeleton>
		);
	return <>{children}</>;
};
