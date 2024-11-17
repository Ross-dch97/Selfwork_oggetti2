
let rubrica = {
    'contacts': [
        {'nome': 'Nicola', 'telefono': '3331111111'},
        {'nome': 'Lorenzo', 'telefono': '3332222222'},
        {'nome': 'Paola', 'telefono': '3333333333'},
        {'nome': 'Jenny', 'telefono': '3334444444'}
    ],
    
    mostra_contatti : function () {
        this.contacts.forEach((contatto) => console.log(contatto) );
    },
    
    mostra_contatto : function (nome) {
        let contatto = this.contacts.find((c) => c.nome == nome);
        if (contatto) {
            console.log(`Nome: ${contatto.nome}`);
            
        }else {
            console.log('Contatto non trovato');
            
        }
    },

    rimuovi_contatto : function (nome) {
         this.contacts.filter( (c) => c.nome != nome );
        console.log(`Contatto ${nome} eliminato`);
        
    },

    aggiungi_contatto : function (nome) {
        this.contacts.push(nome);
        console.log(`Contatto ${nome} aggiunto`);
        
    },

    modifica_contatto : function (nome, nuovoNome, nuovoTelefono) {
        let contatto = this.contacts.find((c)=> c.nome == nome);
        if (contatto) {
            contatto.nome = nuovoNome;
            contatto.telefono = nuovoTelefono;
            console.log(`Contatto ${nome} modificato`);
            
        }else{
            console.log('Contatto non trovato');
            
        }
    }
    
}

rubrica.mostra_contatti();
rubrica.mostra_contatto('Lorenzo');
rubrica.rimuovi_contatto('Nicola');
rubrica.aggiungi_contatto('Elisa');
rubrica.modifica_contatto('Paola');

