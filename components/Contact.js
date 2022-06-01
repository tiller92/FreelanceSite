

export default function Contact({open}){

  if(open){
    return(
    <>
    <div className="bg-white w-fit rounded-xl">
      <p className=" p-2 font-sans-apple-system text-purple-500">
        Currently taking projects!
        Email: ryantiller6@gmail.com
      </p>
    </div>
    </>
    )
  }else{
  return (
    <>
    <button className="
    
    font-sans-apple-system
      text-purple-500
       bg-white rounded-full
       p-1 m-3 w-36">
    <p>Contact</p>
    </button>
    </>
  )
  }
}