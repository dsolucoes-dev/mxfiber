'use client'

import { Cidade } from "@/types/cidades";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";






export function ListCitiesHome({ data }: { data: { cidades: Cidade[] } }) {

    const [filteredCities, setFilteredCities] = useState(data.cidades)
    const [citieSelected, setCitieSelected] = useState<Cidade | null>(null)







    const filterCities = (value: string) => {
        const filtered = data.cidades.filter(city => city.nome.toLowerCase().includes(value.toLowerCase()))
        setFilteredCities(filtered)


        if (value === '') {
            setFilteredCities(data.cidades)
        }
    }



    return (
        <section className="space-y-6">
            <form className="space-y-3 flex items-center m-0 gap-4">
                <MagnifyingGlassIcon className="h-8 text-sm mt-2 text-white" />
                <input
                    onChange={e => filterCities(e.target.value)}
                    className="h-14 m-0 w-full bg-transparent border-b-2 border-gray-300 outline-none text-white placeholder:text-gray-200/50 placeholder:font-thin transition-all duration-150 text-2xl" placeholder="Escolha sua cidade" autoFocus />
            </form>

            <ul className="lg:ml-10 space-y-5 flex-grow h-[400px] overflow-y-auto scrollBarCities">
                {filteredCities.map((cidade, index) => (
                    <li key={index} className="flex items-center space-x-4 justify-between">
                        <Link href={`${cidade.slug}/para-voce`} onClick={()=> setCitieSelected(cidade)}>
                            <p className="text-2xl text-gray-300 hover:text-white cursor-pointer transition-all duration-200 hover:font-normal font-extralight">{cidade.nome} - {cidade.estado.Sigla}</p>
                        </Link>
                        <div>

                           {cidade.nome===citieSelected?.nome &&  <div className="-ml-10">
                                <div className="loading-container">
                                    <div className="loading-spinner"></div>
                                </div>
                                <span className="sr-only">Loading...</span>
                            </div>
                            }

                        </div>
                    </li>
                ))}
            </ul>
        </section>


    )
}