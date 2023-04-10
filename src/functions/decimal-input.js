export default {
  beforeMount(el) {
    el.addEventListener("input", () => {
      let value = el.value.replace(/[^0-9]/g, ""); // Remove caracteres não numéricos

      while (value.length < 3) {
        value = "0" + value;
      }

      const integerPart = parseInt(value.slice(0, -2), 10); // Converta para número e remova zeros à esquerda
      const decimalPart = value.slice(-2);
      el.value = `${integerPart}.${decimalPart}`;
    });
  },
};