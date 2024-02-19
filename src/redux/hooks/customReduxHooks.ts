import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector = useSelector<RootState> as UseSelector<RootState>;
