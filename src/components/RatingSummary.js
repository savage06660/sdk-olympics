import React from 'react';

const RatingSummary = ({ ratings, selectedSDK }) => {
  const tasks = Object.keys(ratings);
  const averageRating = tasks.length > 0
    ? (tasks.reduce((sum, task) => sum + ratings[task], 0) / tasks.length).toFixed(1)
    : 0;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
      <h2 className="text-xl font-bold text-center">Rating Summary for {selectedSDK}</h2>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">{task}</span>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">{ratings[task]} ★</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <div className="text-center">
          <p className="text-sm text-gray-600">Average Rating</p>
          <p className="text-2xl font-bold text-blue-600">{averageRating} ★</p>
        </div>
      </div>
    </div>
  );
};

export default RatingSummary; 