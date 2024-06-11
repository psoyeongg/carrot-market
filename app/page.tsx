export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-2xl w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold -mb-1">In transit</span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>
          <div className="bg-orange-600 size-12 rounded-full text-white flex justify-center items-center break-all font-medium text-sm text-center">
            <span className="leading-none">cool<br />blue</span>
          </div>
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-400 text-white px-2.5 py-1.5 text-xs font-medium rounded-full">TODAY</span>
          <span>9:30-10:30u</span>
        </div>
        <div className="relative">
          <div className="bg-gray-200 rounded-full w-full h-2 absolute" />
          <div className="bg-green-400 rounded-full w-2/3 h-2 absolute" />
        </div>
        <div className="flex justify-between items-center mt-5 text-gray-600">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400">Delivered</span>
        </div>
      </div>
    </main>
  );
}
