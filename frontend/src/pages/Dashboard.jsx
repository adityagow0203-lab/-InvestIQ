function Dashboard() {

  return (

    <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <div className="w-[250px] bg-zinc-950 border-r border-zinc-800 p-6">

        <h1 className="text-3xl font-bold text-green-400 mb-10">
          InvestIQ
        </h1>

        <div className="space-y-3">

          <button className="w-full text-left p-3 rounded-xl bg-green-500 text-black font-semibold">
            Dashboard
          </button>

          <button className="w-full text-left p-3 rounded-xl hover:bg-zinc-800">
            Portfolio
          </button>

          <button className="w-full text-left p-3 rounded-xl hover:bg-zinc-800">
            Market
          </button>

          <button className="w-full text-left p-3 rounded-xl hover:bg-zinc-800">
            AI Insights
          </button>

          <button className="w-full text-left p-3 rounded-xl hover:bg-zinc-800">
            Settings
          </button>

        </div>

      </div>


      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">

        <h2 className="text-4xl font-bold mb-8">
          Dashboard
        </h2>

        {/* TOP CARDS */}
        <div className="grid grid-cols-3 gap-6 mb-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400">
              Portfolio Value
            </p>

            <h2 className="text-3xl font-bold mt-3 text-green-400">
              ₹12,45,000
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400">
              Daily Profit
            </p>

            <h2 className="text-3xl font-bold mt-3 text-green-400">
              +₹24,300
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400">
              Market Sentiment
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Bullish ↑
            </h2>
          </div>

        </div>

        {/* LOWER GRID */}
        <div className="grid grid-cols-2 gap-6">

          {/* WATCHLIST */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              Watchlist
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Apple</span>
                <span className="text-green-400">+2.1%</span>
              </div>

              <div className="flex justify-between">
                <span>Tesla</span>
                <span className="text-red-400">-1.4%</span>
              </div>

              <div className="flex justify-between">
                <span>NVIDIA</span>
                <span className="text-green-400">+5.7%</span>
              </div>

            </div>

          </div>


          {/* AI INSIGHTS */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-6 text-green-400">
              AI Insights
            </h2>

            <div className="space-y-4 text-zinc-300">

              <p>
                NVIDIA shows strong bullish momentum based on recent market trends.
              </p>

              <p>
                Portfolio risk currently moderate.
              </p>

              <p>
                Suggested sector exposure:
                Technology & AI.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Dashboard