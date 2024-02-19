export type ReduxDataStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type ReduxState<T> = T & {
	status: ReduxDataStatus;
	error: string | undefined;
};
