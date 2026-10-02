/* =========================
   G4 INTERACTIVE
   MAIN JAVASCRIPT
========================= */


/* =========================
   C-LEVEL ACCESS
========================= */

const accessForm =
    document.getElementById("accessForm");

const accessScreen =
    document.getElementById("accessScreen");

const internalScreen =
    document.getElementById("internalScreen");

const accessError =
    document.getElementById("accessError");

const passwordInput =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");

const logoutButton =
    document.getElementById("logoutButton");


/*
    테스트용 비밀번호

    GitHub Pages의 프론트엔드 인증이므로
    실제 보안용 비밀번호로 사용하지 마세요.
*/

const C_LEVEL_PASSWORD = "G4CLEVEL";


/* =========================
   SESSION CHECK
========================= */

if (
    accessScreen &&
    internalScreen
) {

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


            const password =
                passwordInput.value;


            if (
                password ===
                C_LEVEL_PASSWORD
            ) {

                sessionStorage.setItem(
                    "g4_clevel_authenticated",
                    "true"
                );


                showInternalScreen();


            } else {

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
   ERROR
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
   PASSWORD VISIBILITY
========================= */

if (togglePassword) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (
                passwordInput.type ===
                "password"
            ) {

                passwordInput.type =
                    "text";

                togglePassword.textContent =
                    "HIDE";

            } else {

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


/* =========================
   SMOOTH ANCHOR SCROLL
========================= */

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


                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        }
    );
