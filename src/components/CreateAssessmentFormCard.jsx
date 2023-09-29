import React from 'react';
import './CreateAssessmentFormCard.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import NewAssessmentSkill from './NewAssessmentSkill';

export const CreateAssessmentFormCard = ({ setIsFormVisible, toggleFormVisibility }) => {
    return (
        <>
            <div className= "new-assessment-form-container">
                <div className="new-assessment-heading-container">
                    <span>Create New Assessment</span>
                    <CloseOutlinedIcon onClick={toggleFormVisibility} className='new-assessment-close-icon' />
                </div>
                <hr />
                <div className="new-assessment-form-fields-container">
                    <div className="new-assessment-name-container">
                        <span>Name of Assessment</span>
                        <input type="text" placeholder='Type Here' />
                    </div>
                    <div className="new-assessment-purpose-container new-assessment-name-container">
                        <span>Purpose of the test is</span>
                        <select id="mySelect">
                            <option value="">Select</option>
                            <option value="">Purpose 1</option>
                            <option value="">Purpose 2</option>
                        </select>
                    </div>
                    <div className="new-assessment-description-container new-assessment-name-container">
                        <span>Description</span>
                        <select id="mySelect">
                            <option value="">Select</option>
                            <option value="">Description 1</option>
                            <option value="">Description 1</option>
                        </select>
                    </div>
                    <div className="new-assessment-skills-container new-assessment-name-container">
                        <span>Skills</span>
                        <div>
                            <div className="new-assessment-skills">
                                <NewAssessmentSkill text={"UI/UX and Design"} />
                                <NewAssessmentSkill text={"No of Questions"} />
                                <NewAssessmentSkill text={"Web Development"} />
                                <NewAssessmentSkill text={"UI/UX and Design"} />
                                <NewAssessmentSkill text={"Web Development"} />
                            </div>
                            <hr style={{ opacity: "0.6" }} />
                            <input type="text" placeholder='Type Here' />
                        </div>
                    </div>
                    <div className="new-assessment-duration-container new-assessment-name-container">
                        <span>Duration of Assessment</span>
                        <input type="text" placeholder='HH:MM:SS' />
                    </div>
                </div>
                <div className="new-assessment-save-btn-container">
                    <button>Save</button>
                </div>
            </div>

        </>
    )
}
