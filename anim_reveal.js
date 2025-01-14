const ratio = .5

const options ={
    root: null,
    rootMargin:'0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        } else {
            // Ajoutez cette partie pour cacher les éléments lorsque vous remontez la page
            entry.target.classList.remove('visible');
        }
    });
}


const observer = new IntersectionObserver(handleIntersect,options)
document.querySelectorAll('.masquee').forEach(function (r) {
    observer.observe(r)
})