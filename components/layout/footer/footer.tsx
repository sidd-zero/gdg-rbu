import React from 'react';
import { Mail, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import {Logo} from "@/components/layout/header/header";
const Footer: React.FC = () => {
    return (
        <footer className="bg-muted pt-12 relative">
            <div className="w-full mx-auto">
                {/* Main Footer Content */}
                <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start items-center space-y-8 lg:space-y-0">
                    {/* Left Section - Logo and Text */}
                    <div className="w-full md:w-auto mx-auto md:mx-0 flex-1 lg:max-w-md flex flex-col items-center justify-start">
                          <Logo className='w-full h-full max-w-20 '/>
                        <h3 className="text-2xl font-semibold text-secondary-foreground mb-2">
                            Google Developer Groups
                        </h3>
                        <p className="text-blue-500 text-base font-medium">
                            On Campus • Ramdeobaba University
                        </p>
                    </div>

                    {/* Vertical Divider - Hidden on mobile */}
                    <div className="hidden md:block w-px h-24 bg-gray-300 mx-8"></div>

                    {/* Right Section - Contact Info */}
                    <div className="flex-1 lg:max-w-md">
                        <div className="space-y-6 flex flex-col justify-start md:justify-center items-center md:items-start text-center md:text-start">
                            {/* Address */}
                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-muted-foreground shrink-0 mt-1" />
                                <div>
                                    <p className=" leading-relaxed text-muted-foreground text-center md:text-start ">
                                        Shri Ramdeobaba College of Engineering and Management,<br />
                                        Ramdeo Tekdi, Gittikhadan, Katol Road,<br />
                                        Nagpur - 440013
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <Mail className="w-6 h-6 text-muted-foreground shrink-0" />
                                <a 
                                    href="mailto:dsc.rknec@gmail.com"
                                    className=" text-blue-600 hover:text-blue-800 transition-colors duration-200 underline"
                                >
                                    dsc.rknec@gmail.com
                                </a>
                            </div>

                            {/* Social Media */}
                            <div className="flex items-center space-x-4 pt-2">
                                <div className="flex space-x-3">
                                    <a href="#" target='_blank' className='flex justify-center items-center p-4 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200'>
                                        <Instagram className="w-5 h-5 text-gray-600  transition-colors duration-200" />
                                    </a>
                                    <a href="#" target='_blank' className='flex justify-center items-center p-4 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200'>
                                        <Linkedin className="w-5 h-5 text-gray-600  transition-colors duration-200" />
                                    </a>
                                    <a href="#" target='_blank' className='flex justify-center items-center p-4 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200'>
                                        <Twitter className="w-5 h-5 text-gray-600 transition-colors duration-200" />
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Image */}
                 <div className="h-32 md:h-32 md:mt-12 bottom-0 overflow-hidden bg-muted bg-[url('/footer-assets.svg')] bg-cover bg-center bg-no-repeat">
                </div>
            </div>
        </footer>
    );
};

export default Footer;