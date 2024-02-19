'use client'

import Link from "next/link";
import Logo from '../../../public/logo-blue.png'
import Image from "next/image";
import { Bars3Icon, ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";

import { Cidade } from "@/types/cidades";
import { useState } from "react";
import { inter } from "@/app/fonts";
// import { useEffect, useState } from "react";

type props = {
    cidade: Cidade
}

const MobileMenu = ({ isOpen, cidade }: { isOpen: boolean, cidade: Cidade }) => {
    if (!isOpen) return null;

    return (
        <div className={`mobile-menu ${isOpen ? 'open' : ''} lg:hidden space-y-1 ${inter.className} `}>

            <Link href={'/'} className="current">Para Você</Link>
            <Link href={''}>Para Empresa</Link>
            <Link href={''}>Entreterimento</Link>
            <Link href={''}>Indique um amigo</Link>
            <Link href={''}>Institucional</Link>

            {cidade?.nome ? (
                <Link href={'/'}>
                    <button className="flex hover:text-blue-500 cursor-pointer text-md " >
                        MX Fibra em <span className="ml-1 text-mx-blue-500">
                            {cidade?.nome} - {cidade?.estado?.Sigla}
                        </span>
                        <ChevronDownIcon className="w-5 text-mx-blue-500" />
                    </button>
                </Link>
            ) : (
                <Link href={'/'}>
                    <button className="flex hover:text-blue-500 cursor-pointer text-md " >
                        Escolha sua cidade
                        <ChevronDownIcon className="w-5 text-mx-blue-500" />
                    </button>
                </Link>
            )}
            <button className="m-0 bg-mx-green-400 text-md h-10 rounded-md text-mx-blue-800 px-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5">
                Assine Já
            </button>
            <button className="m-0 bg-mx-blue-500 text-md h-10 rounded-md text-white px-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5">
                Minha MX
            </button>

        </div>
    );
};

export function Navbar({ cidade }: props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div className="main-navbar">

                <div className="navbar">

                    <div className={`navbar__bottom`}>
                        <div className="container__bottom">
                            <div className="navbar__bottom-left">
                                <div className="bottom__left">
                                    <Link href={'/'}>
                                        <Image
                                            src={Logo}
                                            alt=""
                                            className="w-20 cursor-pointer transition-all duration-200 hover:scale-110"
                                        ></Image>
                                    </Link>
                                    <div className="flex items-center gap-10 ml-5">
                                        <div className="bottom__left-options">
                                            <Link href={''} className="current">Para sua casa </Link>
                                            <Link href={''}>Para sua empresa</Link>
                                            <Link href={''}>Entretenimento</Link>
                                            <Link href={''}>Indique um amigo</Link>
                                            <Link href={''}>Institucional</Link>
                                        </div>
                                        <div className=" bottom__right flex items-center gap-2">
                                            <button className="m-0 bg-mx-green-400 text-md h-10 rounded-full text-mx-blue-800 px-4 transform  transition-all duration-500 ease-in-out hover:bg-green-400/80 hover:text-white">
                                                Assine Já
                                            </button>
                                            <button className="m-0 bg-mx-blue-500 text-md h-10  rounded-full text-white px-4 transform  duration-500 transition-all ease-in-out hover:bg-blue-600">
                                                Minha MX
                                            </button>
                                            {cidade?.nome ? (
                                                <Link href={'/'}>
                                                    <button className="flex hover:text-blue-500 cursor-pointer text-md " >
                                                        MX Fibra em <span className="ml-1 text-mx-blue-500">
                                                            {cidade?.nome} - {cidade?.estado?.Sigla}
                                                        </span>
                                                        <ChevronDownIcon className="w-5 text-mx-blue-500" />
                                                    </button>
                                                </Link>
                                            ) : (
                                                <Link href={'/'}>
                                                    <button className="flex hover:text-blue-500 cursor-pointer text-md " >
                                                        Escolha sua cidade
                                                        <ChevronDownIcon className="w-5 text-mx-blue-500" />
                                                    </button>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="bottom__right-mobile flex" onClick={toggleMenu}>

                                    <Bars3Icon className="w-10" />
                                </div>
                                <MobileMenu isOpen={isMenuOpen} cidade={cidade} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
