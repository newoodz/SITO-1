const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('nav');if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'))}
const cards=document.querySelectorAll('.tilt');cards.forEach(card=>{card.addEventListener('mousemove',e=>{if(innerWidth<800)return;const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;card.style.transform=`perspective(700px) rotateX(${(y/r.height-.5)*-5}deg) rotateY(${(x/r.width-.5)*5}deg) translateY(-5px)`});card.addEventListener('mouseleave',()=>card.style.transform='')});
document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();alert('Grazie! Il modulo è pronto per essere collegato al servizio email.');}));
document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", function () {

        const article = this.closest("article");

        article.classList.toggle("open");

        if (article.classList.contains("open")) {
            this.textContent = "Mostra meno ↑";
        } else {
            this.textContent = "Continua a leggere ↓";
        }

    });
});