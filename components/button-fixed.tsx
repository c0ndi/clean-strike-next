import Image from "next/image";
import WhatsAppIcon from '@/public/images/whatsapp-white.png'
import Link from "next/link";

const phone = "48660753189"

export function ButtonFixed() {
  return (
    <Link href={`https://wa.me/${phone}`} target={"_blank"}>
      <div className={"fixed bottom-6 right-6 sm:bottom-12  text-2xl sm:right-52 py-2 px-4 text-white rounded-md bg-green-500 font-medium flex items-center gap-2 z-50"}>
        <p className={"text-15px]"}>
          Zadzwoń
        </p>
        <Image src={WhatsAppIcon} alt={"WhatsApp"} height={24} width={24} />
      </div>
    </Link>
  )
}