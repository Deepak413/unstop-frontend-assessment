import React from 'react';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

export const AssessmentCard = () => {
  return (
    <>
        <div className="card-container">
            <div className="card-icons">
                <BusinessCenterOutlinedIcon className='card-icon' />
                <MoreVertOutlinedIcon className='card-icon-dots' />
            </div>
            <div className="card-heading">
                Math Assessment
            </div>
            <div className="card-heading-title">
                <span style={{fontWeight:"bold"}}>Job</span> &nbsp; <span style={{opacity:"0.7"}}>|</span> &nbsp; <span style={{opacity:"0.7"}}>20 Apr 2023</span> 
            </div>
            <hr className='assessment-card-hr' />
            <div className="card-details">
                <div className="card-detail-texts">
                    <div style={{marginRight:"10px"}}>
                        <span>00 <br /> Durations</span>
                    </div>
                    <div>
                        <span>00 <br /> Questions</span>
                    </div>
                </div>
                <div className="card-detail-btns">
                    <button className='card-detail-button1'><AttachFileOutlinedIcon style={{fontSize:"13px"}} /> Share</button>
                    <button className='card-detail-button2'>LP</button>

                </div>
            </div>
        </div>
    </>
  )
}
