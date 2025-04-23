import React from 'react';
import ExternalRatings from './ExternalRatings';

const RatingSummary = ({ ratings, selectedSDK }) => {
  const tasks = Object.keys(ratings);
  const averageRating = tasks.length > 0
    ? (tasks.reduce((sum, task) => sum + ratings[task], 0) / tasks.length).toFixed(1)
    : 0;

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-bold text-center text-white">Rating Summary for {selectedSDK}</h2>
        
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <span className="font-medium text-gray-200">{task}</span>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">{ratings[task]} ★</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-gray-700 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-400">Your Average Rating</p>
            <p className="text-2xl font-bold text-blue-400">{averageRating} ★</p>
          </div>
        </div>
      </div>

      <ExternalRatings selectedSDK={selectedSDK} />
    </div>
  );
};

export default RatingSummary; 