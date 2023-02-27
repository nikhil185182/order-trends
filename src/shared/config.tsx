export const DAYS = 865;
export const GRAPH_OPTIONS = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: true
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: true
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