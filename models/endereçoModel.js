const connection = require('./connection');

const getAll = () => {
  return connection.execute('SELECT * FROM endereco');
};

router.get('/', (req, res) => {
  res.status(200).json({status: "UP"});
})

const getByDistrict = (bairro) => {
  return connection.execute('SELECT * FROM ocorrencias-cidade WHERE endereço.bairro = ?', [bairro]);
};


const getByZip = (CEP) => {
  return connection.execute('SELECT * FROM ocorrencias-cidade WHERE endereço.CEP = ?', [CEP]);
};

const getById = (id) => {
  return connection.execute('SELECT * FROM ocorrencias-cidade WHERE id = ?', [id]);
};


const add = async (id_endereco, logradouro, numero, bairro, cep)  => {
  const [row] = await connection.execute(`INSERT INTO ocorrencias-cidade.endereço (id_endereco, logradouro, numero, bairro, cep) 
  VALUES (?, ?, ?, ?, ?)`, id_endereco, logradouro, numero, bairro, cep);
  console.log(row)
  const result = {
      id_endereco: row.insertId,
      logradouro,
      numero,
      bairro,
      cep,

  };
  return result;
};


module.exports = {
  getAll, 
  getByDistrict,
  getByZip,
  getById,
  add,
}

