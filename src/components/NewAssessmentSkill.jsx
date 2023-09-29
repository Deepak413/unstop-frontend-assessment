import React from 'react'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const NewAssessmentSkill = (props) => {
    return (
        <>
            <div className="new-assessment-skill">
                <span style={{marginRight:"5px", fontSize:"14px"}}>{props.text}</span> <CloseOutlinedIcon style={{fontSize:"14px"}}/>
            </div>
        </>
    )
}

export default NewAssessmentSkill