function toggleTranslation(element) {
    const translation = element.nextElementSibling;
    if (translation && translation.classList.contains('translation')) {
        translation.style.display = (translation.style.display === 'none' || translation.style.display === '') ? 'inline' : 'none';
    }
}