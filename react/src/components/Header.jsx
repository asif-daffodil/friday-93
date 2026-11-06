import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";

export default function Header() {
   const [open, setOpen] = useState(false);
   const menuRef = useRef(null);
   const toggleRef = useRef(null);
   const closeRef = useRef(null);
   const opened = useRef(false);

   // One list for every width: a row in the bar from lg, a drawer below it. Open, the drawer is a
   // modal dialog: focus goes in, the page behind doesn't scroll, and closing returns focus.
   useEffect(() => {
      document.documentElement.classList.toggle("overflow-hidden", open);
      if (open) closeRef.current?.focus();
      else if (opened.current) toggleRef.current?.focus();
      opened.current = open || opened.current;
      if (!open) return undefined;
      // From lg the links sit in the bar, so an open drawer closes.
      const wide = window.matchMedia("(min-width: 64rem)");
      const onWide = () => {
         if (wide.matches) setOpen(false);
      };
      wide.addEventListener("change", onWide);
      return () => {
         wide.removeEventListener("change", onWide);
         document.documentElement.classList.remove("overflow-hidden");
      };
   }, [open]);

   const onKeyDown = (event) => {
      if (!open) return;
      if (event.key === "Escape") {
         event.preventDefault();
         setOpen(false);
      } else if (event.key === "Tab") {
         // Tab and Shift+Tab go round the drawer.
         const items = [...menuRef.current.querySelectorAll("a[href], button")];
         const first = items[0];
         const last = items[items.length - 1];
         if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
         } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
         }
      }
   };
   const dialog = open ? { role: "dialog", "aria-modal": "true", "aria-label": "Menu" } : {};

   return (
      <header className="relative border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
         <nav id="nav-simple" aria-label="Main" onKeyDown={onKeyDown}>
            <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 md:px-8">
               <a href="#" className="mr-6 flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:focus-visible:outline-zinc-50"><span className="flex size-7 items-center justify-center rounded-lg bg-neutral-950 text-white dark:bg-neutral-50 dark:text-neutral-950"><svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" /></svg></span><span className="text-[15px] font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">Lumora</span></a>
               <div ref={menuRef} id="nav-simple-menu" data-open={open ? "" : undefined} {...dialog} className="max-lg:fixed max-lg:inset-y-0 max-lg:right-0 max-lg:z-50 max-lg:hidden max-lg:w-full max-lg:max-w-sm max-lg:flex-col max-lg:overflow-y-auto max-lg:bg-white max-lg:shadow-2xl max-lg:ring-1 max-lg:ring-neutral-950/10 max-lg:data-open:flex lg:flex lg:min-w-0 lg:flex-1 lg:items-center dark:max-lg:bg-neutral-900 dark:max-lg:ring-neutral-800">
                  <div className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-neutral-200 px-4 lg:hidden dark:border-neutral-800">
                     <span aria-hidden="true" className="flex items-center gap-2"><span className="flex size-7 items-center justify-center rounded-lg bg-neutral-950 text-white dark:bg-neutral-50 dark:text-neutral-950"><svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" /></svg></span><span className="text-[15px] font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">Lumora</span></span>
                     <button ref={closeRef} type="button" id="nav-simple-close" onClick={() => setOpen(false)} aria-label="Close menu" className="group -mr-2 inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-neutral-950 transition-colors duration-150 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:focus-visible:outline-zinc-50"><svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button>
                  </div>
                  <ul className="flex flex-col gap-1 p-4 lg:flex-row lg:items-center lg:gap-7 lg:p-0">
                     <li><NavLink to="/use-ref" className="flex items-center font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 max-lg:rounded-lg max-lg:px-3 max-lg:py-2.5 max-lg:text-base max-lg:text-neutral-950 max-lg:hover:bg-neutral-100 max-lg:aria-[current=page]:bg-neutral-100 lg:rounded-sm lg:text-sm lg:whitespace-nowrap lg:text-neutral-600 lg:hover:text-neutral-950 lg:aria-[current=page]:text-neutral-950 dark:focus-visible:outline-zinc-50 dark:max-lg:text-neutral-50 dark:max-lg:hover:bg-neutral-800 dark:max-lg:aria-[current=page]:bg-neutral-800 dark:lg:text-neutral-400 dark:lg:hover:text-neutral-50 dark:lg:aria-[current=page]:text-neutral-50">use ref</NavLink></li>
                     <li><a href="#" className="flex items-center font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 max-lg:rounded-lg max-lg:px-3 max-lg:py-2.5 max-lg:text-base max-lg:text-neutral-950 max-lg:hover:bg-neutral-100 max-lg:aria-[current=page]:bg-neutral-100 lg:rounded-sm lg:text-sm lg:whitespace-nowrap lg:text-neutral-600 lg:hover:text-neutral-950 lg:aria-[current=page]:text-neutral-950 dark:focus-visible:outline-zinc-50 dark:max-lg:text-neutral-50 dark:max-lg:hover:bg-neutral-800 dark:max-lg:aria-[current=page]:bg-neutral-800 dark:lg:text-neutral-400 dark:lg:hover:text-neutral-50 dark:lg:aria-[current=page]:text-neutral-50">Features</a></li>
                     <li><a href="#" className="flex items-center font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 max-lg:rounded-lg max-lg:px-3 max-lg:py-2.5 max-lg:text-base max-lg:text-neutral-950 max-lg:hover:bg-neutral-100 max-lg:aria-[current=page]:bg-neutral-100 lg:rounded-sm lg:text-sm lg:whitespace-nowrap lg:text-neutral-600 lg:hover:text-neutral-950 lg:aria-[current=page]:text-neutral-950 dark:focus-visible:outline-zinc-50 dark:max-lg:text-neutral-50 dark:max-lg:hover:bg-neutral-800 dark:max-lg:aria-[current=page]:bg-neutral-800 dark:lg:text-neutral-400 dark:lg:hover:text-neutral-50 dark:lg:aria-[current=page]:text-neutral-50">Pricing</a></li>
                     <li><a href="#" className="flex items-center font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 max-lg:rounded-lg max-lg:px-3 max-lg:py-2.5 max-lg:text-base max-lg:text-neutral-950 max-lg:hover:bg-neutral-100 max-lg:aria-[current=page]:bg-neutral-100 lg:rounded-sm lg:text-sm lg:whitespace-nowrap lg:text-neutral-600 lg:hover:text-neutral-950 lg:aria-[current=page]:text-neutral-950 dark:focus-visible:outline-zinc-50 dark:max-lg:text-neutral-50 dark:max-lg:hover:bg-neutral-800 dark:max-lg:aria-[current=page]:bg-neutral-800 dark:lg:text-neutral-400 dark:lg:hover:text-neutral-50 dark:lg:aria-[current=page]:text-neutral-50">Customers</a></li>
                     <li><a href="#" className="flex items-center font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 max-lg:rounded-lg max-lg:px-3 max-lg:py-2.5 max-lg:text-base max-lg:text-neutral-950 max-lg:hover:bg-neutral-100 max-lg:aria-[current=page]:bg-neutral-100 lg:rounded-sm lg:text-sm lg:whitespace-nowrap lg:text-neutral-600 lg:hover:text-neutral-950 lg:aria-[current=page]:text-neutral-950 dark:focus-visible:outline-zinc-50 dark:max-lg:text-neutral-50 dark:max-lg:hover:bg-neutral-800 dark:max-lg:aria-[current=page]:bg-neutral-800 dark:lg:text-neutral-400 dark:lg:hover:text-neutral-50 dark:lg:aria-[current=page]:text-neutral-50">Docs</a></li>
                  </ul>
                  <div className="max-lg:mt-auto max-lg:grid max-lg:gap-2 max-lg:border-t max-lg:border-neutral-200 max-lg:p-4 lg:ml-auto lg:flex lg:items-center lg:gap-2 dark:max-lg:border-neutral-800">
                     <a href="#" className="inline-flex items-center justify-center rounded-lg text-sm font-medium whitespace-nowrap text-neutral-950 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 max-lg:h-10 max-lg:border max-lg:border-neutral-200 max-lg:bg-white max-lg:px-4 max-lg:shadow-xs max-lg:hover:bg-neutral-50 lg:h-9 lg:px-3.5 lg:hover:bg-neutral-100 dark:text-neutral-50 dark:focus-visible:outline-zinc-50 dark:max-lg:border-neutral-700 dark:max-lg:bg-neutral-900 dark:max-lg:hover:bg-neutral-800 dark:lg:hover:bg-neutral-800">Sign in</a>
                  </div>
               </div>
               <a href="#" className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-3.5 text-sm font-medium whitespace-nowrap text-white shadow-xs transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:translate-y-px max-lg:ml-auto dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-50">Start free trial</a>
               <button ref={toggleRef} type="button" id="nav-simple-toggle" onClick={() => setOpen(true)} aria-label="Menu" aria-expanded={open ? "true" : "false"} aria-controls="nav-simple-menu" className="group inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-neutral-950 transition-colors duration-150 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 lg:hidden dark:text-neutral-50 dark:hover:bg-neutral-800 dark:focus-visible:outline-zinc-50"><svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg></button>
            </div>
            <div id="nav-simple-scrim" hidden={!open} onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-neutral-950/40 backdrop-blur-xs lg:hidden"></div>
         </nav>
      </header>
   );
}