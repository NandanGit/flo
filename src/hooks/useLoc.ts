import { useLocalization } from '@nandn/loc';
import { Loc } from '../shared/types/Loc';

const useLoc = () => {
	const { loc } = useLocalization();

	return loc as unknown as Loc;
};

export default useLoc;
