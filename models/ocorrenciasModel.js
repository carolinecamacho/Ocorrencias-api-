const connection = require('./connection');

const getAll = () => {
  return connection.execute('SELECT * FROM ocorrencias;');
};

const getCategory = (categoria) => {
  return connection.execute('SELECT * FROM ocorrencias-cidade WHERE ocorrencias.categoria = ?', [categoria]);
};

const getById = (id) => {
  return connection.execute('SELECT * FROM ocorrencias-cidade WHERE id = ?', [id]);
};


const add = async (descricao, data_hora, categoria, id_endereco) => {
  const [row] = await connection.execute(`INSERT INTO ocorrencias-cidade.ocorrencias ( descricao, data_hora, categoria, id_endereco) 
  VALUES (?, ?, ?, ?)`, [descricao, data_hora, categoria, id_endereco]);
  console.log(row)
  const result = {
      id_ocorrencia: row.insertId,
      descricao,
      data_hora,
      categoria,
      id_endereco,

  };
  return result;
};


module.exports = { 
  getAll,
}
