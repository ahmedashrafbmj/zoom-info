import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaFilter } from "react-icons/fa6";
import Sidebar from '../Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateCollapseButton } from '../../../redux/reducers/collapseButton';
import './style.css'
const FilterSidebar = () => {
  const [show, setShow] = useState(false);
  const {isVisible} = useSelector((state) => state.collapseButton)
  const dispatch = useDispatch();
  console.log(isVisible,"rahatttt"); 
  const handleShow = () => {
    setShow(true);
    dispatch(UpdateCollapseButton(true));
  }
  const handleClose = () => {
    setShow(false);
    dispatch(UpdateCollapseButton(false));
  }
   
    // console.log(visibleCollapse, "iqraaa
  
//   const onClickSidebar = () => {
  
//     console.log(visibleCollapse, "iqraaa")
// }

  return (
    <>
      <Button onClick={handleShow} className='filter-icon'>
        {<FaFilter/>}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default FilterSidebar;