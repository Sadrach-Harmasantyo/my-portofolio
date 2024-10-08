import React, { Fragment } from "react";
import StarIcon from "@/assets/icons/star.svg";

const words = ["Performant", "Accessible", "Secure", "Interactive", "Scalable", "User Friendly", "Responsive", "Maintainable", "Search Optimized", "Usable", "Reliable"];

export default function Tape() {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left  [animation-duration:25s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    <div className="animate-spin [animation-duration:2s]">
                      <StarIcon className="size-6 text-gray-900 -rotate-12" />
                    </div>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>

    //test section double tape
    // <section className="relative py-16 lg:py-24 overflow-x-clip">
    //   <div className="absolute inset-0 flex justify-center items-center">
    //     {/* Elemen pertama */}
    //     <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rotate-3 -mx-1">
    //       <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    //         <div className="flex flex-none gap-4 pr-4 py-3">
    //           {words.map((word) => (
    //             <div key={word} className="inline-flex gap-4 items-center">
    //               <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
    //               <StarIcon className="size-6 text-gray-900 rotate-12" />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>

    //     {/* Elemen kedua */}
    //     <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 absolute top-1/2 -translate-y-1/2">
    //       <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    //         <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:25s]">
    //           {[...new Array(2)].fill(0).map((_, index) => (
    //             <Fragment key={index}>
    //               {words.map((word) => (
    //                 <div key={word} className="inline-flex gap-4 items-center">
    //                   <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
    //                   <div className="animate-spin [animation-duration:2s]">
    //                     <StarIcon className="size-6 text-gray-900 -rotate-12" />
    //                   </div>
    //                 </div>
    //               ))}
    //             </Fragment>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
