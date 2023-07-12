# Notas del curso

Link del curso: https://platzi.com/cursos/react-hooks/

## breve repaso de la programación funcional

Según Wikipedia

- En ciencias de la computación, la programación funcional es un paradigma de programación declarativa basado en el uso de funciones matemáticas, en contraste con la programación imperativa, que enfatiza los cambios de estado mediante la mutación de variables.

## Función pura

Ahora, una función pura es aquella que dados unos valores de entrada (argumentos), regresa siempre el mismo valor salida. Además también debe cumplir que el proceso que haga, no afecte ningún estado fuera de su scope, es decir, que no tenga efectos colaterales.

## Optimización

## React.Memo vs React.PureComponent

PureComponent es una clase de React muy similar a React.Component, pero por defecto el método shouldComponentUpdate compara las props nuevas y viejas, si no han cambiado, evita volver a llamar el método render del componente. Esta comparación se llama Shallow Comparison.
