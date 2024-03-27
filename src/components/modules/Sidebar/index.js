import React, { useState } from 'react'
import Table from '../datatable';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { FaAlignCenter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import './sidebar.css'
import Multiselect from 'multiselect-react-dropdown';
import { useSelector } from 'react-redux';
const Sidebar = () => {
    const { isVisible } = useSelector((state) => state.collapseButton)
    console.log(isVisible, "rahatttt");
    const [collapsed, setCollapsed] = useState(false);
    // const [visibleCollapse, setVisibleCollapse] = useState(false)
    // console.log(visibleCollapse, "Abra ka dabra")
    console.log(collapsed, "collapsed");

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
        const updateEvent = new CustomEvent('collapse', { detail: collapsed });
        window.dispatchEvent(updateEvent);
        console.log(collapsed, "setCollapsed");

    };
    const objectArray = [{ key: "Iqra" },
    { key: "Ravieha" },
    { key: "Heeloo" },
    { key: "ajdjd" },
    { key: "test" }];
    return (
        <>
            {!isVisible ? (
                <div className={`side-bar ${collapsed ? 'collapsed' : ''}`}>
                    <div className="logo-name-wrapper">
                        <h2 className={`filter-text ${collapsed ? 'collapsed' : ''}`}>
                            Filters
                        </h2>
                        <button className={`toggle-button ${collapsed ? 'collapsed' : ''}`} onClick={toggleSidebar}>
                            <i className="toggle-icon">
                                {collapsed ? <FaAlignCenter /> : <BsArrowBarLeft />}
                            </i>
                        </button>
                    </div>
                    {!collapsed && (
                        <>
                            <form class="form-inline">
                                <i class="bi bi-search mx-1"><CiSearch /></i>
                                <input class="form-control form-control-sm ml-3" type="text" placeholder="Search" aria-label="Search" />
                            </form>

                            <div className='my-4'>
                                <h3 className='sidebar-sec-heading'>Contacts</h3>
                                <Dropdown className='filter-dropdown  my-3'>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Contact Name and Email
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Form inline className='form-inline search-form'>
                                            <Form.Control
                                                type="text"
                                                placeholder="Search"
                                                className=" mr-sm-2"
                                            />

                                            <Button type="submit" className='search-btn-icon'>
                                                <i class="bi bi-search"><CiSearch /></i>
                                            </Button>

                                        </Form>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className='filter-dropdown  my-3'>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Job Title AND role
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Form className='form-dropdown'>
                                            <Form.Check type="checkbox" label="Auditor Assistant" id="option1" />
                                            <Form.Check type="checkbox" label="Consulting Assistant" id="option2" />
                                            <Form.Check type="checkbox" label="Database Designer" id="option3" />
                                            <Form.Check type="checkbox" label="DataEntry Specialist" id="option4" />
                                            <Form.Check type="checkbox" label="Graphic designer" id="option5" />
                                            <Form.Check type="checkbox" label="Information Assistant" id="option6" />
                                        </Form>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className='my-4'>
                                <h3 className='sidebar-sec-heading'>Companies</h3>
                                <Dropdown className='filter-dropdown  my-3'>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Company name
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Form inline className='form-inline search-form'>
                                            <Form.Control
                                                type="text"
                                                placeholder="Search"
                                                className=" mr-sm-2"
                                            />

                                            <Button type="submit" className='search-btn-icon'>
                                                <i class="bi bi-search"><CiSearch /></i>
                                            </Button>

                                        </Form>
                                        <Form className='form-dropdown'>
                                            <Form.Check type="checkbox" label="Advice Cycle" id="option1" />
                                            <Form.Check type="checkbox" label="Stackit" id="option2" />
                                            <Form.Check type="checkbox" label="Datacove" id="option3" />
                                            <Form.Check type="checkbox" label="Techip" id="option4" />
                                            <Form.Check type="checkbox" label="Cyberhead" id="option5" />
                                            <Form.Check type="checkbox" label="Workbyte" id="option6" />
                                            <Form.Check type="checkbox" label="Netflow" id="option7" />
                                            <Form.Check type="checkbox" label="Quantdata" id="option8" />
                                        </Form>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className='filter-dropdown  my-3'>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Industry
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Form className='form-dropdown'>
                                            <Form.Check type="checkbox" label="Agriculture" id="option1" />
                                            <Form.Check type="checkbox" label="Construction" id="option2" />
                                            <Form.Check type="checkbox" label="Education" id="option3" />
                                            <Form.Check type="checkbox" label="Financial Services" id="option4" />
                                            <Form.Check type="checkbox" label="Textiles" id="option5" />
                                            <Form.Check type="checkbox" label="Information Technology" id="option6" />
                                        </Form>

                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className='filter-dropdown  my-3'>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Employee Count
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Form className='form-dropdown'>
                                            <Form.Check type="checkbox" label="10-25" id="option1" />
                                            <Form.Check type="checkbox" label="30-50" id="option2" />
                                            <Form.Check type="checkbox" label="70-100" id="option3" />
                                            <Form.Check type="checkbox" label="100-200" id="option4" />
                                        </Form>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            {/* <Multiselect
                                options={objectArray}
                                displayValue="key"
                                showCheckbox={true}
                            /> */}
                        </>
                    )}
                </div>
            ) : (
                <div className='side-bar'>
                    <div className="logo-name-wrapper">
                        <h2 className='filter-text'>
                            Filters
                        </h2>
                        {/* <button className={`toggle-button ${collapsed ? 'collapsed' : ''}`} onClick={toggleSidebar}>
                            <i className="toggle-icon">
                                {collapsed ? <FaAlignCenter /> : <BsArrowBarLeft />}
                            </i>
                        </button> */}
                    </div>
                    <>
                    <form class="form-inline">
                        <i class="bi bi-search"><CiSearch /></i>
                        <input class="form-control form-control-sm ml-3" type="text" placeholder="Search" aria-label="Search" />
                    </form>

                    <div className='my-5'>
                        <h3 className='sidebar-sec-heading'>Contacts</h3>
                        <Dropdown className='filter-dropdown  my-3'>
                            <Dropdown.Toggle id="dropdown-basic">
                                Contact Name and Email
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Form inline className='form-inline search-form'>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />

                                    <Button type="submit" className='search-btn-icon'>
                                        <i class="bi bi-search"><CiSearch /></i>
                                    </Button>

                                </Form>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='filter-dropdown  my-3'>
                            <Dropdown.Toggle id="dropdown-basic">
                                Job Title AND role
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Form className='form-dropdown'>
                                    <Form.Check type="checkbox" label="Auditor Assistant" id="option1" />
                                    <Form.Check type="checkbox" label="Consulting Assistant" id="option2" />
                                    <Form.Check type="checkbox" label="Database Designer" id="option3" />
                                    <Form.Check type="checkbox" label="DataEntry Specialist" id="option4" />
                                    <Form.Check type="checkbox" label="Graphic designer" id="option5" />
                                    <Form.Check type="checkbox" label="Information Assistant" id="option6" />
                                </Form>

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className='my-5'>
                        <h3 className='sidebar-sec-heading'>Companies</h3>
                        <Dropdown className='filter-dropdown  my-3'>
                            <Dropdown.Toggle id="dropdown-basic">
                                Company name
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Form inline className='form-inline search-form'>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />

                                    <Button type="submit" className='search-btn-icon'>
                                        <i class="bi bi-search"><CiSearch /></i>
                                    </Button>

                                </Form>
                                <Form className='form-dropdown'>
                                    <Form.Check type="checkbox" label="Advice Cycle" id="option1" />
                                    <Form.Check type="checkbox" label="Stackit" id="option2" />
                                    <Form.Check type="checkbox" label="Datacove" id="option3" />
                                    <Form.Check type="checkbox" label="Techip" id="option4" />
                                    <Form.Check type="checkbox" label="Cyberhead" id="option5" />
                                    <Form.Check type="checkbox" label="Workbyte" id="option6" />
                                    <Form.Check type="checkbox" label="Netflow" id="option7" />
                                    <Form.Check type="checkbox" label="Quantdata" id="option8" />
                                </Form>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='filter-dropdown  my-3'>
                            <Dropdown.Toggle id="dropdown-basic">
                                Industry
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Form className='form-dropdown'>
                                    <Form.Check type="checkbox" label="Agriculture" id="option1" />
                                    <Form.Check type="checkbox" label="Construction" id="option2" />
                                    <Form.Check type="checkbox" label="Education" id="option3" />
                                    <Form.Check type="checkbox" label="Financial Services" id="option4" />
                                    <Form.Check type="checkbox" label="Textiles" id="option5" />
                                    <Form.Check type="checkbox" label="Information Technology" id="option6" />
                                </Form>

                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='filter-dropdown  my-3'>
                            <Dropdown.Toggle id="dropdown-basic">
                                Employee Count
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Form className='form-dropdown'>
                                    <Form.Check type="checkbox" label="10-25" id="option1" />
                                    <Form.Check type="checkbox" label="30-50" id="option2" />
                                    <Form.Check type="checkbox" label="70-100" id="option3" />
                                    <Form.Check type="checkbox" label="100-200" id="option4" />
                                </Form>

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    {/* <Multiselect
                        options={objectArray}
                        displayValue="key"
                        showCheckbox={true}
                    /> */}
                </>

                </div>
            )}
        </>
    );
};

export default Sidebar; 