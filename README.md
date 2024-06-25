# 24-parejas

Aquí tienes la estructura HTML para el juego de las parejas.

Desde JS tienes que:

- Distribuir colores en cada carta
- Si se gira una carta, la carta permanecerá girada.
- Si se gira una segunda carta:
    - Si la carta no coincide con la primera, ambas se volverán a girar
    - Si la carta coincide con la primera, ambas permanecerán giradas.
        - *Opcional:* No se podrán volver a girar *(Es dificil)*
- Al girar todas las parejas:
    - Aparecerá un mensaje de felicitacón (alert)
    - Al hacer click en el todas las cartas volverán a mostrar su trasera (back)
    - Se volverán a distribuir colores y so podrá empezar el juego de nuevo
- Implemente un contador de
    - Partidas ganadas
    - Tiempo transcurrido

*Como girar las cartas:*

```js
function flipCard() {
  this.classList.toggle('flip');
}

const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));
```
