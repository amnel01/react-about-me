import React, { Component } from 'react'
import "./App.css"
import NavSite from './NavSite'
import WorkHistoryItem from './WorkHistoryItem'

class WorkHistory extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Work History</h1>
          <NavSite/>
        </header>
        <body>
          <span className="work-history-items">    
            <WorkHistoryItem 
              company="Domo" 
              role="Sr. Consultant" 
              dates="Apr 2015 - Present" 
              duties1="Enabled $600k upsell and site wide license by partnering internally and architecting solutions with customer’s C-level executives" 
              duties2="Partnered with customers during turbulent kick-offs which drove platform adoption, expansion, and multiple retainer upsells" 
              duties3="Coached customers and mentored team members through complex technical challenges and the deployment of innovative solutions" 
              />
            <WorkHistoryItem 
              company="Intel - Mobile Communications Group" 
              role="FP&amp;A Analyst" 
              dates="May 2014 - Apr 2015" 
              duties1="Saved an estimated 24 man hours per month by learning SQL to develop more efficient and effective reporting capabilities" 
              duties2="Increased effectiveness of and efficiency of capital and FP&amp;A analysts by implementing new reporting capabilities across Intel Finance" 
              duties3="Restructured financial system hierarchy for Intel’s next generation systems, and was publicly recognized by superiors for my efforts" 
              />
            <WorkHistoryItem 
              company="Intel - NVM Solutions Group" 
              role="High Volume Manufacturing Planner" 
              dates="April 2013 - May 2014" 
              duties1="Enabled customer design wins by coordinating between new product planning, marketing, and engineering to distribute ~100k units" 
              duties2="Overcame 2.5x increase in demand within lead time by providing proper insight through planning analysis, and collaboration" 
              duties3="Increased utilization of available materials by influencing and initiating the installment of a process to distribute refurbished materials"
              />
          </span>
        </body>
        
    
      </div>
    );
  }
}

export default WorkHistory