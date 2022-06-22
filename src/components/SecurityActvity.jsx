import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import InfoIcon from "@mui/icons-material/Info";
import ShowChartTwoToneIcon from "@mui/icons-material/ShowChartTwoTone";
import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { blue } from "@mui/material/colors";
import SecurityActivityTable from "./SecurityActivityTable";
Chartjs.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const CustomizedCard = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 750px;
  min-height: 250px;
  padding: 10px;
  margin: 15px;
  box-shadow: rgba(0, 58, 107, 0.2) 0px 7px 29px 0px;
`;

function SecurityActvity() {
  const [data, setData] = useState({
    labels: [
      "6am",
      "7am",
      "8am",
      "9am",
      "10am",
      "11am",
      "12pm",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
      "6pm",
    ],
    datasets: [
      {
        label: "Request",
        data: [71, 83, 80, 99, 95, 101, 80, 82, 90, 79, 101, 93, 115],
        borderColor: "#00E5F7",
        tension: 0.3,
      },
      {
        label: "Insecure",
        data: [61, 20, 35, 24, 40, 66, 15, 32, 51, 40, 13, 48, 45],

        borderColor: "#F73B3F",
        tension: 0.3,
      },
      {
        label: "Secure",
        data: [10, 63, 45, 75, 55, 35, 65, 50, 39, 39, 88, 45, 70],
        borderColor: "#0FF74D",
        tension: 0.3,
      },
    ],
  });
  return (
    <div className="container">
      <CustomizedCard>
        <CardContent className="d-flex justify-content-between">
          <Typography variant="h5">
            Security Activity <InfoIcon />
          </Typography>
          <Typography variant="h5">
            <ShowChartTwoToneIcon />
          </Typography>
        </CardContent>
        <CardContent>
          <Line data={data} />
          <SecurityActivityTable />
          <Button className="w-100" color="secondary">
            View All
          </Button>
        </CardContent>
      </CustomizedCard>
    </div>
  );
}

export default SecurityActvity;
