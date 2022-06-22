import { Card, CardContent, Typography, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//import "../styles/styles.css";

const CustomizedCard = styled(Card)`
  min-width: 300px;
  height: 250px;
  padding: 10px;
  margin: 15px;
  box-shadow: rgba(0, 58, 107, 0.2) 0px 7px 29px 0px;
`;
const CustomizedButton = styled(Button)`
  font-size: 12px;
  min-width: 145px;
`;

function InfoCards() {
  const [remainingCredit, setRemainingCredit] = useState(262000);
  const [totalCredit, setTotalCredit] = useState(500000);

  const progressBar = Math.ceil((remainingCredit * 100) / totalCredit);
  const total = 100;
  return (
    <div className="container d-flex">
      <CustomizedCard>
        <CardContent className="d-flex flex-column justify-content-end">
          <Typography variant="h5" component="div">
            Website Status <InfoIcon />
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="success"
            className="mt-5"
          >
            Active
          </Button>
          <Button variant="contained" size="small" className="mt-2">
            Check All Page Status
          </Button>
        </CardContent>
      </CustomizedCard>
      <CustomizedCard>
        <CardContent className="d-flex flex-column">
          <Typography variant="h5" component="div">
            Remaining Credit <InfoIcon />
          </Typography>
          <div className="d-flex align-items-center mt-3">
            <div className="me-4">
              <CircularProgressbar
                value={progressBar}
                text={`${progressBar}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  pathColor: `rgba(1, 83, 255, ${total / 100})`,
                  textColor: "#1c1c1b",
                  trailColor: "#91B4FF",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>

            <div className="d-flex flex-column">
              <Typography
                sx={{ fontSize: "1.2rem" }}
                variant="h5"
                component="div"
              >
                <span style={{ color: "#296DFF" }}>
                  {remainingCredit.toLocaleString("tr-TR")}
                </span>

                <span style={{ color: "#C0C4C8" }}>
                  /{totalCredit.toLocaleString("tr-TR")}
                </span>
              </Typography>
              <CustomizedButton variant="contained" size="small">
                Upgrade Package
              </CustomizedButton>
            </div>
          </div>
        </CardContent>
      </CustomizedCard>
      <CustomizedCard>
        <CardContent className="d-flex flex-column">
          <Typography variant="h5" component="div">
            Data Usage <InfoIcon />
          </Typography>
        </CardContent>
      </CustomizedCard>
      <CustomizedCard>
        <CardContent className="d-flex flex-column">
          <Typography variant="h5" component="div">
            Total Blocked <InfoIcon />
          </Typography>
        </CardContent>
      </CustomizedCard>
    </div>
  );
}

export default InfoCards;
