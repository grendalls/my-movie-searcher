import React, { useState, useEffect, useCallback } from 'react';
import classes from './infinite-scroll.css';

const InfiniteScroll = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = useCallback(() => {
    inter;
  }, []);
  useEffect(() => {}, [currentPage]);
  return <main className={classes.mainContent}></main>;
};

export default InfiniteScroll;
