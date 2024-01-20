import React from 'react';

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    const { name, testName, testCode, testPrice, testDate, _id, status } = booking;
    return (
        <tr>
            <th>
                <label>
                    {status === 'confirmed'?<></>:<> <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button></>}
                   
                </label>
            </th>
            <td>
                {testName}
            </td>
            <td>
                {name}
            </td>
            <td>{testCode}</td>
            <td>{testPrice}</td>
            <td>{testDate}</td>
            <th>
                {status === 'confirmed' ? <><button className="btn btn-primary">Confirmed</button></> : <> <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button></>}
            </th>
        </tr>
    );
};

export default BookingRow;