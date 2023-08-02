'use client';

import { Collapse, Dropdown, initTE } from 'tw-elements';
import {useEffect, useState} from 'react';
import { Divide as Hamburger} from 'hamburger-react'

export default function Header() {
    const [isOpen, setOpen] = useState(false);

    useEffect(()=> {
        initTE({Collapse, Dropdown})
    }, [])

    return(
        //Main navigation container

        <nav className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div className="ml-2">
                    <a className="text-xl text-neutral-800 dark:text-neutral-200" href="#">
                        Navbar
                    </a>
                </div>

                {/*Hamburger button for mobile view*/}
                <button className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button" data-te-collapse-init data-te-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="true" aria-label="Toggle navigation">
                    {/*Hamburger icon*/}
                    <Hamburger />
                </button>

                {/*Collapsible navbar container*/}
                <div className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto" id="navbarSupportedContent2" data-te-collapse-item>

                    {/*Left links*/}
                    <ul className=" p list-style-none mr-auto flex flex-col lg:flex-row pl-0 lg:mt-1 lg:flex-row" data-te-navbar-nav-ref>
                        
                        {/*Home link*/}
                        <li className="my-4 pl-2 lg:my-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                            <a className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" aria-current="page" href="#" data-te-nav-link-ref>
                                Home
                            </a>
                        </li>

                        {/*Features link*/}
                        <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                            <a className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" href="#" data-te-nav-link-ref>
                                Features
                            </a>
                        </li>

                        {/*Pricing link*/}
                        <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                            <a className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" href="#" data-te-nav-link-ref>
                                Pricing
                            </a>
                        </li>

                        {/*Disabled link*/}
                        <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-link-ref>
                            <a className="text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" href='#'>
                                Disabled
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}
