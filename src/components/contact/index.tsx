import { RiWhatsappFill, RiMapPin2Fill, RiInstagramFill } from "react-icons/ri";
import { Form } from "./form";

export function Contact() {
    return(
        <div className="grid grid-cols-2 w-[1000px] m-auto mt-30 mb-30">
            <div className="flex flex-col bg-brown200 text-center pt-30 rounded-lg border-double border-8 border-brown100">
                <span className='font-bold text-3xl text-brown400'>Contato</span>
                <span className="pt-3 text-brown100 text-base">Ligue ou envie uma mensagem para nós. <br /> Retornamos em até 24h.</span>
                <span className="flex justify-center pt-6 gap-1 text-brown100">
                    <RiMapPin2Fill className="text-brown400 h-6 w-6"/>Somos de Blumenau/SC                    
                </span>
                <span className="flex justify-center pt-1 gap-1 text-brown100">                    
                    <RiWhatsappFill className="text-brown400 h-6 w-6"/>(47) 99671-8719         
                </span>
                <span className='font-bold text-lg text-brown400 mt-30'>Nos siga no Instagram</span>
                <span className="flex justify-center pt-3 pb-30 gap-1 text-brown100">                    
                    <RiInstagramFill className="text-brown100 hover:text-brown400 transition h-10 w-10"/>
                </span>
            </div>
            <div>
                <Form />
            </div>
        </div>
    )
}