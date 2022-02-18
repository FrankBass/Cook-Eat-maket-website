




/*==================== affiche le menue sur mobile ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{

            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')
/*==================== suprimer le menu après avoir sélectionner une categorie ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //  supprimer la classe show-menu après avoir cliquer nav__link,
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))














/*==================== changement de la couleurs du themes de fond ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Sujet précédemment sélectionné (si l'utilisateur l'a sélectionné)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


// enregistrer le themes choisis par l'utilisateur meme si la page est réinitialisé
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'


if (selectedTheme) {
  // Si la validation est remplie, on demande quel était le problème pour savoir si on a activé ou désactivé le dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activer/désactiver le thème manuellement avec le bouton
themeButton.addEventListener('click', () => {
    // Ajouter ou supprimer l'icônes du themes sombres
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //  ont enregistre le themes et l'icone choisis par l'utilisateur meme si la page est réinitialisé
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})

/*==================== Bouton SCROLL TOP ====================*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*==================== ANIMATION SCROLL REVEAL====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.accueil__data, .accueil__img,
            .us__data, .us__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})
