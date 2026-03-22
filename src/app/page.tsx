'use client';

import { useState, useEffect } from 'react';

interface LRT {
  name: string;
  symbol: string;
  p
      <header className="border-b-4 border-purple-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black">App</h1>
              <p className="text-gray-400 mt-2">Interactive demo</p>
            </div>
            <nav className="flex gap-2">
              <a href="/" className="px-4 py-2 bg-gray-800 border-2 border-gray-600 hover:border-purple-400 rounded font-bold transition-all">
                Home
              </a>
              <a href="/docs" className="px-4 py-2 bg-purple-500 border-2 border-purple-400 rounded font-bold transition-all">
                Documentation
              </a>
            </nav>
          </div>
        </div>
      </header>

rotocol: string;
  tvl: string;
  apy: number;
  underlying: string;
  ratio: number;
}

interface AVS {
  name: string;
  tvl: string;
  operators: number;
  reward: string;
  category: string;
}

const lrts: LRT[] = [
  { name: 'Ether.fi Staked ETH', symbol: 'eETH', protocol: 'Ether.fi', tvl: '$5.2B', apy: 4.8, underlying: 'ETH', ratio: 1.032 },
  { name: 'Puffer ETH', symbol: 'pufETH', protocol: 'Puffer', tvl: '$1.8B', apy: 5.2, underlying: 'ETH', ratio: 1.028 },
  { name: 'Renzo ezETH', symbol: 'ezETH', protocol: 'Renzo', tvl: '$2.1B', apy: 5.5, underlying: 'ETH', ratio: 1.035 },
  { name: 'Kelp rsETH', symbol: 'rsETH', protocol: 'Kelp DAO', tvl: '$890M', apy: 4.9, underlying: 'ETH', ratio: 1.029 },
  { name: 'Swell rswETH', symbol: 'rswETH', protocol: 'Swell', tvl: '$720M', apy: 5.1, underlying: 'ETH', ratio: 1.027 },
  { name: 'Eigenpie mstETH', symbol: 'mstETH', protocol: 'Eigenpie', tvl: '$450M', apy: 5.8, underlying: 'stETH', ratio: 1.041 },
];

const avsList: AVS[] = [
  { name: 'EigenDA', tvl: '$8.2B', operators: 245, reward: 'EIGEN', category: 'Data Availability' },
  { name: 'Lagrange', tvl: '$1.5B', operators: 89, reward: 'LAG', category: 'ZK Coprocessor' },
  { name: 'AltLayer', tvl: '$1.2B', operators: 156, reward: 'ALT', category: 'Rollup Infrastructure' },
  { name: 'Omni Network', tvl: '$980M', operators: 78, reward: 'OMNI', category: 'Cross-chain' },
  { name: 'Hyperlane', tvl: '$650M', operators: 62, reward: 'HYP', category: 'Interoperability' },
  { name: 'Witness Chain', tvl: '$420M', operators: 45, reward: 'WIT', category: 'Proof of Location' },
];

export default function Home() {
  const [totalTvl, setTotalTvl] = useState(13.2);
  const [selectedLrt, setSelectedLrt] = useState<LRT | null>(null);
  const [stakeAmount, setStakeAmount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalTvl(prev => prev + (Math.random() - 0.5) * 0.1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const bestApy = Math.max(...lrts.map(l => l.apy));

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-purple-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">Restaking Dashboard</h1>
          <p className="text-gray-400 mt-2">EigenLayer ecosystem • LRTs • AVS rewards</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-purple-400 p-4 text-center">
            <div className="text-3xl font-black text-purple-400">${totalTvl.toFixed(1)}B</div>
            <div className="text-sm text-gray-400">EigenLayer TVL</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">{lrts.length}</div>
            <div className="text-sm text-gray-400">LRT Protocols</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">{avsList.length}</div>
            <div className="text-sm text-gray-400">Active AVS</div>
          </div>
          <div className="bg-gray-900 border-4 border-green-400 p-4 text-center">
            <div className="text-3xl font-black text-green-400">{bestApy.toFixed(1)}%</div>
            <div className="text-sm text-gray-400">Best LRT APY</div>
          </div>
        </section>

        {/* LRT Comparison */}
        <section className="bg-gray-900 border-4 border-purple-400 p-6">
          <h2 className="text-xl font-black text-purple-400 mb-4">Liquid Restaking Tokens (LRTs)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="text-left py-3">Token</th>
                  <th className="text-left py-3">Protocol</th>
                  <th className="text-right py-3">TVL</th>
                  <th className="text-right py-3">APY</th>
                  <th className="text-right py-3">Exchange Rate</th>
                  <th className="text-right py-3"></th>
                </tr>
              </thead>
              <tbody>
                {lrts.map((lrt, i) => (
                  <tr key={lrt.symbol} className={`border-b border-gray-800 ${i === 0 ? 'bg-purple-900/20' : ''}`}>
                    <td className="py-3">
                      <span className="font-bold text-purple-400">{lrt.symbol}</span>
                      <span className="text-gray-400 ml-2 text-xs">{lrt.name}</span>
                    </td>
                    <td className="py-3">{lrt.protocol}</td>
                    <td className="py-3 text-right font-mono">{lrt.tvl}</td>
                    <td className="py-3 text-right">
                      <span className={`font-bold ${lrt.apy === bestApy ? 'text-green-400' : ''}`}>
                        {lrt.apy.toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 text-right font-mono text-gray-400">
                      1 {lrt.symbol} = {lrt.ratio} {lrt.underlying}
                    </td>
                    <td className="py-3 text-right">
                      <button
                        onClick={() => setSelectedLrt(lrt)}
                        className="px-3 py-1 bg-purple-500 text-white text-xs font-bold hover:bg-purple-400"
                      >
                        Stake
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Stake Modal */}
        {selectedLrt && (
          <section className="bg-gray-900 border-4 border-green-400 p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-black text-green-400">Stake into {selectedLrt.symbol}</h2>
              <button onClick={() => setSelectedLrt(null)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-400">Amount (ETH)</label>
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(parseFloat(e.target.value) || 0)}
                  className="w-full mt-2 px-4 py-3 bg-gray-800 border-2 border-gray-600 text-xl font-bold outline-none"
                />
              </div>
              <div className="p-4 bg-gray-800 border-2 border-gray-700">
                <div className="text-sm text-gray-400">You will receive</div>
                <div className="text-2xl font-black text-purple-400 mt-1">
                  {(stakeAmount / selectedLrt.ratio).toFixed(4)} {selectedLrt.symbol}
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  Estimated yearly reward: <span className="text-green-400 font-bold">
                    {(stakeAmount * selectedLrt.apy / 100).toFixed(4)} ETH
                  </span>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 py-3 bg-green-500 text-white font-bold border-4 border-green-400 hover:bg-green-400">
              Stake {stakeAmount} ETH → {selectedLrt.symbol}
            </button>
          </section>
        )}

        {/* AVS List */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Actively Validated Services (AVS)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {avsList.map(avs => (
              <div key={avs.name} className="p-4 bg-gray-800 border-2 border-gray-600">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-purple-400">{avs.name}</h3>
                  <span className="px-2 py-0.5 bg-gray-700 text-xs">{avs.category}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-gray-400">TVL:</span>
                    <span className="ml-1 font-mono">{avs.tvl}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Operators:</span>
                    <span className="ml-1">{avs.operators}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Reward:</span>
                    <span className="ml-1 text-green-400">{avs.reward}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How Restaking Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-purple-400 mb-2">Stake ETH</h3>
              <p className="text-xs text-gray-400">Deposit ETH to earn staking rewards (3-4% APY)</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Restake</h3>
              <p className="text-xs text-gray-400">Opt into EigenLayer to secure additional services</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Get LRT</h3>
              <p className="text-xs text-gray-400">Receive liquid restaking token (eETH, pufETH, etc.)</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Earn More</h3>
              <p className="text-xs text-gray-400">Use LRT in DeFi while earning AVS rewards</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-purple-400 hover:underline">@samdevrel</a>
            {' • '}
            Data is simulated for demo purposes
          </p>
        </footer>
      </div>
    </main>
  );
}
