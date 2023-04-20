export const lineOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: true,
      },
    },
    y: {
      ticks: {
        stepSize: 1,
      },
      min: 0,
      grid: {
        display: true,
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (context: any) => {
          console.log(context);
          return [
            `New Enrollments: ${context.raw}`,
            "Click on it to Get Companies Info",
          ];
        },
      },
    },
    label: false,
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "New Enrollments",
      fontSize: 100,
    },
  },
};

export const barOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        stepSize: 1,
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (context: any) => {
          return [
            `New Enrollments: ${context.raw}`,
            "Click on it to Get Enrolled Companies",
          ];
        },
      },
    },

    label: false,
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "New Enrollments",
      fontSize: 100,
    },
  },
};
