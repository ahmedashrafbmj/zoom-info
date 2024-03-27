import React, { useMemo, useState } from 'react'
import { faker } from '@faker-js/faker';
import DataTable from 'react-data-table-component';
import './style.css'
const Table = () => {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

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
    ];
    const createUser = () => ({
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
        bio: faker.lorem.sentence(),
    });
    const createUsers = (numUsers = 5) => new Array(numUsers).fill(undefined).map(createUser);
    const fakeUsers = createUsers(200);
    const filteredItems = fakeUsers.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    const FilterComponent = ({ filterText, onFilter, onClear }) => (
        <>
            <div className='search'>
                <input
                id="search"
                type="text"
                placeholder="Filter By Name"
                aria-label="Search Input"
                value={filterText}
                onChange={onFilter}
                className='search-input'
            />
                <button onClick={onClear} className='search-button'>X</button>
                </div>

        </>
    );
    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);
    return (
        <div>
            <DataTable
                title="Contact List"
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                selectableRows
                persistTableHead
            />

        </div>
    )
}

export default Table