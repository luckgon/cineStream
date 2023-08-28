import Link from "next/link";

export default function NavBar({ active }){
    return(

        <nav className="bg-violet-700 w-full h-20 justify-between flex items-center overflow-hidden">
            

        

        
            <ul className="flex gap-8 items-end ml-4 mr-10">
                <li>
                    <Link className={active == "filmes" && "text-slate-100"} href="/filmes">
                        Filmes
                    </Link>
                </li>
                <li>
                    <Link className={active == "series" && "text-slate-100"} href="/series">
                        Series
                    </Link>
                </li>
                
                
            </ul>
            <div className=" flex justify-center">
                <Link href="/homepage">
                    <h1 className="  text-violet-950 font-bold text-4xl">
                        Cine Stream
                    </h1>
                </Link>
            </div>

            <div className="flex items-center mr-4" >
                <img className="h-12 w-12 rounded-full mr-3 ml-10" src="https://i.pravatar.cc/100" alt="avatar do usuário" />
                <p className="overflow-hidden">Usuário</p>
            </div>

                
        </nav>
    )


}