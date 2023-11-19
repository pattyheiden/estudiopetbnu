import { RiWhatsappFill, RiMapPin2Fill, RiInstagramFill } from "react-icons/ri";
import { Form } from "./form";
import Link from "next/link";

export function Contact() {
    return (
        <div className="grid lg:grid-cols-2 lg:w-[1000px] m-auto mt-30 mb-10">
            <div className="flex flex-col bg-brown200 text-center pt-10 rounded-lg border-double border-8 border-brown100">
                <span className='font-bold text-3xl text-brown400'>Contato</span>
                <span className="pt-3 text-brown100 text-base px-8 lg:px-0">Ligue ou envie uma mensagem para nós. <br /> Retornamos em até 24h.</span>
                <span className="flex justify-center pt-6 gap-1 text-brown100">
                    <RiMapPin2Fill className="text-brown400 h-6 w-6" />Somos de Blumenau/SC
                </span>
                <span className="flex justify-center pt-1 gap-1 text-brown100">
                    <Link className="flex gap-1" href="https://api.whatsapp.com/send?phone=5547996718719" target="_blank">
                        <RiWhatsappFill className="text-brown400 h-6 w-6" />(47) 99671-8719
                    </Link>
                </span>
                <span className='font-bold text-lg text-brown400 mt-30'>Nos siga no Instagram</span>
                <span className="flex justify-center pt-3 pb-10 gap-1 text-brown100">
                    <Link href="https://www.instagram.com/estudiopetbnu/" target="_blank">
                        <RiInstagramFill className="text-brown100 hover:text-brown400 transition h-10 w-10" />
                    </Link>
                </span>
            </div>
            <div>
                <Form />
            </div>
        </div>
    )
}