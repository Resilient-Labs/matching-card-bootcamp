let arrUrl = ['/images/01.jpg', '/images/02.jpg', '/images/03.jpg', '/images/04.jpg', '/images/05.jpg', '/images/01.jpg', '/images/02.jpg', '/images/03.jpg', '/images/04.jpg', '/images/05.jpg']
arrUrl = arrUrl.sort(() => (Math.random() - 0.5));
document.querySelectorAll('.back').forEach((e, i) => e.src = arrUrl[i])

const game = {
    match: [],
    matches() {
        if (this.match.length == 2 && this.match[0] == this.match[1]) {
            document.querySelectorAll('.rotated').forEach(e => e.classList.remove("rotated"))
            this.match = []
        } else if (this.match.length == 2 && this.match[0] !== this.match[1]) {
            setTimeout(this.rotateBack, 1000)
            this.match = []
        }
    },
    rotateBack() {
        document.querySelectorAll('.rotated').forEach(e => {
            e.style.transform = 'rotateY(0deg)'
        })
    }
}

document.querySelector('body').addEventListener('click', flip => {
    let parent = flip.target.parentElement
    let imageSrc = parent.nextElementSibling.firstElementChild.src
    let flipCard = parent.closest(".flipCard");
    let flipCardInner = parent.closest(".flipCardInner");
    flipCard.style.transform = "rotateY(360deg)";
    flipCardInner.style.transform = "rotateY(180deg)";
    flipCard.classList.add("rotated")
    flipCardInner.classList.add("rotated")
    game.match.push(imageSrc)
    game.matches()
})