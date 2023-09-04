import NavBar from "@/components/NavBar"


export default function Cadastrar (){

    return(

        <>
            <NavBar/>
            <main className=" bg-gray-400 h-full text-violet-950">
                {/* <h1>Cadastrar novo filme</h1> */}
                <div className=" bg-gray-300 mt-36 ml-auto mr-auto w-auto max-w-[518px] h-auto rounded-md flex-row justify-center items-center p-7 shadow-xl" >
                    <h1 className=" flex justify-center text-4xl text-violet-950 font-bold">Cadastrar novo filme</h1>
                    <div className=" flex flex-col justify-center mt-7 items-center">
                        <div className=" flex-col justify-center items-center mt-24">
                            <p className=" justify-center flex">E-mail</p>
                            <input className=" flex justify-center rounded-md p-2 w-80 h-8" type="text" />
                        </div>
                        <p className="mt-4">Nome</p>
                        <input className=" flex justify-center rounded-md p-2 mt-1 w-80 h-8" type="password" placeholder='' />
                        <p className="mt-4">Categoria</p>
                        <input className=" flex justify-center rounded-md p-2 mt-1 w-80 h-8" type="password" placeholder='' />
                        <p className="mt-4">Data de Lançamento</p>
                        <input className=" flex justify-center rounded-md p-2 mt-1 w-80 h-8" type="password" placeholder='' />
                        <p className="mt-4">Diretor</p>
                        <input className=" flex justify-center rounded-md p-2 mt-1 w-80 h-8" type="password" placeholder='' />
                        <p className="mt-4">Resumo</p>
                        <input className=" flex justify-center rounded-md p-2 mt-1 w-80 h-8" type="password" placeholder='' />
                    </div>
                </div>    

            </main>
        </>
    )
}