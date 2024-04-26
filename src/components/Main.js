import React from "react";
export default function Main() {
    return(
        <section id="main" style={{marginLeft:'9rem'}}>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col item-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:item-start md:text-left mb-16 md:mb-0 item-center text-center">
                  
                    <div className="flex justify-center">
                        <a href="https://www.linkedin.com" className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded text-lg">
                            Connect with me
                        </a>
                    </div>
                    <br/><br/><br/>
                <a href="#about" className="flex justify-center">
                    <svg class="animate-bounce w-6 h-6 text-black" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                   <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                   </svg>
                </a>
                </div>
                </div>
        </section>
    );
}
