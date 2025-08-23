# Bugs para resolver

los bugs prensentes en la aplicacion de "timer-app" son los siguientes:

## Lista de Bugs:
1. Doble temporizador

### Especificacion de bugs:

1. Desde un principio la aplicacion se penso para tener un temporizador unico, esto significa que el usuario no puede activar mas de un temporizador al mismo tiempo, al ejecutar uno solo podra ejecutar otro al finalizar el tiempo o al resetearlo para limpiar los setTimeOut y los setInterval, pero cuando el usuario presiona mas de una vez al boton de start este empieza a multiplicar los temporizadores, si se dio 3 veces al boton de start este ira reduciendo el tiempo multiplicado por esa cantidad de veces, un problema de tipo (1*n).