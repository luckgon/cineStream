import NavBar from "@/components/NavBar"


export default function Cadastrar (){

    return(

        <>
            <NavBar/>
            <main className=" pt-20 bg-gray-400 h-screen  text-violet-950 ">
                {/* <h1>Cadastrar novo filme</h1> */}
                <div className=" bg-gray-300  ml-auto mr-auto w-auto max-w-[518px] h-auto rounded-md flex-row justify-center items-center p-7 shadow-xl" >
                    <h1 className=" flex justify-center text-4xl text-violet-950 font-bold mb-10">Cadastrar novo filme</h1>
                    <div className=" flex flex-col justify-center mt-7 items-center w-auto">
                        {/* <div className=" flex-col justify-center items-center">
                            <p className=" ">E-mail</p>
                            <input className=" flex justify-center rounded-md p-2 w-96 h-8" type="text" />
                        </div> */}

                        <div>
                            <p className="mt-4">Nome</p>
                            <input className=" flex justify-center rounded-md p-2 mt-1 w-96 h-8" type="text" placeholder='' />

                        </div>
                        <div>
                            <p className="mt-4">Categoria</p>
                            <input className=" flex justify-center rounded-md p-2 mt-1 w-96 h-8" type="text" placeholder='' />

                        </div>
                        <div>
                            <p className="mt-4">Data de Lançamento</p>
                            <input className=" flex justify-center rounded-md p-2 mt-1 w-96 h-8" type="text" placeholder='' />

                        </div>
                        <div>
                            <p className="mt-4">Diretor</p>
                            <input className=" flex justify-center rounded-md p-2 mt-1 w-96 h-8" type="text" placeholder='' />

                        </div>
                        <div>
                            <p className="mt-4">Resumo</p>
                            {/* <input className=" flex justify-center rounded-md p-2 mt-1 w-96 h-8" type="text" placeholder='' /> */}
                            <textarea className=" flex justify-center rounded-md p-2 mt-1 w-96 h-auto"></textarea>

                        </div>
                     



                    </div>
                </div>    

            </main>
        </>
    )
}