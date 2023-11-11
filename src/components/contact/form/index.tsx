export function Form() {
    return(
        <div>
            <form action="" className="flex flex-col justify-center items-center gap-y-3 mt-30 lg:mt-0">
                <input placeholder="Nome" className="flex w-[95%] h-12 rounded-lg border-b border-brown400 pl-4"/>
                <input placeholder="E-mail" className="flex w-[95%] h-12 rounded-lg border-b border-brown400 pl-4"/>
                <input placeholder="Assunto" className="flex w-[95%] h-12 rounded-lg border-b border-brown400 pl-4"/>
                <textarea className="flex w-[95%] h-44 rounded-lg border-b border-brown400 p-4" placeholder="Mensagem" name="" id="" cols={30} rows={10}></textarea>
            </form>
        </div>
    )    
}