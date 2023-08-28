import Card from "@/components/Card";
import NavBar from "@/components/NavBar";

const filmeUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = "api_key=8ed200f50a6942ca5bc8b5cdec27ff22";


export default function Home (){
    console.log(filmeUrl, apiKey);
    return(

        <>
        
        <NavBar/>
        <main className=" bg-gray-400 m-1 p-8 rounded-sm ">


            <h1 className=" p-8 text-lg text-violet-900 font-semibold">Continue assistindo</h1>
            <div className=" flex overflow-auto">

                <Card/>
                <Card/>

            </div>
            <h1 className=" p-8 text-lg text-violet-900 font-semibold mt-20">Talvez goste</h1>

            <div className=" flex overflow-auto">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
          
            
               
                
                
            

            </div>




        </main>
        
        </>
    )
}