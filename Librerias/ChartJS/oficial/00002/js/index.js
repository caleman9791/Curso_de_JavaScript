  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const valores = [5, 10, 5, 5, 2, 20];
  // const valores = [0, 10, 5, 2, 20, 30, 70, 60, 20, 30, 45, 60];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: valores,
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const chartData = {
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: [
        pattern.draw('square', '#ff6384'),
        pattern.draw('circle', '#36a2eb'),
        pattern.draw('diamond', '#cc65fe'),
        pattern.draw('triangle', '#ffce56')
      ]
    }],
    labels: ['Red', 'Blue', 'Purple', 'Yellow']
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    // config
    chartData
  );