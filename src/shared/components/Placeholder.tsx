import { Skeleton } from '@mui/material';

interface PlaceholderProps extends React.ComponentProps<typeof Skeleton> {
	loading: boolean;
}

export const Placeholder: React.FC<PlaceholderProps> = ({
	children,
	loading,
	animation = 'wave', // (wave | pulse) pulse is the default
	...rest
}) => {
	if (loading) {
		if (children === undefined)
			return (
				<Skeleton
					animation={animation}
					sx={{
						width: '50%',
						...rest.sx,
						// width: { xs: 200, sm: 300, md: 400, lg: 500, xl: 600 },
					}}
					{...rest}
				/>
			);
		return (
			<Skeleton animation={animation} {...rest}>
				{children}
			</Skeleton>
		);
	}
	return <>{children}</>;
};
