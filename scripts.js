window.addEventListener('load', () => {
    loadComponent('./buttons/buttons.html', 'container')
        .then(() => loadComponent('./progress/progress.html', 'container'))
        .then(() => loadComponent('./cursor/cursor.html', 'container'));
});

async function loadComponent(url, containerId) {
    return fetch(url)
        .then(res => res.text())
        // load html
        .then(html => {
            const template = document.createElement('template');
            template.id = 'container';
            template.innerHTML = html;
            document.getElementById(containerId).appendChild(template.content);
        })
        // load scripts
        .then(() => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                const noExt = url.replace(/\.html$/, ".");
                scriptPath = noExt + 'js';
                console.log(scriptPath);
                script.src = scriptPath;
                script.onload = () => {
                    console.log("External script loaded successfully!");
                    // If that file defines global functions, you can call them here
                    if (typeof externalFunction === "function") {
                        // externalFunction();
                    };
                    resolve();
                    script.onerror = reject;

                };
                document.body.appendChild(script);
            });

        })
        .catch(err => console.error(err));
}




