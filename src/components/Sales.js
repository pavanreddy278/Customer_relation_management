import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/crm/sales')
      .then(response => setSales(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Sales</h2>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>
            {sale.product} - {sale.amount} - {sale.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sales;
