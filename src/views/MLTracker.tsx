import { Plus, Filter, Layers, Calendar, BarChart2, CheckCircle, Zap, Activity, Download, MoreVertical } from 'lucide-react';

export default function MLTracker() {
  const summary = [
    { label: 'Total Runs', value: '1,284', trend: '+12%', icon: BarChart2 },
    { label: 'Best Accuracy', value: '98.2%', trend: '+0.4%', icon: CheckCircle },
    { label: 'Active Experiments', value: '12', trend: '-2%', icon: Zap, trendDown: true },
    { label: 'Model Health', value: '94.5%', trend: '+1.2%', icon: Activity },
  ];

  const runs = [
    { id: 'RUN-084', time: '2h ago', model: 'BERT-Large-v2', acc: '98.2%', loss: '0.021', dur: '1h 14m', status: 'Completed', action: 'Details' },
    { id: 'RUN-083', time: '4h ago', model: 'ResNet-50', acc: '94.1%', loss: '0.142', dur: '45m', status: 'Running', action: 'Stop' },
    { id: 'RUN-082', time: 'Yesterday', model: 'GPT-Lite', acc: '--', loss: 'NaN', dur: '12m', status: 'Failed', action: 'Retry' },
    { id: 'RUN-081', time: 'Yesterday', model: 'BERT-Large-v1', acc: '97.8%', loss: '0.034', dur: '1h 05m', status: 'Completed', action: 'Details' },
  ];

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1.5">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">ML Tracker</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Monitor and analyze your machine learning experiment runs in real-time.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-md shadow-blue-600/20 whitespace-nowrap">
          <Plus size={18} /> New Run
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3 p-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="relative flex-1 min-w-[250px]">
          <input type="text" placeholder="Search runs, models, or tags..." className="w-full bg-slate-50 dark:bg-slate-800/50 border-transparent rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none dark:text-white" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
          <Filter size={16} /> Status: All
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
          <Layers size={16} /> Model: Transformer
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
          <Calendar size={16} /> Last 7 days
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {summary.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-sm font-medium">{s.label}</span>
                <Icon size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-slate-900 dark:text-white leading-none">{s.value}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 mb-0.5 ${s.trendDown ? 'text-rose-600 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400' : 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400'}`}>
                  {s.trend}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Trends</h3>
            <select className="bg-slate-50 dark:bg-slate-800 border-none text-xs rounded-lg font-medium focus:ring-0 dark:text-slate-300 py-2 px-3 outline-none">
              <option>Accuracy vs. Epochs</option>
              <option>Loss Reduction</option>
            </select>
          </div>
          <div className="h-48 flex items-end gap-3 px-2">
            {[40, 55, 65, 60, 75, 85, 95].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-50 dark:bg-blue-900/20 rounded-t-md relative group" style={{ height: `${h}%` }}>
                <div className="absolute inset-x-0 bottom-0 bg-blue-200 dark:bg-blue-600/40 rounded-t-md transition-all group-hover:bg-blue-500 dark:group-hover:bg-blue-500" style={{ height: `${h + 10 > 100 ? 100 : h + 10}%` }}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-medium px-1">
            {['042', '043', '044', '045', '046', '047', '048'].map(n => <span key={n}>RUN-{n}</span>)}
          </div>
        </div>
        
        <div className="bg-blue-600 p-6 rounded-2xl text-white flex flex-col justify-between shadow-lg shadow-blue-600/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Activity size={120} />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Resource Usage</h3>
            <p className="text-blue-100 text-sm opacity-90">Real-time GPU and TPU cluster monitoring.</p>
          </div>
          <div className="space-y-6 relative z-10 mt-8">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span>GPU-A100 (4 nodes)</span>
                <span>84%</span>
              </div>
              <div className="w-full bg-black/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2" style={{ width: '84%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span>Memory Usage</span>
                <span>32GB/128GB</span>
              </div>
              <div className="w-full bg-black/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2" style={{ width: '25%' }}></div>
              </div>
            </div>
            <button className="mt-6 w-full bg-white/10 hover:bg-white/20 py-3 rounded-xl text-sm font-semibold border border-white/20 transition-colors backdrop-blur-sm">
              Manage Infrastructure
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Experiment Runs</h3>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 transition-colors">
              <Download size={18} />
            </button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 transition-colors">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-900/50 text-[11px] uppercase tracking-wider text-slate-500 font-bold border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-4">Run ID</th>
                <th className="px-6 py-4">Model Type</th>
                <th className="px-6 py-4">Accuracy</th>
                <th className="px-6 py-4">Loss</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {runs.map((run, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{run.id}</span>
                      <span className="text-[10px] text-slate-400 font-medium">{run.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <Layers size={14} className="text-slate-500 dark:text-slate-400" />
                      </div>
                      <span className="text-sm font-semibold dark:text-slate-200">{run.model}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold dark:text-slate-200">{run.acc}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 font-mono">{run.loss}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{run.dur}</td>
                  <td className="px-6 py-4">
                    {run.status === 'Completed' && <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-md text-[10px] font-bold uppercase tracking-wider">Completed</span>}
                    {run.status === 'Running' && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Running</span>
                      </div>
                    )}
                    {run.status === 'Failed' && <span className="px-2.5 py-1 bg-rose-100 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 rounded-md text-[10px] font-bold uppercase tracking-wider">Failed</span>}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 dark:text-blue-400 hover:underline text-xs font-bold uppercase tracking-wide">
                      {run.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
