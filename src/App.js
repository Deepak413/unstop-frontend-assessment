import './App.css';
import React, {useState} from 'react';
import "./components/CreateAssessmentFormCard.css";
import "./components/AssessmentCard.css";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import GroupIcon from '@mui/icons-material/Group';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

import Navbar from './components/Navbar';
import { AssessmentOverviewCard } from './components/AssessmentOverviewCard';
import { CreateAssessmentCard } from './components/CreateAssessmentCard';
import { AssessmentCard } from './components/AssessmentCard';
import { CreateAssessmentFormCard } from './components/CreateAssessmentFormCard';

function App() {

  // const [isFormVisible, setIsFormVisible] = useState(false);

  // const toggleFormVisibility = () => {
  //   setIsFormVisible(!isFormVisible);
  // };

  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="content-container">
          <div className="heading-container">
            <div className="big-heading">
              <EqualizerIcon className='navbar-toggler'/>
              Assessment
            </div>
            <hr className='divider'></hr>
            <div className="small-heading">
              My Assessments
            </div>
          </div>

          <AssessmentOverviewCard />

          <div className="my-assessment-container">
            <div className="my-assessment-heading">
              My Assessment
            </div>
            <div className="my-assessment-content">
              <CreateAssessmentCard />
              <AssessmentCard />
              <AssessmentCard />
            </div>
          </div>

          {/* {isFormVisible && (
            <div className="form-container">
              <CreateAssessmentFormCard />
            </div>
          )} */}



        </div>
      </div>
    </>
  );
}

export default App;
