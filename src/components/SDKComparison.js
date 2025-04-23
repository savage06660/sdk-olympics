import React from 'react';
import { SDK_METADATA } from './SDKMetadata';

const SDKComparison = ({ ratings, selectedSDK }) => {
  const allSDKs = {
    WalletConnect: { githubStars: 8500, npmDownloads: "1.2M", communityRating: 4.5 },
    Magic: { githubStars: 3200, npmDownloads: "500K", communityRating: 4.3 },
    Coinbase: { githubStars: 4200, npmDownloads: "800K", communityRating: 4.7 },
    Web3Modal: { githubStars: 5600, npmDownloads: "900K", communityRating: 4.6 },
    RainbowKit: { githubStars: 4800, npmDownloads: "750K", communityRating: 4.8 },
    ethers: { githubStars: 12000, npmDownloads: "2.5M", communityRating: 4.9 },
    web3js: { githubStars: 15000, npmDownloads: "3M", communityRating: 4.7 },
    Thirdweb: { githubStars: 3800, npmDownloads: "600K", communityRating: 4.4 },
    Moralis: { githubStars: 2900, npmDownloads: "450K", communityRating: 4.2 },
    Alchemy: { githubStars: 2100, npmDownloads: "350K", communityRating: 4.6 },
    Infura: { githubStars: 1800, npmDownloads: "300K", communityRating: 4.5 },
    Hardhat: { githubStars: 7200, npmDownloads: "1.5M", communityRating: 4.8 }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
      <h2 className="text-xl font-bold text-center text-white mb-4">SDK Comparison</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-200">SDK</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-200">GitHub Stars</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-200">NPM Downloads</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-200">Community Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {Object.entries(allSDKs).map(([sdk, data]) => (
              <tr 
                key={sdk}
                className={`hover:bg-gray-700 ${
                  sdk === selectedSDK ? 'bg-gray-700' : ''
                }`}
              >
                <td className="px-4 py-2">
                  <a 
                    href={SDK_METADATA[sdk].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:text-blue-400 transition-colors"
                  >
                    <img 
                      src={SDK_METADATA[sdk].logo}
                      alt={`${sdk} logo`}
                      className="w-6 h-6 object-contain"
                    />
                    <div>
                      <span className="font-medium text-gray-200">{sdk}</span>
                      {sdk === selectedSDK && (
                        <span className="ml-2 text-blue-400">(Selected)</span>
                      )}
                      <p className="text-sm text-gray-400">{SDK_METADATA[sdk].description}</p>
                    </div>
                  </a>
                </td>
                <td className="px-4 py-2 text-gray-200">{data.githubStars.toLocaleString()}</td>
                <td className="px-4 py-2 text-gray-200">{data.npmDownloads}</td>
                <td className="px-4 py-2">
                  <span className="text-yellow-500">{data.communityRating} ★</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-gray-400">
        <p>* Data is updated regularly from GitHub and NPM</p>
        <p>* Community ratings are based on user feedback</p>
      </div>
    </div>
  );
};

export default SDKComparison; 