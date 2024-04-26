import React from "react";
import ReadMore from './ReadMore';
export default function Resume() {
    return(
        <section id="resume" style={{marginLeft:'9rem'}}>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex justify-center">              
            </div>
            <div class="text-center sm:text-left">
                <h1 class="sm:text-4xl text-3xl font-medium title-font text-blue-900 mb-4 flex justify-center">
                My Work Experience
                </h1>
            </div>
            <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col item-center flex justify-center">
             <div class="container mx-auto my-auto flex flex-wrap w-auto">
             <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                <div class="p-8 rounded-xl shadow-md border border-gray-200">
                 <h4 class="mb-2 text-lg font-semibold"> Lorem ipsum</h4>
                  <h4 class="mb-2 text-sm font-semibold text-blue-600"> </h4>
                  <ReadMore
                  initialText="Phasellus orci augue"
                  fullText={
                          <>
                  • Vestibulum vehicula accumsan luctus.<br/>
                  • Sed blandit malesuada bibendum.<br/>
                  • Maecenas ullamcorper ornare arcu, vitae aliquet leo aliquet in.<br/>
                  • Aenean vel porttitor neque.<br/>
                  • Fusce dictum finibus mauris, eu sodales sapien tempus id.<br/>
                  • Nam venenatis felis ut lacus porta tempor.
                  </>
                           }
                  />  
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                <div class="p-8 rounded-xl shadow-md border border-gray-200">
                 <h4 class="mb-2 text-lg font-semibold"> dolor sit amet  </h4>
                  <h4 class="mb-2 text-sm font-semibold text-blue-600">  </h4>
                  <ReadMore
                  initialText="interdum sollicitudin nulla in"
                  fullText={
                          <>
                  • Integer quam velit, sodales vel enim non, convallis pretium enim.<br/>
                  • In hac habitasse platea dictumst.<br/>
                  • Mauris at viverra orci.<br/>
                  • Donec ac consectetur velit.
                  </>
                           }
                  />  
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                <div class="p-8 rounded-xl shadow-md border border-gray-200">
                  <h4 class="mb-2 text-lg font-semibold">consectetur adipiscing elit</h4>
                   <h4 class="mb-2 text-sm font-semibold text-blue-600">  </h4>
                   <ReadMore
                    initialText="ornare hendrerit enim"
                    fullText={
                      <>
                    • Pellentesque quam nunc.<br/>
                    • tincidunt quis iaculis sit amet, elementum eu risus.<br/>
                    • Sed augue felis, aliquet non blandit vitae, feugiat ut justo.<br/>
                    • Suspendisse fermentum felis eget accumsan rhoncus.<br/>
                    • Phasellus sed pharetra lectus.<br/>
                    • Nullam ultrices lacinia risus. 
                      </>
                           }
                    /> 
                </div>
              </div>
                <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                  <div class="p-8 rounded-xl shadow-md border border-gray-200">
                   <h4 class="mb-2 text-lg font-semibold">Phasellus at libero lacus</h4>
                    <h4 class="mb-2 text-sm font-semibold text-blue-600">  </h4>
                    <ReadMore 
                    initialText="Fusce ullamcorper varius eros"
                    fullText={
                      <>
                      • Vestibulum nec diam tempor, porta tellus at, euismod leo.<br/>
                      • Donec rhoncus in turpis id pellentesque.<br/>
                      • Sed luctus ipsum in scelerisque finibus.<br/>
                      • Fusce massa enim, rhoncus at placerat nec, mattis ac ex. 
                      </>
                    }   
                    />
                   </div>
                 </div>                   
              </div>   
           </div>
           <div class="text-center sm:text-left">
                <h1 class="sm:text-4xl text-3xl font-medium title-font text-blue-900 mb-4 flex justify-center">
                My Education
                </h1>
            </div>
            <div class="container mx-auto flex flex-wrap">
            <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                    <div class="p-8 rounded-xl shadow-lg border border-gray-200">
                      <h4 class="mb-2 text-lg font-semibold"> Ut pellentesque ex ut vehicula dignissim  </h4>
                        <h4 class="mb-2 text-sm font-semibold text-blue-600"> Mauris cursus imperdiet leo </h4>
                     </div>
                     
            </div> 
            <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                    <div class="p-8 rounded-xl shadow-lg border border-gray-200">
                      <h4 class="mb-2 text-lg font-semibold"> Nullam id justo est </h4>
                        <h4 class="mb-2 text-sm font-semibold text-blue-600"> Etiam et ligula luctus, finibus nunc quis, feugiat nisi</h4>
                     </div>                     
            </div> 
            <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                    <div class="p-8 rounded-xl shadow-lg border border-gray-200">
                      <h4 class="mb-2 text-lg font-semibold"> Vivamus eget ullamcorper mi. </h4>
                        <h4 class="mb-2 text-sm font-semibold text-blue-600"> Phasellus et neque quis nisl volutpat tempus. </h4>
                     </div>                     
                </div> 
                <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                    <div class="p-8 rounded-xl shadow-lg border border-gray-200">
                      <h4 class="mb-2 text-lg font-semibold"> Quisque non finibus velit, quis fringilla turpis.</h4>
                        <h4 class="mb-2 text-sm font-semibold text-blue-600"> Nullam malesuada faucibus finibus.</h4>
                     </div>                     
                </div>              
            </div>                            
        </section>
    );
}