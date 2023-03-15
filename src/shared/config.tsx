import { ChartEvent, ActiveElement } from "chart.js";

import { NewUsersDTO } from "./dto/newUsersDto";
import { toggleDrawer, updateCompaniesList, updatebarclickedDate } from "./utils/redux/reducers/newUserReducer";
import { useAppDispatch, useAppSelector } from "./utils/redux/selectors/hooks";
import { AppDispatch } from "./utils/redux/store";

export const DummyCompanies="%[_]%,%zzz%";




export const DAYS = 865;








export const CompanyLevel_graphOptions= {
  responsive: true,
 maintainAspectRatio:false,
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
              text:"Total Number Of Orders"
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
              text:"Total Number Of Orders"
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


export const newUser_datepickers_Title="Select Date Range";

export const NewUser_BarOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,

        text: "New Enrollments",
      },
    },
    
  };
 export  const NewUser_LineOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "New Enrollments",
      },
    },
    
  }