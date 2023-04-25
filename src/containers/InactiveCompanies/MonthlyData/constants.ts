export const baroptions = {
    responsive: true,
    maintainAspectRatio: false,
    hoverRadius: 8,
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
          font : {
            size : 15,
          },
          color : 'black'
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Inactive Companies",
          font : {
            size : 15,
          },
          color : 'black'
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
