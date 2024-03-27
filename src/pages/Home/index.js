import React, { useEffect, useState } from 'react'
import Table from '../../components/modules/datatable';
import Sidebar from '../../components/modules/Sidebar';
import { FaUser } from "react-icons/fa6";
import './style.css'
import { useDispatch } from 'react-redux';
import { handleCollapseButton } from '../../redux/reducers/collapseButton';
const Home = () => {
  const dispatch = useDispatch();
  const visibleCollapse = false
  // const [visibleCollapse, setVisibleCollapse] = useState(true)
  dispatch(handleCollapseButton(visibleCollapse));
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Assuming 768px as breakpoint for desktop

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className='main-content'>
      {isDesktop && <Sidebar />}
        <Table />
      </div>
    </>
  )
}

export default Home