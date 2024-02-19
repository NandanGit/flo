/**
 * Create a loading spinner component
 */

import React from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material';

export interface LoadingSpinnerProps extends CircularProgressProps {
	loading: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
	loading,
	...props
}) => {
	return loading ? <CircularProgress size='1rem' {...props} /> : null;
};
