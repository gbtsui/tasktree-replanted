import Logo from "./components/logo";

export default function Home() {
  return (
   <div className={"--font-atkinsonHyperlegible"}>
     <div id="navbar" className="page w-full p-3 flex flex-col items-center justify-end">
         <button className={"p-4 text-darkforestgreen bg-eggshell hover:bg-cream color-darkforestgreen transition rounded-bl-xl rounded-tr-xl rounded-br-sm rounded-tl-sm"}>Login</button>
     </div>
     <div id="header" className="page clear-both items-center text-center flex justify-center p-7">
         <Logo/>
         <div className="items-center overflow-auto">
             <h1 className={"text-9xl mx-0"}>tasktree</h1>
             <h3 className={"text-3xl"}>a plant-based project management tool</h3>
         </div>
     </div>
       <div className="page text-center">
           <main className="page">
               <br/>
               <div className="contain-content text-left p-10 bg-background">
                   <h3 className={"text-xl p-3"}>TaskTree is a program designed to help you finish projects
                       by growing trees. </h3>
                       <li className={"list-decimal"}>Plan out your project.</li>
                       <li className={"list-decimal"}>Break down tasks into leaves.</li>
                       <li className={"list-decimal"}>Plant a seed and start growing leaves.</li>
                       <li className={"list-decimal"}>Grow some fruit!</li>
               </div>

               <div className={"text-center w-full p-5"}>
                   <p><code>Created by gbtsui/Gabriel Tsui</code></p>
               </div>
           </main>
       </div>
   </div>
  );
}
