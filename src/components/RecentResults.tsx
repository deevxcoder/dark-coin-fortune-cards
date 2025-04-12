
import React from 'react';
import { ListOrdered } from 'lucide-react';

const results = [
  { id: 1, market: 'Mumbai Main', date: '12 Apr', openResult: '72', closeResult: '85' },
  { id: 2, market: 'Kalyan', date: '12 Apr', openResult: '45', closeResult: '93' },
  { id: 3, market: 'Dishawar', date: '12 Apr', openResult: '18', closeResult: '64' },
  { id: 4, market: 'Gali', date: '11 Apr', openResult: '37', closeResult: '29' },
  { id: 5, market: 'Faridabad', date: '11 Apr', openResult: '56', closeResult: '11' }
];

const RecentResults: React.FC = () => {
  return (
    <div className="bg-[#1A1F2C] rounded-xl p-4 mb-12">
      <div className="flex items-center mb-4">
        <ListOrdered className="text-[#00E701] h-6 w-6 mr-3" />
        <h2 className="text-xl font-bold text-white">Recent Results</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#2C3544]">
              <th className="text-left py-2 px-2">Market</th>
              <th className="text-center py-2 px-2">Date</th>
              <th className="text-center py-2 px-2">Open</th>
              <th className="text-center py-2 px-2">Close</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id} className="border-b border-accent-purple/10">
                <td className="py-2 px-2">{result.market}</td>
                <td className="py-2 px-2 text-center text-gray-400">{result.date}</td>
                <td className="py-2 px-2 text-center">
                  <span className="bg-dark-charcoal px-2 py-1 rounded text-accent-purple">
                    {result.openResult}
                  </span>
                </td>
                <td className="py-2 px-2 text-center">
                  <span className="bg-dark-charcoal px-2 py-1 rounded text-accent-magenta">
                    {result.closeResult}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentResults;
