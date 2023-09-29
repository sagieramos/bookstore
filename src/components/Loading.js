import React from 'react';
import { useSelector } from 'react-redux';
import Indicator from './Indicator';
import './Loading.scss';

const Loading = () => {
  const statusAdd = useSelector((store) => store.book.statusAdd);
  const statusRemove = useSelector((store) => store.book.statusRemove);
  // 'idle' | 'loading' | 'succeeded' | 'failed'
  let content = null;

  if (statusAdd === 'loading' || statusRemove === 'loading') {
    content = (
      <div className="status-container">
        <Indicator wrapperClass="status" />
      </div>
    );
  }

  return content;
};

export default Loading;
