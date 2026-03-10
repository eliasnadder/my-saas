import { Layers, CheckCircle2, Clock, AlertTriangle, MoreVertical } from 'lucide-react';

export default function Overview() {
  const metrics = [
    { label: 'Active Projects', value: '12', trend: '+2%', trendUp: true, icon: Layers, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-500/10' },
    { label: 'Tasks Done', value: '48', trend: '+15%', trendUp: true, icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
    { label: 'In Progress', value: '15', trend: 'Current', trendUp: null, icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10' },
    { label: 'Overdue', value: '3', trend: '-10%', trendUp: false, icon: AlertTriangle, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-500/10' },
  ];

  const focusTasks = [
    { name: 'Refine NLP Models', project: 'Arabic Language Pipeline', priority: 'Critical', deadline: 'Today, 5:00 PM', progress: 90, color: 'bg-rose-500' },
    { name: 'API Integration', project: 'Laravel Gateway Services', priority: 'High', deadline: 'Tomorrow', progress: 45, color: 'bg-amber-500' },
    { name: 'UI Bug Fixes', project: 'Flutter Mobile App', priority: 'Medium', deadline: 'Fri, 22 Nov', progress: 20, color: 'bg-blue-500' },
  ];

  const activeProjects = [
    { name: 'Arabic NLP Pipeline', progress: 82, color: 'bg-blue-600' },
    { name: 'Personal Dashboard', progress: 100, color: 'bg-emerald-500' },
    { name: 'Laravel API Gateway', progress: 64, color: 'bg-blue-600' },
    { name: 'Flutter Mobile App', progress: 15, color: 'bg-blue-600' },
  ];

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2.5 rounded-xl ${m.bg}`}>
                  <Icon size={20} className={m.color} />
                </div>
                {m.trendUp !== null && (
                  <span className={`text-xs font-bold flex items-center gap-1 ${m.trendUp ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {m.trend}
                  </span>
                )}
                {m.trendUp === null && (
                  <span className="text-xs font-bold text-slate-400">{m.trend}</span>
                )}
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{m.label}</p>
              <h3 className="text-2xl font-bold mt-1 dark:text-white">{m.value}</h3>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Focus */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
              <h2 className="font-bold text-lg dark:text-white">Today's Focus</h2>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">View All Tasks</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/50">
                    <th className="px-6 py-4">Task Name</th>
                    <th className="px-6 py-4">Priority</th>
                    <th className="px-6 py-4">Deadline</th>
                    <th className="px-6 py-4">Progress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                  {focusTasks.map((task, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold dark:text-slate-200">{task.name}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{task.project}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                          task.priority === 'Critical' ? 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400' :
                          task.priority === 'High' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' :
                          'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400'
                        }`}>
                          {task.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">{task.deadline}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden min-w-[60px]">
                            <div className={`h-full ${task.color} rounded-full`} style={{ width: `${task.progress}%` }}></div>
                          </div>
                          <span className="text-xs font-bold dark:text-slate-300 w-8">{task.progress}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Active Projects */}
        <div className="lg:col-span-1">
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
              <h2 className="font-bold text-lg dark:text-white">Active Projects</h2>
              <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <MoreVertical size={18} className="text-slate-400" />
              </button>
            </div>
            <div className="p-6 space-y-6 flex-1">
              {activeProjects.map((proj, i) => (
                <div key={i} className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold dark:text-slate-200">{proj.name}</span>
                    <span className={`text-xs font-bold ${proj.progress === 100 ? 'text-emerald-500' : 'text-blue-600 dark:text-blue-400'}`}>{proj.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${proj.color} rounded-full`} style={{ width: `${proj.progress}%` }}></div>
                  </div>
                  {i === 0 && (
                    <div className="flex -space-x-2 pt-1">
                      <img src="https://i.pravatar.cc/150?img=1" className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900" alt="team" />
                      <img src="https://i.pravatar.cc/150?img=2" className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900" alt="team" />
                      <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[8px] font-bold dark:text-slate-300">+3</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-6 pt-0 mt-auto">
              <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-md shadow-blue-600/20">
                Create New Project
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
