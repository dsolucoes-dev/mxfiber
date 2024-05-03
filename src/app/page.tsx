import { ListCitiesHome } from "@/components/ui/ListCitiesHome";
import { getCities } from "@/services/getCities";
import { Metadata } from "next";
import Image from "next/image";
import Logo from '../../public/logo.png';



export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://mxfibra.com/'),
    title: `MXFiber`,
    description: `MXFiber : veja os planos disponíveis para você!`,
    keywords: `MXFiber, Planos, Internet, Fibra Óptica`,
    robots: "index, follow",
    generator: "MXFiber",
    category: "Internet",
    publisher: "MXFiber",
    openGraph: {

      type: "website",
      title: ` MXFiber`,
      locale: "pt_BR",
      description: `MXFiber veja os planos disponíveis para você!`,
      url: new URL(`https://mxfibra.com/`),
      siteName: ` MXFiber`,
      alternateLocale: ['pt-BR', 'en-US'],
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.1035add7.png&w=750&q=75`,
          width: 800,
          height: 600,
          alt: "MXFiber",
        },
      ],
    },


  }


}



export default async function Home() {

  const data = await getCities();

  return (
    <main className="bg-mx-blue-800 min-h-screen ">

      <div className="lg:px-6 px-3 py-7 space-y-5 lg:col-span-2 mx-auto container max-w-screen-lg">
        <Image src={Logo} alt="MXFiber" className='w-32' />
        <section>

          <ListCitiesHome data={data} />
        </section>
      </div>
    </main>


  );
}
