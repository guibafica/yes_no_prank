function App() {
  return (
    <>
      <div className="bg-slate-900 w-screen h-screen flex items-center justify-center flex-col max-sm:px-4">
        <h1 className="text-slate-200 text-xl font-bold max-sm:text-center">
          Minim consectetur consectetur veniam ipsum velit?
        </h1>

        <div className="flex flex-row w-full items-center justify-center gap-8 mt-10 max-sm:flex-col max-sm:gap-2">
          <button className="bg-green-500 w-40 h-10 rounded-sm transition-all text-2xl font-bold text-slate-900 hover:bg-green-600">
            SIM
          </button>

          <button className="bg-red-500 w-40 h-10 rounded-sm transition-all text-2xl font-bold text-slate-900 hover:bg-red-600">
            NÃO
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
