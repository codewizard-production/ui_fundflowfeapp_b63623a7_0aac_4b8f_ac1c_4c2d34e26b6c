import React from "react";
import { Routes, Route } from "react-router-dom";
import {
FundingRoundList, 
Investors, 
FundingRoundCreate, FundingRoundEdit, FundingRoundView, 
InvestorCreate, InvestorEdit, InvestorView, 
StageCreate, StageEdit, StageView, 
Stages, 
StartupTiles
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                                                                            <Route path="/" element={<Investors {...props} title={'Investors'} nolistbar={true} />} />
                                                                    <Route path="FundingRounds/view/:id" element={<FundingRoundView {...props} title={'View FundingRound'} />} />
                        <Route path="FundingRounds/edit/:id" element={<FundingRoundEdit {...props} title={'Edit FundingRound'} />} />
                        <Route path="FundingRounds/create" element={<FundingRoundCreate {...props} title={'Create FundingRound'} />} />
                                            <Route path="Investors/view/:id" element={<InvestorView {...props} title={'View Investor'} />} />
                        <Route path="Investors/edit/:id" element={<InvestorEdit {...props} title={'Edit Investor'} />} />
                        <Route path="Investors/create" element={<InvestorCreate {...props} title={'Create Investor'} />} />
                                            <Route path="Stages/view/:id" element={<StageView {...props} title={'View Stage'} />} />
                        <Route path="Stages/edit/:id" element={<StageEdit {...props} title={'Edit Stage'} />} />
                        <Route path="Stages/create" element={<StageCreate {...props} title={'Create Stage'} />} />

                <Route path="/startups" element={<StartupTiles {...props} title={'Startups'} />} />
                <Route path="/fundingrounds" element={<FundingRoundList {...props} title={'FundingRounds'} />} />
                <Route path="/investors" element={<Investors {...props} title={'Investors'} />} />
                <Route path="/stages" element={<Stages {...props} title={'Stages'} />} />
        </Routes>
    )

};

export default Component;