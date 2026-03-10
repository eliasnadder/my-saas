import { Search, Bell, Menu, Sun, Moon, Monitor } from 'lucide-react';
import { ViewType, ThemeMode } from '../App';
import { useState, useRef, useEffect } from 'react';

export default function Header({ currentView, onMenuClick, theme, setTheme }: { currentView: ViewType, onMenuClick: () => void, theme: ThemeMode, setTheme: (t: ThemeMode) => void }) {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTitle = () => {
    switch (currentView) {
      case 'overview': return 'Dashboard Overview';
      case 'ml-tracker': return 'ML Tracker';
      case 'tasks': return 'Task Manager';
      case 'chat': return 'AI Assistant Agent';
      default: return 'OpenClaw';
    }
  };

  return (
    <header className="h-16 flex-shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-20 transition-colors duration-200">
      <div className="flex items-center gap-4 lg:gap-6 flex-1">
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl lg:hidden transition-colors"
        >
          <Menu size={20} />
        </button>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white hidden md:block min-w-[160px]">{getTitle()}</h2>
        <div className="relative w-full max-w-md group hidden sm:block">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search tasks, datasets, or models..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800/50 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none dark:text-white dark:placeholder-slate-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 ml-auto">
        <div className="relative" ref={themeMenuRef}>
          <button 
            onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
            className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            title="Toggle theme"
          >
            {theme === 'light' ? <Sun size={20} /> : theme === 'dark' ? <Moon size={20} /> : <Monitor size={20} />}
          </button>
          
          {isThemeMenuOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50 overflow-hidden">
              <button onClick={() => { setTheme('light'); setIsThemeMenuOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${theme === 'light' ? 'text-blue-600 bg-blue-50 dark:bg-blue-500/10 font-medium' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}>
                <Sun size={16} /> Light
              </button>
              <button onClick={() => { setTheme('dark'); setIsThemeMenuOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${theme === 'dark' ? 'text-blue-600 bg-blue-50 dark:bg-blue-500/10 font-medium' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}>
                <Moon size={16} /> Dark
              </button>
              <button onClick={() => { setTheme('system'); setIsThemeMenuOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${theme === 'system' ? 'text-blue-600 bg-blue-50 dark:bg-blue-500/10 font-medium' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}>
                <Monitor size={16} /> System
              </button>
            </div>
          )}
        </div>

        <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200 dark:border-slate-700 mx-1 hidden sm:block"></div>
        
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Alex Sterling</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">AI Lead</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-blue-100 dark:border-blue-900/30 overflow-hidden">
            <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Sterling" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}
