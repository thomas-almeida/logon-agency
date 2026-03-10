"use client";

import Image from "next/image"
import { Video, Menu, X, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function TopBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsSidebarOpen(false); // Fecha a sidebar após clicar em um link
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const links = [
        {
            href: '/#services',
            name: 'Serviços'
        },
        {
            href: '/#cases',
            name: 'Cases'
        },
        {
            href: '/#awards',
            name: 'Prêmios'
        },
        {
            href: '/#about',
            name: 'Sobre'
        },
        {
            href: '/#contact',
            name: 'Contato'
        },
    ]

    return (
        <>
            {/* TopBar */}
            <div className="sticky top-0 z-20 p-2 px-4 md:px-8 w-full flex justify-between items-center backdrop-blur-md shadow-lg">
                {/* Logo */}
                <div>
                    <Image
                        src={"/logo.png"}
                        alt="Logo AGENCIA LOGON"
                        width={40}
                        height={40}
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-start items-center gap-4 ml-20">
                    {links.map((link, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(link.href)}
                            className="text-sm font-semibold cursor-pointer hover:text-slate-300 transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <button className="p-1 px-4 bg-white text-sm text-background rounded-full flex justify-between items-center cursor-pointer">
                        Agendar Reunião
                        <Video size="20px" className="ml-1" />
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={toggleSidebar}
                    className="md:hidden p-2 text-white hover:text-slate-300 transition-colors"
                    aria-label="Menu"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-30 md:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />

                {/* Sidebar */}
                <div className="absolute right-0 top-0 h-full w-80 bg-slate-900 shadow-xl transform transition-transform duration-300 ease-in-out">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b border-slate-700">
                        <Image
                            src={"/logo.png"}
                            alt="Logo AGENCIA LOGON"
                            width={32}
                            height={32}
                        />
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="p-2 text-white hover:text-slate-300 transition-colors"
                            aria-label="Fechar menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="p-4">
                        <ul className="space-y-4">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => handleScroll(link.href)}
                                        className="w-full text-left py-3 px-4 text-lg font-semibold text-white hover:bg-slate-800 rounded-lg transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <div className="mt-8 pt-4 border-t border-slate-700">
                            <button className="w-full p-3 bg-white text-background rounded-full font-bold flex justify-center items-center">
                                Agendar Reunião
                                <Video size="20px" className="ml-2" />
                            </button>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-3 bg-white text-background rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20"
                    aria-label="Voltar ao topo"
                >
                    <ChevronUp size={24} />
                </button>
            )}
        </>
    )
}