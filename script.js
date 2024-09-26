function toggleLetter() {
    const letter = document.getElementById('letter');
    const letterText = document.getElementById('letterText');

    letter.classList.toggle('unfolded');

    if (letter.classList.contains('unfolded')) {
        letterText.innerHTML = "halo nadia renata ini surat yang harusnya ada di bunga lu itu 🌸<br>pertama congrats karena telat menjadi perwa bullets anjayyy 🎉<br>jangan lupa di kerjain semua prokernya dan selalu ngerangkul satu sama lain 🤗<br>kalo lu kesusahan bisa reach out salah satu dari kita, karena kita pasti selalu bantu kalian 💪<br>bingung mau ngetik apa lagi owkwk 😂 jadi semangat yahh!!!";
    } else {
        letterText.innerText = "Click to reveal the letter!";
    }
}

function animateHeart(event) {
    const heart = event.currentTarget.querySelector('.heart');
    heart.classList.add('bounce');
    setTimeout(() => {
        heart.classList.remove('bounce');
    }, 500);
}

function animateStar(event) {
    const star = event.currentTarget.querySelector('.star');
    star.classList.add('twinkle');
    setTimeout(() => {
        star.classList.remove('twinkle');
    }, 1000);
}
