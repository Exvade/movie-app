import squareBanner from '../assets/images/squareBanner.png';

export default function Banner() {
  return (
    <div className="bg-banner h-[80vh] bg-cover bg-center flex justify-center items-center">
      <div className="flex justify-between w-[90vw] mt-20 items-center">
        <div className='w-[637px] text-white'>
          <h1 className='text-[72px] font-bebas'>Furiosa: A Mad Max Saga</h1>
          <p className='text-[18px] mt-[23px]'>In "Furiosa: A Mad Max Saga," the fierce warrior Furiosa embarks on a perilous journey through a post-apocalyptic wasteland, battling ruthless enemies to reclaim her homeland.</p>
          <button className='px-[25px] w-[223px] py-[12px] bg-purple mt-[60px]'>Watch</button>
        </div>
        <div>
          <img src={squareBanner} alt="" />
        </div>
      </div>
    </div>
  )
}