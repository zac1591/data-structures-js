class Node {
    constructor(data, next, prev){
        this.data = data;
        this.next = next;
        this.prev =  prev;
    };
};

class dobuleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    addToHead(data) {
        const newNode = new Node(data, this.head, null);
        if(this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;

        console.log("[Añadiendo elemento "+newNode.data+" a head]:");
        console.log(this.print());

        return newNode;
    };

    addToTail(data) {
        const newNode = new Node(data, null, this.tail);
        if(this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        else {
            this.tail = newNode;
            this.head = newNode;
        }
        this.size++;

        console.log("[Añadiendo elemento "+newNode.data+" a la cola]:");
        console.log(this.print());

        return newNode;
    };

    insertAt(data, index) { //el nodo que ocupa la posición index será movido a la siguiente posición
        if(index < 0 || index > this.size)
            return null;

        const newNode = new Node(data, null, null);
        let logmessage = "";

        if( index === 0) { //Si se inserta como cabeza
            newNode.next = this.head; //no colocamos la variable current sino directamente la referencia a la cabecera
            this.head.prev = newNode; //el previo de la actual cabecera ya no será null, sino sera nuestro nuevo nodo cabeza
            this.head = newNode; //cambiamos la referencia de la cabeza actual a nuestro nuevo nodo
            logmessage = "[Añadiendo elemento "+newNode.data+" en la primera posición (cabeza)]:";
        }
        else if (index === this.size) { //Si se inserta como cola (en la última posición existente)
            newNode.prev = this.tail; //el anterior de nuestro nuevo nodo será la actual cola
            this.tail.next = newNode; //la referencia de siguiente de nuestra actual cola será nuestro nuevo nodo
            this.tail = newNode; //cambiamos la referencia de la cola actual a nuestro nuevo nodo
            logmessage = "[Añadiendo elemento "+newNode.data+" en la última posición (cola)]:";
        }
        else { //Si se inserta en medio de dos posiciones
            let current = this.head; //nodo al que vamos a reemplazar de posición, se inicializa en el nodo de posición cero, osea la cabeza

            for(let i = 0; i < index; i++)
                current = current.next; //se avanza de nodo hasta llegar a la posición que reemplazamos por nuestro nuevo nodo

            let previous = current.prev; //nodo anterior al de la posición que reemplazamos /  = current.prev

            newNode.next = current; //el siguiente del nuevo nodo es el que ocupaba la posición que reemplazamos
            newNode.prev = previous; //el anterior del nuevo nodo es el anterior del que ocupaba la posición que reemplazamos

            current.prev = newNode;
            previous.next = newNode;
            logmessage = "[Añadiendo elemento "+newNode.data+" en la posición "+ (index+1) +" sin contar la posición cero]:";
        }
        this.size++;

        console.log(logmessage);
        console.log(this.print());

        return newNode; //retornamos el objeto / nodo creado
    };

    removeFromHead() {
        if(!this.size) return null;

        let current = this.head;

        if(this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;

        console.log("[Eliminando elemento "+current.data+" de la cabeza]:");
        console.log(this.print());

        return current;
    };

    removeFromTail() {
        if(!this.size) return null;

        let current = this.tail;

        if(this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;

        console.log("[Eliminando elemento "+current.data+" de la cola]:");
        console.log(this.print());

        return current;
    };

    removeData(data) {
        let current = this.head;

        let logmessage = "";
        let index = 0;

        while(current)  {
            if(current.data === data) {
                let previous = current.prev;
                let nextt = current.next;

                if(this.getSize === 1) // Si es el único elemento
                {
                    this.head = null;
                    this.tail = null;
                    logmessage = "[Eliminando el único elemento de la lista"+current.data+" ]:";
                } else if(!previous) { //si esta en la cabeza
                    this.head = current.next;
                    this.head.prev = null;
                    logmessage = "[Eliminando "+current.data+" que está la primera posición (cabeza)]:";
                } else if(!nextt) { //si esta en la cola
                    this.tail = current.prev
                    this.tail.next = null;
                    logmessage = "[Eliminando "+current.data+" que está la última posición (cola)]:";
                }
                else {
                    previous.next = nextt;
                    nextt.prev = previous;
                    logmessage = "[Eliminando elemento "+current.data+" de la posición "+ (index+1) +" sin contar la posición cero]:";
                }
                this.size--;

                console.log(logmessage);
                console.log(this.print());

                return current.data;
            }
            current = current.next;
            index++;
        }
        return null;
    };

    print() {
        let current = this.head;
        let result = "X < -- > ";
        while(current) {
            result += current.data + " < -- > ";
            current = current.next;
        }
        return result += 'X';
    };

    reversePrint() {
        let current = this.tail;
        let result = "X < -- > ";
        while(current) {
            result += current.data + " < -- > ";
            current = current.prev;
        }
        return result += 'X';
    };

    getSize() {
        return this.size;
    };

    isEmpty() {
        return this.size === 0;
    };
};

console.log("Iniciando objeto lista doblemente enlazada");
const list = new dobuleLinkedList();
console.log("¿Está Vacía?: "+list.isEmpty());
console.log("");

console.log("Insertando y manipulando datos de la lista doblemente enlazada");
list.addToHead('99');
list.addToHead('37');
list.addToTail('15');
list.addToHead('27');
list.addToHead('83');
list.addToTail('51');
list.insertAt('55', 3); //osea en la cola
list.insertAt('23', 2); //entre dos otros nodos
//
list.removeData('55');
list.removeData('37');
list.removeData('23');
list.removeFromHead();
list.removeFromTail();
console.log("");


console.log("Imprimiendo otras funciones:");
console.log("PRINT: "+list.print());
console.log("REVERSE-PRINT: "+list.reversePrint());
console.log("¿Está Vacía?: "+list.isEmpty());
console.log("Tamaño: "+list.getSize());
console.log("");


console.log("Imprimiendo el objeto de lista enlazada:");
console.log(list);
console.log("");
