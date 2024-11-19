import React, { useEffect, useState } from 'react'
import Data from './Data'
export default function Reviews() {
    const [rev, setrev] = useState({});
    const [index, setindex] = useState(0);
    const randomVal = ()=>{
        const randomobj = Math.floor(Math.random()* Data.length)
        console.log(randomobj);
        setrev(Data[randomobj])
    }
    const next = ()=>{
        let nextindex = index + 1;
        if(nextindex >= Data.length){
            nextindex = 0;
        }
        setindex(nextindex)
        setrev(Data[nextindex])
    }
    const prev = ()=>{
        let previndex = index - 1;
        if(previndex < 0){
            previndex = Data.length - 1;
        }
        setindex(previndex)
        setrev(Data[previndex])
    }
    useEffect(()=>{
        randomVal()
    },[]);
  return(
    <>
    <div className='w-full bg-black h-screen p-1'>
        <div className='w-[700px] h-[400px] p-4 mt-12 rounded-lg bg-white m-auto '>
            <div className='w-[120px] h-[120px] overflow-hidden rounded-full m-auto'>
                <img className='w-[100%] h-[100%] object-cover' src={rev.image} alt="" />
            </div>
            <p className='text-center '>{rev.name}</p>
            <p className='text-center font-medium'>{rev.post}</p>
            <p className='text-center mt-4'>{rev.review}</p>
            <div className='w-max m-auto'>
            <button className='p-3 bg-[red] mt-3 text-white rounded-lg' onClick={randomVal}>Surprise Me</button>  
            </div>
            <div className='w-[300px] m-auto mt-3 flex justify-between'>
            <button className='w-[120px] p-2 text-white rounded-md cursor-pointer bg-[green]' onClick={prev}>Previous</button>
            <button className='w-[120px] p-2 text-white rounded-md cursor-pointer bg-[green]' onClick={next}>Next</button>
            </div>  
        </div>
    </div>
    </>
  )
}







// import React, { useEffect, useState } from "react";
// import Data from "./Data";

// function Reviews() {

//     let [rev, setrev] = useState({})
//     let [index, setindex] = useState(0)

//     let randomobj = () => {
//         let randomIndex = Math.floor(Math.random() * Data.length)
//         setrev(Data[randomIndex])
//     }

//     useEffect(() => {
//         randomobj()
//     }, [])

//         const nxt = () => {
//         let nextIndex = index + 1;
//         if (nextIndex >= Data.length) {
//           nextIndex = 0;
//         }
//         setindex(nextIndex);
//         setrev(Data[nextIndex]);
//       };
    
//       const prv = () => {
//         let prevIndex = index - 1;
//         if (prevIndex < 0) {
//           prevIndex = Data.length - 1;
//         }
//         setindex(prevIndex);
//         setrev(Data[prevIndex]);
//       };
    


//     return (
//         <>
//             <div className=" w-[100%] h-[100vh] flex justify-center flex-col items-center bg-[brown] " >
//                 <div className=" w-[600px] h-[400px] bg-[black] rounded-[15px] pl-[10px] pr-[10px] ">
//                     <div className=" w-[120px] h-[120px] rounded-full mx-auto mt-[20px] overflow-hidden " >
//                         <img className=" object-cover w-[100%] h-[100%]  " src={rev.image} alt="" />
//                     </div>
//                     <div className=" text-[#ffffffff] font-sans text-center text-[17px] mt-[20px] " >
//                         {rev.name}
//                     </div>
//                     <div className=" text-[#ffffffff] font-sans text-center font-[700] text-[20px] mt-[20px] " >{rev.post}</div>
//                     <div className=" text-[#ffffffff] font-sans text-center text-[17px] mt-[30px] " >
//                         {rev.review}
//                     </div>
//                 </div>
//                     <button className=" w-[120px] h-[40px] rounded-[5px] bg-[red] text-[#ffffff] mt-[20px] " onClick={randomobj}>
//                         SURPRISE ME
//                     </button>
//                     <div>
//                         <button  className=" w-[120px] h-[40px] rounded-[5px] bg-[red] text-[#ffffff] mt-[20px] " onClick={prv}>
//                             Previous
//                         </button>
//                         <button  className=" w-[120px] h-[40px] rounded-[5px] bg-[red] ml-[20px] text-[#ffffff] mt-[20px] " onClick={nxt}>
//                             Next
//                         </button>
//                     </div>
//             </div>
//         </>
//     )
// }
// export default Reviews







// // import React, { useEffect, useState } from "react";
// // import Data from "./data";
// // function Reviews(){
// //     let [rev,setrev]=useState(Data[0])
// //     let [index,setindex]=useState(0)
// //     function randomobj(){
// //         let randomIndex=Math.floor(Math.random()*Data.length)
// //         setrev(Data[randomIndex]) 
// //     }
    
// //     function nxt(){
// //         let nxtindex =  index + 1
// //         if(index > Data.length-1){
// //             nxtindex=0
// //         }
// //         setindex(nxtindex)
// //         setrev(Data[nxtindex])
// //     }
// //     function prv(){
// //         let prvindex = index - 1
// //         if(prvindex < 0){
// //             prvindex = Data.length - 1
// //         }
// //         setindex(prvindex)
// //         setrev(Data[prvindex])
// //     }

// //     return(
// //         <>
// //       <div style={{width:'40%',borderRadius:'10px',border:'1px solid', padding:'10px 0px',background:'whitesmoke',margin:'auto',marginTop:'10%'}}>
// //         <div style={{width:'20%',margin:'auto',border:''}}>
// //             <img style={{height:'100px',width:'100px',borderRadius:'50%'}} src={rev.image} alt="" />
// //         </div>
// //         <div style={{margin:'auto',width:'100%',marginTop:'10px',color:'blue',textAlign:'center'}}>
// //             {rev.name}
// //         </div>
// //         <div style={{margin:'auto',width:'100%',marginTop:'10px',color:'blue',textAlign:'center'}}>
// //             {rev.post}
// //         </div>
// //         <div style={{margin:'auto',width:'100%',marginTop:'10px',color:'',textAlign:'center'}}>
// //             ''{rev.review}''
// //         </div>
// //         <div style={{margin:'auto',width:'20%',marginTop:'10px',}}>

// //         <button onClick={randomobj}>
// //          SURPRISE ME
// //         </button>
// //         </div >
// //         <div style={{margin:'auto',width:'20%',marginTop:'10px',}}>

// //         <button onClick={prv}>
// //             PREV
// //         </button>
// //         <button onClick={nxt}>
// //             NEXT
// //         </button>
// //         </div>
// //       </div>
        
// //         </>
// //     )
// // }
// // export default Reviews