fetch('https://script.google.com/macros/s/AKfycbxCo8-Ec-BN3U9Kz_Csei5mpR08_h_3vtZqbm__6DXZBUdy-hPIpBELJSC3GRXcEdfMEg/exec')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#data-table tbody');

    data.data.forEach(item => {
      const row = document.createElement('tr');

      Object.values(item).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error(error));
