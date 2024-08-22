import React, { useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import DetailTable from '../../components/detail/DetailTable/DetailTable';

import './DetailPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { SHOW_DETAIL } from '../../store/actions';

function DetailPage() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const item = useSelector((state) => state.selectedItem);

    useEffect(()=> {
      dispatch({ type: SHOW_DETAIL, payload: id });
    },[id])
    
    return (
      <div className="detail">
          <DetailTable data = {item ? item : []} />
      </div>
    );
  }
  
  export default DetailPage;
  