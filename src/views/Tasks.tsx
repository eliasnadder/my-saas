import { Plus, Filter, ArrowUpDown, Folder, Calendar, Block, Edit2, Trash2, BarChart2 } from 'lucide-react';

export default function Tasks() {
  const tasks = [
    { title: 'Train BERT on Arabic dataset v3', category: 'ML Engineering', date: 'Oct 24', priority: 'Critical', progress: 65, status: 'in-progress' },
    { title: 'Add Sanctum authentication', category: 'Core Infrastructure', date: 'Oct 28', priority: 'High', progress: 12, status: 'in-progress' },
    { title: 'Refactor data preprocessing pipeline', category: 'ML Engineering', date: 'Nov 02', priority: 'Medium', progress: 0, status: 'todo' },
    { title: 'Integrate Google Cloud Storage', category: 'Blocked: Missing API keys', date: '', priority: 'Low', progress: 5, status: 'blocked' },
  ];

  return (
    <div className="flex h-full animate-in fade-in duration-500">
      <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center transition-shadow focus-within:shadow-md focus-within:border-blue-500/50">
            <input type="text" placeholder="Quick-add a new task (e.g., 'Deploy model to staging')..." className="flex-1 border-none focus:ring-0 bg-transparent px-4 py-3 text-sm text-slate-900 dark:text-white outline-none placeholder:text-slate-400" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-xl mr-1 flex items-center justify-center transition-colors">
              <Plus size={20} />
            </button>
          </div>

          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pt-2">
            <div className="flex gap-6 overflow-x-auto no-scrollbar">
              {['All', 'To Do', 'In Progress', 'Done', 'Blocked'].map((tab, i) => (
                <button key={tab} className={`pb-3 border-b-2 px-1 text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-bold' : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex gap-2 mb-2">
              <button className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"><Filter size={18} /></button>
              <button className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"><ArrowUpDown size={18} /></button>
            </div>
          </div>

          <div className="space-y-3">
            {tasks.map((task, i) => (
              <div key={i} className={`bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all flex items-center gap-4 group ${task.status === 'blocked' ? 'opacity-75 bg-slate-50 dark:bg-slate-900/50' : ''}`}>
                <div className="flex-shrink-0">
                  {task.status === 'blocked' ? (
                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                    </div>
                  ) : (
                    <input type="checkbox" className="w-5 h-5 rounded-md border-slate-300 text-blue-600 focus:ring-blue-500/20 dark:bg-slate-800 dark:border-slate-700 cursor-pointer" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h4 className={`text-sm font-bold truncate ${task.status === 'blocked' ? 'text-slate-500 line-through' : 'text-slate-900 dark:text-white'}`}>{task.title}</h4>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                      task.priority === 'Critical' ? 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400' :
                      task.priority === 'High' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' :
                      task.priority === 'Medium' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' :
                      'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                  <div className={`flex items-center gap-4 text-xs ${task.status === 'blocked' ? 'text-rose-500' : 'text-slate-500 dark:text-slate-400'}`}>
                    <span className="flex items-center gap-1.5"><Folder size={14} /> {task.category}</span>
                    {task.date && <span className="flex items-center gap-1.5"><Calendar size={14} /> {task.date}</span>}
                  </div>
                </div>
                <div className="w-32 hidden md:block">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Progress</span>
                    <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">{task.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className={`${task.status === 'blocked' ? 'bg-slate-400' : 'bg-blue-600'} h-full rounded-full`} style={{ width: `${task.progress}%` }}></div>
                  </div>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                  <button className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors"><Edit2 size={16} /></button>
                  {task.status !== 'blocked' && <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-colors"><Trash2 size={16} /></button>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="w-80 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto p-6 hidden xl:block">
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="p-1.5 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
                <BarChart2 size={16} />
              </div>
              Project Focus
            </h3>
            <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50">
              <p className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-2">Current Sprint</p>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Q4 ML Optimization</h4>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                <span className="font-medium">Completion</span>
                <span className="font-bold text-slate-900 dark:text-white">72%</span>
              </div>
              <div className="w-full bg-blue-100 dark:bg-blue-900/30 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Priority Breakdown</h3>
            <div className="space-y-2">
              {[
                { label: 'Critical', count: 3, color: 'bg-rose-500' },
                { label: 'High', count: 5, color: 'bg-amber-500' },
                { label: 'Medium', count: 12, color: 'bg-blue-500' },
                { label: 'Low', count: 8, color: 'bg-slate-400' },
              ].map(p => (
                <div key={p.label} className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${p.color}`}></span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{p.label}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{p.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Recent Activity</h3>
            <div className="space-y-5">
              <div className="flex gap-3">
                <img src="https://i.pravatar.cc/150?img=5" className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700" alt="Sarah" />
                <div>
                  <p className="text-xs text-slate-900 dark:text-white font-bold">Sarah Chen</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">Completed <span className="text-blue-600 dark:text-blue-400 font-medium">"Update CUDA drivers"</span></p>
                  <p className="text-[10px] text-slate-400 mt-1 font-medium">12m ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <img src="https://i.pravatar.cc/150?img=11" className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700" alt="Marcus" />
                <div>
                  <p className="text-xs text-slate-900 dark:text-white font-bold">Marcus V.</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">Commented on <span className="text-blue-600 dark:text-blue-400 font-medium">"Arabic dataset v3"</span></p>
                  <p className="text-[10px] text-slate-400 mt-1 font-medium">45m ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
