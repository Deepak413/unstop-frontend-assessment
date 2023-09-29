import React from 'react';
import './AssessmentOverviewCard.css';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import GroupIcon from '@mui/icons-material/Group';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

// import { AssessmentOverviewCard } from './components/AssessmentOverviewCard';

export const AssessmentOverviewCard = () => {
    return (
        <>
            <div className="assessment-overview-container">
                <div className="assessment-overview-heading">
                    Assessments Overview
                </div>
                <div className="assessment-overview-content">
                    <div className="a-container">
                        <div className='a'>
                            <div className="assessment-overview-subheading">
                                Total Assessment
                            </div>
                            <div className="assessment-overview-subcontent">
                                <div><ViewAgendaOutlinedIcon className="assessment-overview-icon" /></div>
                                <div className='assessment-overview-subcontent-a1'>34</div>
                            </div>
                        </div>
                        <hr className='assessment-overview-divider'></hr>
                    </div>

                    <div className="b-container">
                        <div className="b">
                            <div className="assessment-overview-subheading">
                                Candidates
                            </div>
                            <div className="assessment-overview-subcontent">
                                <div><GroupIcon className="assessment-overview-icon" /></div>
                                <div className='assessment-overview-subcontent-details'>
                                    <div style={{ display: "flex" }}>
                                        <div className='assessment-overview-subcontent-b1'>
                                            <div className='assessment-overview-number'>11,145 <span>+89</span></div>
                                            <div className='assessment-overview-text'>Total Candidate</div>
                                        </div>
                                        <hr className='assessment-overview-divider'></hr>
                                    </div>
                                    <div className='assessment-overview-subcontent-b2'>
                                        <div className='assessment-overview-number'>114 <span>+89</span></div>
                                        <div className='assessment-overview-text'>Who Attempted</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='assessment-overview-divider'></hr>
                    </div>

                    <div className="c-container">
                        <div className="c">
                            <div className="assessment-overview-subheading">
                                Candidate Source
                            </div>
                            <div className="assessment-overview-subcontent">
                                <div><LanguageOutlinedIcon className="assessment-overview-icon assessment-overview-icon-c" /></div>
                                <div className='assessment-overview-subcontent-details'>
                                    <div style={{ display: "flex" }}>
                                        <div className='assessment-overview-subcontent-c1'>
                                            <div className='assessment-overview-number'>11,000 <span>+89</span></div>
                                            <div className='assessment-overview-text'>E-mail</div>
                                        </div>
                                        <hr className='assessment-overview-divider'></hr>
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <div className='assessment-overview-subcontent-c2'>
                                            <div className='assessment-overview-number'>145 <span>+89</span></div>
                                            <div className='assessment-overview-text'>Social Share</div>
                                        </div>
                                        <hr className='assessment-overview-divider'></hr>
                                    </div>

                                    <div className='assessment-overview-subcontent-c3'>
                                        <div className='assessment-overview-number'>145 <span>+89</span></div>
                                        <div className='assessment-overview-text'>Unique Link</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr className='assessment-overview-divider'></hr>
                    </div>



                    <div className="d">
                        <div className="assessment-overview-subheading">
                            Total Purpose
                        </div>
                        <div className="assessment-overview-subcontent">
                            <div><LinkOutlinedIcon className="assessment-overview-icon" /></div>
                            <div className='assessment-overview-subcontent-a1'>11</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
