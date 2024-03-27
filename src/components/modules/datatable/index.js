import React, { useMemo, useState, useEffect } from 'react'
import { faker } from '@faker-js/faker';
import DataTable from 'react-data-table-component';
import './style.css'
import Form from 'react-bootstrap/Form';
import FilterSidebar from '../filterComponent';
const Table = () => {

    // create fake user
    const createUser = () => ({
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
        bio: faker.lorem.sentence(),
    });
    const createUsers = (numUsers = 5) => new Array(numUsers).fill(undefined).map(createUser);
    const fakeUsers = createUsers(200);
    console.log(fakeUsers, "njoijonds")
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,
        },
        {
            name: 'Bio',
            selector: row => row.bio,
            sortable: true,
        },
    ];
    // filteration
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = fakeUsers.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    const handleClear = () => {
        if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
        }
    };


    function convertArrayOfObjectsToCSV(array) {
        let result;

        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(filteredItems[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        array.forEach(item => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];

                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    function downloadCSV(array) {
        const link = document.createElement('a');
        let csv = convertArrayOfObjectsToCSV(array);
        if (csv == null) return;

        const filename = 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }

        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }

    const Export = ({ onExport }) =>
        <button onClick={e => onExport(e.target.value)} className='prime-button'>Export</button>;
    const [collapse, setCollapse] = useState(false);
    useEffect(() => {

        const handleCollapse = (event) => {
            const collapseStatus = event.detail;
            console.log(collapseStatus, "collapseeeeeeeee");
            setCollapse(collapseStatus);
        };
        window.addEventListener('collapse', handleCollapse);
        return () => {
            window.removeEventListener('collapse', handleCollapse);
        };
    }, []);

  
    return (
        <>
            <div className='filter-table-content' style={{ width: `${collapse ? "75%" : "90%"}` }}>
                <div className='filter-header'>
                    <div className='search-filter'>
                        <FilterSidebar/>
                       <div className="input-wrapper"> <input
                            id="search"
                            type="text"
                            placeholder="Filter By Name"
                            aria-label="Search Input"
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                            className='search-input'
                        />
                        <button onClick={handleClear} className='search-button'>X</button>
                       </div>
                       
                       
                       
                    </div>

                    <div className='filter-head-side'>
                        <Export onExport={() => downloadCSV(filteredItems)} />

                        <Form.Select aria-label="Default select example" className='filter-select'>
                            <option>Sort By</option>
                            <option value="1">Relevance</option>
                            <option value="2">ASC</option>
                            <option value="3">DSC</option>
                        </Form.Select>

                    </div>

                </div>

                <DataTable
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                    subHeader
                    //  subHeaderComponent={subHeaderComponentMemo}
                    selectableRows
                    persistTableHead
                    // actions={actionsMemo}
                    className='data-table'
                />
            </div>

        </>
    )
}

export default Table