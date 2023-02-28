export const DAYS = 865;
export const GRAPH_OPTIONS = {
    responsive: true,
    maintainAspectRatio: false,
    hoverRadius:8,
    scales: {
        x: {
            grid: {
                display: true
            },
            title:{
                display:true,
                text:"Order Dates"
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: true
            },
            title:{
                display:true,
                text:"Total Number Of Days"
            }
        }
    },
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
        },
    },
};