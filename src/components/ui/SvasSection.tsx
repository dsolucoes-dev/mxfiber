import { Svas } from "@/types/Sva";
import { Plano, Sva } from "@/types/planos";


export function SvasSection({ planos }: { svas?: Svas[], planos: Plano[] }) {

    // separei os svass dos planos

    let svas: Sva[] = [];

    planos.forEach(plano => {
        plano.svas.forEach(sva => {
            // remove duplicados

            if (!svas.some(s => s.sva_id.nome === sva.sva_id.nome)) {
                svas.push(sva)
            }
        })



    })

    const sortedSvas = svas.sort((a, b) => {
        // Primeiro, compara o status
        if (a.sva_id.destaque && !b.sva_id.destaque) return -1;
        if (!a.sva_id.destaque && b.sva_id.destaque) return  1;
      
        // Se os statuses forem  iguais, compara o nome
        if (a.sva_id.nome < b.sva_id.nome) return -1;
        if (a.sva_id.nome > b.sva_id.nome) return  1;
      
        // Se os statuses e nomes forem  iguais, retorna  0
        return  0;
      });
      

    if(svas.length === 0) return null

    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
                <div className="mx-auto max-w-screen-lg text-center mb-8 lg:mb-12 space-y-2">
                    <h2 className="text-4xl tracking-tight font-normal text-blue-700">
                        Muito mais conteúdo na sua <span className="font-semibold">
                            internet da MX Fibra
                        </span>
                    </h2>


                </div>

                <section className='lg:flex items-center gap-6 justify-center grid md:grid-cols-4 grid-cols-2 lg:px-10 '>
                    {sortedSvas.map((sva, index) => (
                       <img key={index} src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${sva.sva_id.icone.id}`}
                       alt={sva.sva_id.nome} className={`lg:w-[100px] xl:w-[120px] w-[120px] hover:scale-110 transition-all duration-300 select-none`} />

                    ))}
                </section>

            </div>
        </section>
    )
}