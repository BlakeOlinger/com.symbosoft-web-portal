window.addEventListener("beforeinstallprompt", beforeInstall);

let deferredInstallPrompt;

function beforeInstall(event) {
    deferredInstallPrompt = event;

    let installButton = document.createElement("button");
    installButton.setAttribute("id", "installButton");
    installButton.setAttribute("onclick", "installApp()");
    installButton.innerText = "Install";

    document.body.appendChild(installButton);

}

function installApp() {
    console.log("User clicked install button ...");

    document.body.removeChild(document.getElementById("installButton"));

    deferredInstallPrompt.prompt();

    deferredInstallPrompt.userChoice
        .then(choice => {
            if(choice.outcome === "accepted")
                console.log("User installed app.");
            else
                console.log("User did not install app.");

            deferredInstallPrompt = null;
        });
}