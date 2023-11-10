import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
// import React, { useState, useEffect } from 'react'

const filmeUrl = "https://api.themoviedb.org/3/movie/"
const apiKey = "8ed200f50a6942ca5bc8b5cdec27ff22"


export default function Home (){
    // console.log(filmeUrl, apiKey);

    const getTopFilmes = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data)

    }

    // useEffect(()=> {

    //     const topFilmesUrl = `${filmeUrl}top_rated?${apiKey}`

    //     console.log(topFilmesUrl)
    // }, [])




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
            


            </div>




        </main>
        
        </>
    )
}