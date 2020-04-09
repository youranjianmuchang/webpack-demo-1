import x from './x.js'
import jpg from './asset/1.jpg'

const div = document.getElementById('app');
div.innerHTML = `
<img src='${jpg}'>
`

const btn = document.createElement('button');
btn.innerText = "懒加载";
btn.onclick = () => {
    const lazyPromise = import('./lazy.js');
    lazyPromise.then((callback) => {
        console.dir(callback)
    }, () => {
        console.log("加载失败");
    });
}
div.appendChild(btn);