import React, { useState, useEffect } from 'react';

const ExternalRatings = ({ selectedSDK }) => {
  const [externalRatings, setExternalRatings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExternalRatings = async () => {
      try {
        setLoading(true);
        // Simulating API call with mock data
        const mockData = {
          WalletConnect: {
            githubStars: 8500,
            npmDownloads: "1.2M",
            communityRating: 4.5,
            lastUpdated: "2024-03-20"
          },
          Magic: {
            githubStars: 3200,
            npmDownloads: "500K",
            communityRating: 4.3,
            lastUpdated: "2024-03-19"
          },
          Coinbase: {
            githubStars: 4200,
            npmDownloads: "800K",
            communityRating: 4.7,
            lastUpdated: "2024-03-21"
          },
          Web3Modal: {
            githubStars: 5600,
            npmDownloads: "900K",
            communityRating: 4.6,
            lastUpdated: "2024-03-18"
          },
          RainbowKit: {
            githubStars: 4800,
            npmDownloads: "750K",
            communityRating: 4.8,
            lastUpdated: "2024-03-17"
          },
          ethers: {
            githubStars: 12000,
            npmDownloads: "2.5M",
            communityRating: 4.9,
            lastUpdated: "2024-03-22"
          },
          web3js: {
            githubStars: 15000,
            npmDownloads: "3M",
            communityRating: 4.7,
            lastUpdated: "2024-03-21"
          },
          Thirdweb: {
            githubStars: 3800,
            npmDownloads: "600K",
            communityRating: 4.4,
            lastUpdated: "2024-03-20"
          },
          Moralis: {
            githubStars: 2900,
            npmDownloads: "450K",
            communityRating: 4.2,
            lastUpdated: "2024-03-19"
          },
          Alchemy: {
            githubStars: 2100,
            npmDownloads: "350K",
            communityRating: 4.6,
            lastUpdated: "2024-03-18"
          },
          Infura: {
            githubStars: 1800,
            npmDownloads: "300K",
            communityRating: 4.5,
            lastUpdated: "2024-03-17"
          },
          Hardhat: {
            githubStars: 7200,
            npmDownloads: "1.5M",
            communityRating: 4.8,
            lastUpdated: "2024-03-22"
          }
        };

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setExternalRatings(mockData[selectedSDK]);
        setError(null);
      } catch (err) {
        setError('Failed to fetch external ratings');
        console.error('Error fetching external ratings:', err);
      } finally {
        setLoading(false);
      }
    };

    if (selectedSDK) {
      fetchExternalRatings();
    }
  }, [selectedSDK]);

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-lg text-red-600">
        {error}
      </div>
    );
  }

  if (!externalRatings) {
    return null;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-3">
      <h3 className="font-semibold text-gray-700">Community Data</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-sm text-gray-600">GitHub Stars</p>
          <p className="text-lg font-semibold">{externalRatings.githubStars.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-sm text-gray-600">NPM Downloads</p>
          <p className="text-lg font-semibold">{externalRatings.npmDownloads}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-sm text-gray-600">Community Rating</p>
          <p className="text-lg font-semibold text-yellow-500">{externalRatings.communityRating} ★</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-sm text-gray-600">Last Updated</p>
          <p className="text-lg font-semibold">{externalRatings.lastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default ExternalRatings; 