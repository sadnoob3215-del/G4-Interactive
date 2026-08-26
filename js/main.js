"use strict";


/* =========================================
   ELEMENTS
========================================= */

const navigation =
    document.getElementById("navigation");

const menuButton =
    document.getElementById("menuButton");

const backToTop =
    document.getElementById("backToTop");

const currentYear =
    document.getElementById("currentYear");

const navigationLinks =
    document.querySelectorAll(
        ".navigation a"
    );


/* =========================================
   CURRENT YEAR
========================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================
   MOBILE MENU
========================================= */

function closeMenu() {

    if (!navigation || !menuButton) {
        return;
    }

    navigation.classList.remove("open");

    menuButton.classList.remove("open");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.setAttribute(
        "aria-label",
        "메뉴 열기"
    );
}


function openMenu() {

    if (!navigation || !menuButton) {
        return;
    }

    navigation.classList.add("open");

    menuButton.classList.add("open");

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    menuButton.setAttribute(
        "aria-label",
        "메뉴 닫기"
    );
}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                navigation.classList.contains(
                    "open"
                );

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        }
    );
}


/* =========================================
   NAVIGATION LINKS
========================================= */

navigationLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                closeMenu();

            }
        );

    }
);


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    }
);


/* =========================================
   BACK TO TOP
========================================= */

function updateBackToTop() {

    if (!backToTop) {
        return;
    }

    if (window.scrollY > 500) {

        backToTop.classList.add(
            "show"
        );

    } else {

        backToTop.classList.remove(
            "show"
        );

    }
}


window.addEventListener(
    "scroll",
    updateBackToTop,
    {
        passive: true
    }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================
   RESIZE
========================================= */

window.addEventListener(
    "resize",
    () => {

        if (window.innerWidth > 700) {

            closeMenu();

        }

    }
);
