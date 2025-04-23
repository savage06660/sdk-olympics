import React, { useState } from "react";
import "./App.css";
import RatingSummary from "./components/RatingSummary";
import SDKComparison from "./components/SDKComparison";
import { SDK_METADATA } from "./components/SDKMetadata";

const SDK_TASKS = {
  WalletConnect: ["Install SDK", "Connect Wallet", "Send Test Transaction"],
  Magic: ["Set up Magic Login", "Authenticate User", "Fetch User Metadata"],
  Coinbase: ["Initialize SDK", "Connect to dApp", "Sign Message"],
  Web3Modal: ["Install Dependencies", "Configure Provider", "Connect Wallet", "Handle Events"],
  RainbowKit: ["Setup Provider", "Configure Chains", "Add Connect Button", "Customize Theme"],
  ethers: ["Install Package", "Connect to Provider", "Create Wallet", "Send Transaction"],
  web3js: ["Setup Project", "Connect to Network", "Create Account", "Deploy Contract"],
  Thirdweb: ["Initialize SDK", "Connect Wallet", "Deploy Contract", "Mint NFT"],
  Moralis: ["Create Account", "Initialize SDK", "Fetch NFT Data", "Get Token Balance"],
  Alchemy: ["Create API Key", "Setup Provider", "Get NFT Metadata", "Query Blockchain"],
  Infura: ["Create Project", "Get API Keys", "Connect to Network", "Monitor Events"],
  Hardhat: ["Initialize Project", "Write Smart Contract", "Run Tests", "Deploy to Network"]
};

export default function App() {
  const [selectedSDK, setSelectedSDK] = useState("");
  const [ratings, setRatings] = useState({});
  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [imageError, setImageError] = useState(false);

  const tasks = SDK_TASKS[selectedSDK] || [];

  const handleRating = (value) => {
    const task = tasks[stepIndex];
    setRatings({ ...ratings, [task]: value });
  };

  const nextStep = () => {
    if (stepIndex < tasks.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setSubmitted(true);
      console.log("Final Ratings:", {
        sdk: selectedSDK,
        ratings,
      });
    }
  };

  const resetForm = () => {
    setSelectedSDK("");
    setRatings({});
    setStepIndex(0);
    setSubmitted(false);
    setShowSummary(false);
    setShowComparison(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 font-sans text-gray-100">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">🏅 SDK Olympics</h1>
          <div className="space-x-4">
            {Object.keys(ratings).length > 0 && (
              <button
                onClick={() => setShowSummary(true)}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                View Summary
              </button>
            )}
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              {showComparison ? "Hide Comparison" : "Show Comparison"}
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3BpMnRkbGx5c3E4cGczYzlzNTB3bHRzd3ZraDR6YXdsZnR1cjhwdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUPGcEliCc7bETyfO8/giphy.gif"
            alt="SDK Olympics"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {showComparison && (
          <SDKComparison ratings={ratings} selectedSDK={selectedSDK} />
        )}

        {!showSummary ? (
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-6">
            <div className="space-y-2">
              <label className="block font-medium text-gray-200">Choose a Web3 SDK:</label>
              <select
                className="w-full p-2 border rounded bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={selectedSDK}
                onChange={(e) => {
                  setSelectedSDK(e.target.value);
                  setStepIndex(0);
                  setRatings({});
                  setSubmitted(false);
                  setImageError(false);
                }}
              >
                <option value="">-- Select SDK --</option>
                {Object.keys(SDK_TASKS).map((sdk) => (
                  <option key={sdk} value={sdk} className="flex items-center space-x-2">
                    {sdk}
                  </option>
                ))}
              </select>
              {selectedSDK && (
                <div className="mt-2 flex items-center space-x-3">
                  {!imageError && (
                    <img 
                      src={SDK_METADATA[selectedSDK].logo}
                      alt={`${selectedSDK} logo`}
                      className="w-6 h-6 object-contain"
                      onError={() => setImageError(true)}
                    />
                  )}
                  <a 
                    href={SDK_METADATA[selectedSDK].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Visit {selectedSDK} website
                  </a>
                </div>
              )}
            </div>

            {selectedSDK && !submitted && (
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-xl">
                  <p className="font-medium mb-2 text-gray-200">
                    Step {stepIndex + 1}: {tasks[stepIndex]}
                  </p>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(star)}
                        className={`text-2xl ${
                          ratings[tasks[stepIndex]] >= star
                            ? "text-yellow-500"
                            : "text-gray-500"
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  className="w-full bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors"
                  onClick={nextStep}
                >
                  {stepIndex < tasks.length - 1 ? "Next Step" : "Submit Ratings"}
                </button>
              </div>
            )}

            {submitted && (
              <div className="space-y-4">
                <div className="bg-green-900 p-4 rounded-xl text-center">
                  <h2 className="text-lg font-semibold text-green-400">✅ All Done!</h2>
                  <p className="text-green-300 mt-1">Thanks for rating {selectedSDK}!</p>
                </div>
                <div className="flex space-x-4">
                  <button
                    className="flex-1 bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors"
                    onClick={() => setShowSummary(true)}
                  >
                    View Summary
                  </button>
                  <button
                    className="flex-1 bg-gray-600 text-white p-2 rounded-xl hover:bg-gray-700 transition-colors"
                    onClick={resetForm}
                  >
                    Rate Another SDK
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <RatingSummary ratings={ratings} selectedSDK={selectedSDK} />
            <button
              className="w-full bg-gray-600 text-white p-2 rounded-xl hover:bg-gray-700 transition-colors"
              onClick={resetForm}
            >
              Rate Another SDK
            </button>
          </div>
        )}
      </div>
    </div>
  );
}