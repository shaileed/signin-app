import { useEffect } from 'react';
import {Alert as Al} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import { setMessage } from '../../store/alertSlice';

const Alert = () => {
    const msg = useAppSelector(state=>state.alert.message);
    const dispatch = useDispatch();
    useEffect(()=>{
      if(msg && msg != ""){
        const timer = setTimeout(() => {
          dispatch(setMessage(""));
        }, 5000);
        return () => clearTimeout(timer);
      }
    },[msg])
    return <>
    {msg && 
        <Al variant="info">
          {msg}
        </Al>
    }
    </>

    
}

export default Alert;