import React, { useState, useEffect } from 'react'
import './body.css'
import IMG1 from '../../assests/wazirx.webp'

const Body = () => {

    const [listItems, setListItems] = useState([]);

    const getItemList = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                credentials: 'include'
            });

            const data = await res.json();
            setListItems(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getItemList();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // const count = () => {
    //     for (let i = 0; i < data.length; i++) {
    //         const element = data[i];
            
    //     }
    // }

    return (
        <>
            <section className='body_section'>
                <div className="container body_container">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Last</th>
                                <th>Buy / Sell Price</th>
                                <th>Volume</th>
                                <th>base_unit</th>
                            </tr>
                        </thead>
                        {
                            listItems.map((data, index) => (
                                <tbody>
                                    <tr className='solid' >
                                        <td align='center' valign='center' className='align-middle'>{index + 1}</td>
                                        <td align='center' valign='center' className='align-middle'><img src={IMG1} alt="" />{data.name}</td>
                                        <td align='center' valign='center' className='align-middle'>₹{data.last}</td>
                                        <td align='center' valign='center' className='align-middle'>₹{data.buy} / ₹{data.sell}</td>
                                        <td align='center' valign='center' className='align-middle'>{data.volume}</td>
                                        <td align='center' valign='center' className='align-middle'>{data.base_unit}</td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </table>
                </div>
            </section>
        </>
    )
}

export default Body