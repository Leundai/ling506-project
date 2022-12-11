import React from "react";
import AnalysisHeader from "../components/AnalysisHeader";
import AnalysisHistogram from "../components/AnalysisHistogram";
import AnalysisContributors from "../components/AnalysisContributors";

import "./AnalysisPage.css";

import dummyData from "../dummyData.json";

const analysisResults = dummyData.result.result;

function AnalysisPage() {
  return (
    <div className="analysis-container">
      <AnalysisHeader emotionCount={analysisResults.emotion_count} />
      <AnalysisHistogram emotionCount={analysisResults.emotion_count} />
      <AnalysisContributors
        emotionsContributors={analysisResults.emotion_contributors}
        classifiedTweets={analysisResults.classified_tweets}
        emotionCount={analysisResults.emotion_count}
        authorsInfo={analysisResults.authors}
      />
    </div>
  );
}

export default AnalysisPage;
