const html = document.documentElement;
        const body = html.children[1];
        const ul = body.children[0];
        /* elemento padre di ul */
        console.log(ul.parentElement);
        /* secondo elemento figlio di ul */
        const li = ul.children[1];
        console.log(li.innerText);
        /* elemento fratello successivo del secondo li */
        console.log(li.nextElementSibling.innerText);
        /* elemento fratello precedente del secondo li */
        console.log(li.previousElementSibling.innerText);