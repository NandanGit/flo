export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export type ReduxState<T> = T & {
	status: Status;
	error: string | undefined;
};
