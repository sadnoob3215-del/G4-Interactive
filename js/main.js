/* ==================================================
   G4 INTERACTIVE
   MAIN JAVASCRIPT
================================================== */


/* ==================================================
   C-LEVEL
================================================== */

const accessForm = document.getElementById("accessForm");

const accessScreen = document.getElementById("accessScreen");

const internalScreen = document.getElementById("internalScreen");

const accessError = document.getElementById("accessError");

const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const logoutButton = document.getElementById("logoutButton");


/*
    C-Level Access Password

    현재 비밀번호:
    G4CLEVEL
*/

const C_LEVEL_PASSWORD = "G4CLEVEL";


/* =========================
   CHECK LOGIN
========================= */

if (accessScreen && internalScreen) {

    const authenticated =
        sessionStorage.getItem(
            "g4_clevel_authenticated"
        );


    if (authenticated === "true") {

        showInternalScreen();

    }

}


/* =========================
   LOGIN
========================= */

if (accessForm) {

    accessForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (!passwordInput) {
                return;
            }


            const password =
                passwordInput.value;


            if (password === C_LEVEL_PASSWORD) {

                sessionStorage.setItem(
                    "g4_clevel_authenticated",
                    "true"
                );


                showInternalScreen();

            }

            else {

                showAccessError();

            }

        }
    );

}


/* =========================
   SHOW INTERNAL
========================= */

function showInternalScreen() {

    if (!accessScreen || !internalScreen) {
        return;
    }


    accessScreen.classList.add(
        "hidden"
    );


    internalScreen.classList.remove(
        "hidden"
    );

}


/* =========================
   LOGIN ERROR
========================= */

function showAccessError() {

    if (!accessError) {
        return;
    }


    accessError.classList.add(
        "show"
    );


    if (passwordInput) {

        passwordInput.value = "";

        passwordInput.focus();

    }


    setTimeout(
        function () {

            accessError.classList.remove(
                "show"
            );

        },
        2500
    );

}


/* =========================
   PASSWORD SHOW / HIDE
========================= */

if (togglePassword) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (!passwordInput) {
                return;
            }


            if (
                passwordInput.type ===
                "password"
            ) {

                passwordInput.type =
                    "text";


                togglePassword.textContent =
                    "HIDE";

            }

            else {

                passwordInput.type =
                    "password";


                togglePassword.textContent =
                    "SHOW";

            }

        }
    );

}


/* =========================
   LOGOUT
========================= */

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            sessionStorage.removeItem(
                "g4_clevel_authenticated"
            );


            if (internalScreen) {

                internalScreen.classList.add(
                    "hidden"
                );

            }


            if (accessScreen) {

                accessScreen.classList.remove(
                    "hidden"
                );

            }


            if (passwordInput) {

                passwordInput.value = "";

                passwordInput.type =
                    "password";

            }


            if (togglePassword) {

                togglePassword.textContent =
                    "SHOW";

            }

        }
    );

}


/* ==================================================
   SMOOTH SCROLL
================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView(
                            {
                                behavior: "smooth"
                            }
                        );

                    }

                }
            );

        }
    );
