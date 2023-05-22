import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { click } from "@testing-library/user-event/dist/click";
import axios from "axios";
import { useEffect, useState } from "react";
import './Login.css';

function Protected(props) {
  const [subject, setSubject] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7004/job", {
      headers: { Authorization: 'Bearer ${localStorage.getItem("access_token")}' }
    }).then((res) => {
      setSubject(res.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  function click() {
    console.log(subject)
    console.log("titi")
  }

  return (
    <div className="Subject" class="centrage" style={{ width: '50%' }}>
      {subject.map((item, index) => (
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ width: '100%' }} class="couleur">Bonjour, je suis...</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>

  )
}

export default Protected;