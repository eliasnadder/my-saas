/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './views/Overview';
import MLTracker from './views/MLTracker';
import Tasks from './views/Tasks';
import Chat from './views/Chat';

export type ViewType = 'overview' | 'ml-tracker' | 'tasks' | 'chat';
export type ThemeMode = 'light' | 'dark' | 'system';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem('theme') as ThemeMode) || 'system';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      if (theme === 'dark' || (theme === 'system' && mediaQuery.matches)) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();

    const listener = () => {
      if (theme === 'system') applyTheme();
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [theme]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      <Sidebar 
        currentView={currentView} 
        setCurrentView={(view) => {
          setCurrentView(view);
          setIsSidebarOpen(false);
        }} 
        isOpen={isSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden relative w-full">
        <Header 
          currentView={currentView} 
          onMenuClick={() => setIsSidebarOpen(true)} 
          theme={theme}
          setTheme={setTheme}
        />
        <main className="flex-1 overflow-y-auto custom-scrollbar relative">
          {currentView === 'overview' && <Overview />}
          {currentView === 'ml-tracker' && <MLTracker />}
          {currentView === 'tasks' && <Tasks />}
          {currentView === 'chat' && <Chat />}
        </main>
      </div>
    </div>
  );
}

