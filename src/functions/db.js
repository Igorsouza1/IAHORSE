import Dexie from 'dexie';

const db = new Dexie('medidasDB');
db.version(1).stores({
  medidas: '++id, comprimentoDoCorpo, comprimentoDaEspadua, comprimentoDorsoLombar, larguraDoPeito, larguraDasAncas, alturaDaGarupa, alturaDaCernelha, alturaDoDorso, larguraDoTorax, sexo', // Primary key and indexed props
});

export default db;