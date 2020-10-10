#Estructura de datos

* Las estructuras de datos son una forma particular de organizar datos en una computadora para que puedan ser utilizados de manera eficiente.

* Diferentes tipos de estructuras de datos son adecuados para diferentes tipos de aplicaciones, y algunos son altamente especializados para tareas especificas.

* Las estructuras de datos son un medio para manejar grandes cantidades de datos de manera eficiente para usos tales como grandes bases de datos y servicios de indexación de internet

### Fila (queue)
### Pila (stack)
### Lista entrelazada (Linked list)
### Lista doblemente entrelazada (doubled linked list)
### Tabla hash (hash table)

### Por que no utilizar un arreglo?
### Por que el arreglo tiene que pasar por un proceso de indexación para todos los valores restantes que lo convierte en una estructura de datos muy ineficiente para almacenar cientos de miles de datos.


### Fila (queue)

* Caracterizada por ser un secuencia de elementos en la que la operación de inserción (enqueue) se realiza por un extremo y la operación de extracción (dequeue) por el otro.
* FIFO

- [X] constructor - Métodos que tendrá la fila
- [X] enqueue - función enqueue, cuando entramos a la fila
- [X] dequeue - función dequeue, cuando salimos de la fila
- [X] getSize - Método auxiliar, obtiene el tamaño
- [X] isEmpty - función que verifica si esta vacía o no lo esta
- [X] peek - función que nos permite ver el primer valor, el siguiente que esta a punto de ser 'dequeue' sin sacarlo de la fila
- [X] print - Método que nos permite imprimir todos los valores de la fila


### Pila (Stack)

* Lista ordenada o estructura de datos que permite almacenar y recuperar datos, el método de acceso a sus elementos es de tipo LIFO.

- [X] constructor
- [X] push
- [X] pop
- [X] getSize
- [X] isEmpty
- [X] peek
- [X] print

### Lista enlazada (Linked list)

* Una lista enlazada es una colección **linear** constituida por una secuencia de *nodos* en donde se guardan campos de datos arbitrarios y una referencia al siguiente nodo.

- [X] Node constructor
- [X] LinkedList constructor
- [X] add
- [X] insertAt
- [X] removeElement
- [X] removefrom
- [X] isEmpty
- [X] getSize
- [X] print

### Lista doblemente enlazada (Double Linked List)

* Estructura de datos que consiste en un conjunto de nodos enlazados secuencialmente. Cada nodo contiene dos campos llamados enlaces, que son referencias al nodo siguiente y el anterior en la secuencia de nodos.

- [X] Node constructor
- [X] LinkedList constructor
- [X] addToHead
- [X] addToTail
- [X] insertAt
- [X] removeFromHead
- [X] removeFromTail
- [X] removeData
- [X] print
- [X] printReverse
- [X] getSize
- [X] isEmpty
