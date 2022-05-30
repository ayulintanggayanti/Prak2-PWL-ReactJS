import React from "react";
import fotoProfile from "../assets/images/lintang.jpg";
import logoBootstrap from "../assets/images/bootstrap.png";
import logoFigma from "../assets/images/figma.png";
import logoCss from "../assets/images/css.png";
import logoHtml from "../assets/images/html.png";
import logoJs from "../assets/images/js.png";

import 'font-awesome/css/font-awesome.min.css';

export const Profile = () => {
    return (
        <div class="mt-10">
            <div className="mx-4 text-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 h-62">
                    <div className="flex">
                        <img src={fotoProfile} class="w-40 h-40 md:w-52 md:h-52 rounded-3xl md:rounded-full" alt="" />
                        <div className="block ml-3 md:ml-10 py-5 ">
                            <p className="block">Hello, I'm</p>
                            <h2 className="block text-xl lg:text-4xl">Ayu Lintang</h2>
                            <p className="text-sm opacity-70 mt-2">Frontend Website Developer</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="lg:block ">
                            <p className="block pt-5 text-center md:text-left">Career</p>
                            <ul className="mt-2">
                                <li className="text-lg  text-center md:text-left">SMAN 1 Gadingrejo</li>
                                <p className="text-sm opacity-70  text-center md:text-left">IPA 2017 - 2019</p>
                                <li className="text-lg mt-2  text-center md:text-left">Institut Teknologi Sumatera</li>
                                <p className="text-sm opacity-70  text-center md:text-left">Teknik Informatika 2019</p>
                            </ul>
                        </div>
                        <div className="lg:block ">
                            <p className="block pt-5 text-center md:text-left mt-5 md:mt-0">Organization</p>
                            <ul className="mt-2">
                                <li className="text-lg mt-2 text-center md:text-left">Himpunan Mahasiswa Teknik Informatika</li>
                                <p className="text-sm opacity-70 text-center md:text-left">2020 - sekarang</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skills">
                <h1 class="text-center text-gray-50 mt-10 md:mt-5">Familiar with</h1>
                <div class="image-logo justify-center flex gap-6">
                    <img src={logoBootstrap} class="w-14 mt-3 shadow-xl rounded-xl" />
                    <img src={logoCss} class="w-14 mt-3 shadow-xl rounded-xl" />
                    <img src={logoHtml} class="w-14 mt-3 shadow-xl rounded-xl" />
                    <img src={logoJs} class="w-14 mt-3 shadow-xl rounded-xl" />
                    <img src={logoFigma} class="w-14 mt-3 shadow-xl rounded-xl" />
                </div>
            </div>
        </div>
    );
}

export default Profile;