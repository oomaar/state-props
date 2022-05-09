const sunMoonContainer = document.querySelector('.container__sunAndMoonIcons');

document.querySelector('.theme__toggleBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);
});