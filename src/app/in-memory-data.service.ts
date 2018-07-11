import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clienti = [
      { id: 11, nome: 'Mr.Fantastic', score:333 },
      { id: 12, nome: 'Marco',score:20  },
      { id: 13, nome: 'Bombastic', score:50 },
      { id: 14, nome: 'Angularitas', score:110 },
      { id: 15, nome: 'Magnetos', score:100 },
      { id: 16, nome: 'RubberDuck', score:120 },
      { id: 17, nome: 'Dynamus',score:150  },
      { id: 18, nome: '200IQ', score:140 },
      { id: 19, nome: 'Magmar', score:1000 },
      { id: 20, nome: 'Sharknado', score:140 }
    ];
    return {clienti};
  }
}