document.addEventListener('DOMContentLoaded', () => {
  const colorSelector = document.getElementById('colorSelector');
  const customSelectWrapper = document.querySelector('.custom-select-wrapper');

  const updateBackgroundColor = () => {
      const selectedColor = colorSelector.value;
      document.body.style.backgroundColor = selectedColor;
      customSelectWrapper.style.boxShadow = `0 0 10px 2px ${selectedColor}`;
  };

  colorSelector.addEventListener('change', updateBackgroundColor);

  // Ініціалізація кольору при завантаженні сторінки
  updateBackgroundColor();
});
