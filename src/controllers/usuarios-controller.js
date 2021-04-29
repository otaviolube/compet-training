const inserirUsuario = (req, res) => {
  res.json({
    status: "ok",
    resultado: "Retorna o resultado da operação ... ",
  });
};

const lerUsuarios = (req, res) => {
  const id = req.params.id;
  if (id) {
    //Ler todos os usuarios
    res.json({
      status: "ok",
      usuario: "Retorno um usuario",
    });
  } else {
    res.json({
      status: "ok",
      usuarios: "Retorno todos os usuarios",
    });
  }
};

const atualizarUsuario = (req, res) => {
  const id = req.params.id;
  res.json({
    status: "ok",
    usuario: "Atualizo o usuário",
  });
};

const deletarUsuario = (req, res) => {
  const id = req.params.id;
  res.json({
    status: "ok",
    usuario: "Deleto o usuário",
  });
};

module.exports = { inserirUsuario, lerUsuarios, atualizarUsuario, deletarUsuario };
