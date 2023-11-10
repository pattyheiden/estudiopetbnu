export function Plans() {
    return (
        <div className="w-[1000px]">
            <div className="grid grid-cols-3 pt-30 gap-6 w-[1000px] mb-2">
                <div className="col-span-1 items-center justify-center text-center bg-white rounded-b-lg">
                    <div className="flex bg-brown400 text-center h-20 items-center justify-center rounded-t-lg">
                        <span className="text-white font-semibold text-xl">BASIC</span>
                    </div>
                    <div className="flex justify-center text-center pt-30">
                        <span className="text-base font-semibold pr-1">R$</span>
                        <span className="text-5xl font-bold">210</span>
                        <span className="text-base font-semibold pl-1">00</span>
                    </div>
                    <span className="text-lg font-medium">mensal</span>
                    <div className="divide-y px-4">
                        <div className="pt-4 pb-4">Facebook e Instagram*</div>
                        <div className="pt-4 pb-4">6 postagens mensais <br /> (máx. 3 carrosséis)</div>
                        <div className="pt-4 pb-4">Criação de artes para os posts</div>
                        <div className="pt-4 pb-4">Cronograma de postagem</div>
                    </div>
                    <div className="pt-155 pb-3">
                        <button className="bg-brown300 hover:bg-brown200 text-brown100 text-base font-semibold px-9 py-3 rounded-lg">Contratar</button>
                    </div>
                    <div className="pb-6">
                        <span className="font-normal text-sm">Opcional (R$50,00)
                            e-mail personalizado
                            (contato@meunegocio.com.br
                        </span>
                    </div>
                </div>
                <div className="col-span-1 items-center justify-center text-center bg-white rounded-b-lg">
                    <div className="flex relative bg-brown400 text-center h-20 items-center justify-center rounded-t-lg overflow-hidden">
                        <div
                            className="absolute transform -translate-y-18 w-[155px] rotate-38 bg-brown200 text-center py-1 right-[-35px] top-[32px]">
                            <span className="text-xs font-semibold text-white">POPULAR</span>
                        </div>
                        <span className="text-white font-semibold text-xl">MASTER</span>
                    </div>
                    <div className="flex justify-center text-center pt-30">
                        <span className="text-base font-semibold pr-1">R$</span>
                        <span className="text-5xl font-bold">510</span>
                        <span className="text-base font-semibold pl-1">00</span>
                    </div>
                    <span className="text-lg font-medium">mensal</span>
                    <div className="divide-y px-4">
                        <div className="pt-4 pb-4">Facebook e Instagram*</div>
                        <div className="pt-4 pb-4">15 postagens mensais <br /> (máx. 7 carrosséis)</div>
                        <div className="pt-4 pb-4">Criação de artes para os posts</div>
                        <div className="pt-4 pb-4">Cronograma de postagem</div>
                        <div className="pt-4 pb-4">Google meu negócio <br /> Google Maps <br /> Seja encontrado no Google</div>
                    </div>
                    <div className="pt-12 pb-3">
                        <button className="bg-brown300 hover:bg-brown200 text-brown100 text-base font-semibold px-9 py-3 rounded-lg">Contratar</button>
                    </div>
                    <div className="pb-6">
                        <span className="font-normal text-sm">Opcional (R$50,00)
                            e-mail personalizado
                            (contato@meunegocio.com.br
                        </span>
                    </div>
                </div>
                <div className="col-span-1 items-center justify-center text-center bg-white rounded-b-lg">
                    <div className="flex bg-brown400 text-center h-20 items-center justify-center rounded-t-lg">
                        <span className="text-white font-semibold text-xl">ULTIMATE</span>
                    </div>
                    <div className="flex justify-center text-center pt-30">
                        <span className="text-base font-semibold pr-1">R$</span>
                        <span className="text-5xl font-bold">990</span>
                        <span className="text-base font-semibold pl-1">00</span>
                    </div>
                    <span className="text-lg font-medium">mensal</span>
                    <div className="divide-y px-4">
                        <div className="pt-4 pb-4">Facebook e Instagram*</div>
                        <div className="pt-4 pb-4">30 postagens mensais <br /> (máx. 15 carrosséis)</div>
                        <div className="pt-4 pb-4">Criação de artes para os posts</div>
                        <div className="pt-4 pb-4">Cronograma de postagem</div>
                        <div className="pt-4 pb-4">Google meu negócio <br /> Google Maps <br /> Seja encontrado no Google</div>
                    </div>
                    <div className="pt-12 pb-3">
                        <button className="bg-brown300 hover:bg-brown200 text-brown100 text-base font-semibold px-9 py-3 rounded-lg">Contratar</button>
                    </div>
                    <div className="pb-6">
                        <span className="font-normal text-sm">Opcional (R$50,00)
                            e-mail personalizado
                            (contato@meunegocio.com.br
                        </span>
                    </div>
                </div>
            </div>

            <div className="text-center font-semibold text-sm pt-3">
                <span>*O conteúdo de ambas as redes sociais são iguais.<br />
                    *O conteúdo da postagem é fornecido pelo cliente. Enviamos a arte para aprovação antes da postagem.<br />
                    *Mensagem de boas vindas incluso nos pacotes, texto deverá ser formulado pelo cliente.</span>
            </div>

        </div>
    )
}