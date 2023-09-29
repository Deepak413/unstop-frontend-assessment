import React, {useState} from 'react';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { CreateAssessmentFormCard } from './CreateAssessmentFormCard';

export const CreateAssessmentCard = () => {

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <div className="create-card-container" onClick={toggleFormVisibility}>
        <div className="create-card-icon-div"><AddOutlinedIcon className="create-card-icon" /></div>
        <div className="create-card-heading">New Assessment</div>
        <div className="create-card-text">From here you can add questions of multiple types like MCQs, subjective includes texts or paragraphs.</div>
      </div>
      
      {isFormVisible && (
        <div className="form-container">
          <CreateAssessmentFormCard isFormVisible={isFormVisible} toggleFormVisibility={toggleFormVisibility} />
        </div>
      )}
    </>
  )
}
