import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface NavbarProps {
  fixed?: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

function Navbar({ fixed = true, isMenuOpen, toggleMenu }: NavbarProps) {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/resume');
    router.prefetch('/education');
    router.prefetch('/skills');
    router.prefetch('/experience');
    router.prefetch('/projects');
    router.prefetch('/contact');
  }, [router]);

  useEffect(
    function () {
      const handleResize = function () {
        if (window.innerWidth >= 916 && isMenuOpen) {
          toggleMenu();
        }
      };

      window.addEventListener('resize', handleResize);

      return function () {
        window.removeEventListener('resize', handleResize);
      };
    },
    [isMenuOpen, toggleMenu]
  );
  return (
    <nav
      style={{
        zIndex: 10,
        position: fixed ? 'fixed' : 'relative',
        top: fixed ? 0 : 'auto',
        width: fixed ? '100%' : 'auto',
        background: 'linear-gradient(to right, #3F4C6B, #171F29, #3F4C6B)',
      }}
      className="flex text-white p-4 items-center h-16 justify-center w-full px-2 md:px-6 lg:px-8"
    >
      <div className="flex items-center justify-center">
        <Link legacyBehavior href="/">
          <a className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="mr-2 transform transition-transform duration-200 ease-in-out hover:scale-125 hover:rotate-[15deg]"
            />
            <span className="hidden lg:inline-block text-white font-bold text-lg ml-3 hover:text-2xl transition-fontSize duration-200 ease-in-out hover:text-blue-500">
              Home
            </span>
            <HomeIcon className="inline-block lg:hidden h-6 w-6 text-white ml-3 transition-transform ease-in-out duration-200 hover:scale-150 hover:text-blue-500" />
          </a>
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-center flex-1 md:pl-0 lg:pl-10 xl:pl-24">
        <div className="flex justify-end">
          <Link legacyBehavior href="/resume">
            <a className="text-white mx-4 text-lg hover:text-2xl transition-fontSize duration-200 ease-in-out hover:text-blue-500 text-center">
              Résumé
            </a>
          </Link>
          <Link legacyBehavior href="/education">
            <a className="text-white mx-4 text-lg hover:text-2xl transition-fontSize duration-200 ease-in-out hover:text-blue-500 text-center">
              Education
            </a>
          </Link>
          <Link legacyBehavior href="/skills">
            <a className="text-white mx-4 text-lg hover:text-2xl transition-fontSize duration-200 ease-in-out hover:text-blue-500 text-center">
              Skills
            </a>
          </Link>
          <Link legacyBehavior href="/experience">
            <a className="text-white mx-4 text-lg hover:text-2xl transition-fontSize duration-200 ease-in-out hover:text-blue-500 text-center">
              Experience
            </a>
          </Link>
          <Link legacyBehavior href="/projects">
            <a className="text-white mx-4 text-lg hover:text-2xl transition-fontSize duration-200 ease-in-out hover:text-blue-500 text-center">
              Projects
            </a>
          </Link>
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <a
          href="https://github.com/Kevin-Kwan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition-transform ease-in-out duration-200 hover:scale-150 hover:text-blue-500"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/kevinkwan3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition-transform ease-in-out duration-200 hover:scale-150 hover:text-blue-500 ml-4 mr-4"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
      </div>
      <div className="hidden md:block items-center">
        <Link legacyBehavior href="/contact">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto hover:text-xl transition-fontSize ease-in-out duration-200">
            Contact Me
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <button
          className="text-white hover:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2929 6.29289C19.6834 5.90237 20.3166 5.90237 20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L13.4142 15L20.7071 22.2929C21.0976 22.6834 21.0976 23.3166 20.7071 23.7071C20.3166 24.0976 19.6834 24.0976 19.2929 23.7071L12 16.4142L4.70711 23.7071C4.31658 24.0976 3.68342 24.0976 3.29289 23.7071C2.90237 23.3166 2.90237 22.6834 3.29289 22.2929L10.5858 15L3.29289 7.70711C2.90237 7.31658 2.90237 6.68342 3.29289 6.29289C3.68342 5.90237 4.31658 5.90237 4.70711 6.29289L12 13.5858L19.2929 6.29289Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM20 16H4C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16Z"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
