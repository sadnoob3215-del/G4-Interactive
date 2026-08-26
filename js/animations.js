"use strict";


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "show"
            );

        }
    );

}


/* =========================================
   HERO INITIAL ANIMATION
========================================= */

window.addEventListener(
    "load",
    () => {

        const heroElements =
            document.querySelectorAll(
                ".hero .reveal"
            );


        heroElements.forEach(
            (element, index) => {

                setTimeout(
                    () => {

                        element.classList.add(
                            "show"
                        );

                    },
                    120 + (index * 140)
                );

            }
        );

    }
);
