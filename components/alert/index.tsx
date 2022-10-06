import {Alert as Al} from 'react-bootstrap';
import { useAppSelector } from '../../hooks/hooks';

const Alert = () => {
    const msg = useAppSelector(state=>state.alert.message);
    return <>
    {msg && 
        <Al variant="info">
          {msg}
        </Al>
    }
    </>

    
}

export default Alert;