import { Zap, User, Paperclip, Send, FolderOpen, Wand2 } from 'lucide-react';

export default function Chat() {
  return (
    <div className="flex h-full bg-slate-50 dark:bg-slate-950 animate-in fade-in duration-500">
      <div className="flex-1 flex flex-col relative">
        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          
          {/* AI Message */}
          <div className="flex gap-4 max-w-3xl">
            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-500/30">
              <Zap size={16} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">OpenClaw AI • 10:24 AM</span>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl rounded-tl-sm shadow-sm border border-slate-200 dark:border-slate-800">
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Hello! I'm synchronized with your ML Tracker. I've detected 4 pending code reviews and 2 active model training sessions. How can I assist with your tasks today?
                </p>
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-4 max-w-3xl ml-auto flex-row-reverse">
            <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0">
              <User size={16} className="text-slate-600 dark:text-slate-400" />
            </div>
            <div className="flex flex-col gap-1.5 items-end">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">You • 10:25 AM</span>
              <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-sm shadow-md shadow-blue-600/20">
                <p className="text-sm leading-relaxed">
                  Can you give me a quick summary of the pending code reviews in the 'ML Tracker'? Specifically focusing on the high-priority ones.
                </p>
              </div>
            </div>
          </div>

          {/* AI Message Complex */}
          <div className="flex gap-4 max-w-3xl">
            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-500/30">
              <Zap size={16} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">OpenClaw AI • 10:25 AM</span>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl rounded-tl-sm shadow-sm border border-slate-200 dark:border-slate-800">
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-5">
                  Of course. Here is the summary of the 2 high-priority reviews from the ML Tracker:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">PR #452: Optimizer Refactor</span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400 font-bold uppercase tracking-wider">Critical</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Changes in `training_loop.py` impacting convergence stability. Assigned to @dchen.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">PR #448: Data Pipeline v2</span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 font-bold uppercase tracking-wider">High</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Shuffling logic optimization for large-scale datasets. Assigned to you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {['Check Model Status', 'List Pending Tasks', 'Run Code Review'].map(chip => (
                <button key={chip} className="whitespace-nowrap px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Zap size={14} /> {chip}
                </button>
              ))}
            </div>
            
            <div className="relative group">
              <input type="text" placeholder="Type a message or ask about your ML projects..." className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 pl-5 pr-24 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 dark:text-white" />
              <div className="absolute right-2 top-2 flex gap-1">
                <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-xl">
                  <Paperclip size={18} />
                </button>
                <button className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 shadow-sm transition-all flex items-center justify-center">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <aside className="w-80 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col hidden lg:flex">
        <div className="p-6">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Active Context</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FolderOpen size={18} className="text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-bold dark:text-white">Deep Learning Pipeline</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Current Model</span>
                  <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400">BERT-Base-v2</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-[72%]"></div>
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-[10px] text-slate-400">Training Epoch 18/25</span>
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">72%</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-slate-500 uppercase mb-3">Priority Tasks</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Fix data leakage in v2</span>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Optimize inference latency</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">GPU Util</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">84%</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">VRAM</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">12.4 GB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto p-6 bg-slate-50 dark:bg-slate-800/30 m-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
          <div className="flex flex-col items-center text-center">
            <Wand2 size={24} className="text-blue-600 dark:text-blue-400 mb-2" />
            <p className="text-[12px] font-bold text-slate-900 dark:text-white mb-1">Smart Suggestions</p>
            <p className="text-[10px] text-slate-500 leading-relaxed italic">"I can analyze your training logs for potential overfitting markers."</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
