
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';


function Items() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://interview-plus.onrender.com/api/items', {
                headers: {
                    'x-access-token': token
                }
            });
            setItems(response.data);
        } catch (error) {
            console.error('Failed to fetch items:', error);
        }
    };

    return (

        <>
       
        <Navbar />
        <div class=" p-8 rounded-lg">
            <h2 class="text-2xl font-bold mb-4 text-purple-500">Items</h2>
            <div class="grid grid-cols-3 gap-4">
                {items.map(item => (<div key={item.id} class="bg-white shadow-md rounded-lg p-4">
                    <h3 class="text-xl font-bold mb-2 text-purple-500">{item.title}</h3>
                    <p class="text-gray-700 mb-2">Price: ${item.price}</p>
                    <p class="text-gray-700">{item.description}</p>
                </div>))}
            </div>
        </div>
        </>
    );
    

}

export default Items;
