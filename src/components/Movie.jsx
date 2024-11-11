import Card from "./Card";

export default function Movie() {
  return (
    <div className="bg-[#1b1b1b]">
      <div className="w-[90vw] mx-auto py-20">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-white uppercase">Movie List</h1>
          <input
            type="text"
            className="px-4 py-2 text-black w-[400px] rounded-sm"
            placeholder="search movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex mt-4">
          <span className="border-b-[3px] border-rose-600 w-[100px] block"></span>
          <span className="border-b-[3px] border-gray-600 w-[100%] block"></span>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-3 gap-4">
            <Card title='batman' />
          </div>
        </div>
      </div>
    </div>
  )
}
