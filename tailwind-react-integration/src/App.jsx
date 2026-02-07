function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Setup Complete
          </div>
          <h1 className="block mt-1 text-2xl leading-tight font-bold text-black">
            Tailwind + React Integration
          </h1>
          <p className="mt-2 text-slate-500">
            Your environment is now fully configured. You can start building your 
            components using utility classes like flex, grid, and spacing.
          </p>
          
          <div className="mt-6 flex gap-4">
            <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Documentation
            </button>
            <button className="flex-1 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors">
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App