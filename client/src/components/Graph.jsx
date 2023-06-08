import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Line, Doughnut,Radar } from "react-chartjs-2";
import { Bar} from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const BarGraph = () => {
     const labels = ["Food Subsidy","Fertilizer Subsidy","Divestment target","Revised divestment target","Proposed Capital Expenditure","Increased Agri Credit Target","Investment in high value horticulture","Outlay for phase 3 of eCourts","Investment in energy security and transition"];
    //  const options = {
    //    responsive: true,
    //    axis: "y",
    //    plugins: {
    //      legend: {
    //        position: "bottom",
    //      },
    //      title: {
    //        display: true,
    //        text: "Yearly views",
    //      },
    //    },
    //  };
     const data = {
       labels,
       datasets: [
         {
           label: "views",
           data: [2 , 1.8, 0.55,0.50, 12, 22, 0.025, 0.08, 0.4],
           borderColor: [
             "rgba(62,12,171)",
             "rgba(214,43,129)",
             "rgba(151, 216, 175, 0.8)",
             "rgba(239, 184, 118, 0.8)",
             "rgba(239, 118, 234, 0.8)",
             "rgba(196, 39, 59, 0.8)",
             "rgba(22, 234, 194, 0.8)",
             "rgba(247, 227, 9, 0.8)",
             "rgba(9, 247, 68, 0.8)",
           ],
           backgroundColor: [
             "rgba(62,12,171,0.3)",
             "rgba(214,43,129,0.3)",
             "rgba(151, 216, 175, 0.8)",
             "rgba(239, 184, 118, 0.8)",
             "rgba(239, 118, 234, 0.8)",
             "rgba(196, 39, 59, 0.8)",
             "rgba(22, 234, 194, 0.8)",
             "rgba(247, 227, 9, 0.8)",
             "rgba(9, 247, 68, 0.8)",
           ],
           borderWidth: 1,
         },
       ],
     };
     return <Doughnut data={data} />;
}
export const McqGraph = () => {
       const labels = [
         "A",
         "B",
         "C",
         "D",
       ];
       const data = {
         labels,
         datasets: [
           {
             label: "views",
             data: [0.2,0.4,0,0.4],
             borderColor: [
               "rgba(62,12,171)",
               "rgba(214,43,129)",
               "rgba(151, 216, 175, 0.8)",
               "rgba(239, 184, 118, 0.8)",
             ],
             backgroundColor: [
               "rgba(62,12,171,0.3)",
               "rgba(214,43,129,0.3)",
               "rgba(151, 216, 175, 0.8)",
               "rgba(239, 184, 118, 0.8)",
             ],
             borderWidth: 1,
           },
         ],
       };
       return <Doughnut data={data} />;
}
export const McqGraph2 = () => {
  const labels = ["A", "B", "C", "D"];
  const data = {
    labels,
    datasets: [
      {
        label: "views",
        data: ["0.3", "0.4", "0.2", "0.1"],
        borderColor: [
          "rgba(62,12,171)",
          "rgba(214,43,129)",
          "rgba(151, 216, 175, 0.8)",
          "rgba(239, 184, 118, 0.8)",
        ],
        backgroundColor: [
          "rgba(62,12,171,0.3)",
          "rgba(214,43,129,0.3)",
          "rgba(151, 216, 175, 0.8)",
          "rgba(239, 184, 118, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
};
export const RadarGraph = () =>{
    const labels = ["aggresive","happy","disappointed","satisfactory","neutral"]
    const data = {
      labels,
      datasets: [
        {
          label: "views",
          data: ["0.2", "0.4", "0.1", "0.2", "0.1"],
          backgroundColor: "rgba(255, 99, 132, 1    )",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        //   borderWidth: 1,5
        },
      ],
    };
    
    return <Radar data={data} /> ;
}

export const RadarGraph2 = () => {
  const labels = [
    "aggresive",
    "happy",
    "disappointed",
    "satisfactory",
    "neutral",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "views",
        data: ["0.5", "0.2", "0", "0.1", "0.2"],
        backgroundColor: "rgba(255, 99, 132, 1    )",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        //   borderWidth: 1,5
      },
    ],
  };

  return <Radar data={data} />;
};
export const RadarGraph3 = () => {
  const labels = [
    "aggresive",
    "happy",
    "disappointed",
    "satisfactory",
    "neutral",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "views",
        data: ["0.1", "0.1", "0.2", "0.3", "0.3"],
        backgroundColor: "rgba(255, 99, 132, 1    )",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        //   borderWidth: 1,5
      },
    ],
  };

  return <Radar data={data} />;
};
export const LineGraph = () => {
  const labels = ["Q1 2001", "Q2 2001", "Q3 2001", "Q4 2001"];
    const data = {
      labels,
      datasets: [
        {
          label: "S&P 500 index",
          data: ["-12.1", "-6.8", "-14.1","10.7"],
          backgroundColor: "rgba(255, 99, 132, 1    )",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          //   borderWidth: 1,5
        },
      ],
    };
    
    return < Line data={data} /> ;
}
export const LineGraph3 = () => {
  const labels = [
    "aggresive",
    "happy",
    "disappointed",
    "satisfactory",
    "neutral",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "views",
        data: ["0.1", "0.1", "0.2", "0.3", "0.3"],
        backgroundColor: "rgba(255, 99, 132, 1    )",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        //   borderWidth: 1,5
      },
    ],
  };

  return <Line data={data} />;
};
export const LineGraph2 = () => {
  const labels = [
    "aggresive",
    "happy",
    "disappointed",
    "satisfactory",
    "neutral",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "views",
        data: ["0.5", "0.2", "0", "0.1", "0.2"],
        backgroundColor: "rgba(255, 99, 132, 1    )",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        //   borderWidth: 1,5
      },
    ],
  };

  return <Line data={data} />;
};
export const LineGraphMcq = () => {
  const labels = [
    "A","B","C","D",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "views",
        data: ["0.2","0.4","0","0.4"],
        backgroundColor: "rgba(255, 99, 132, 1    )",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        //   borderWidth: 1,5
      },
    ],
  };

  return <Line data={data} />;
};
export const LineGraphMcq2 = () => {
  const labels = ["A", "B", "C", "D"];
  const data = {
    labels,
    datasets: [
      {
        label: "views",
        data: ["0.3","0.4","0.2","0.1"],
        backgroundColor: "rgba(255, 99, 132, 1    )",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        //   borderWidth: 1,5
      },
    ],
  };

  return <Line data={data} />;
};