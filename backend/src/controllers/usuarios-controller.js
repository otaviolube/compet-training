const usuarioModel = require("../models/usuarios-model");

const inserirUsuario = async (req, res) => {
  let usuario = req.body;

  if (usuario.nome && usuario.email) {
    let emailExiste = await usuarioModel.findAll({
      where: {
        email: usuario.email,
      },
    });

    if (emailExiste.length > 0) {
      return res.json({
        status: "fail",
        resultado: "E-mail já cadastrado",
      });
    }

    let resultado = await usuarioModel.create(usuario);
    if (resultado) {
      res.json({
        status: "ok",
        resultado: "Usuario inserido com sucesso",
      });
    } else {
      res.json({
        status: "fails",
        resultado: "Erro ao inserir usuário",
      });
    }
  } else {
    res.json({
      status: "fails",
      resultado: "Erro ao inserir usuário. Parâmetros insuficientes!",
    });
  }
};

const lerUsuarios = async (req, res) => {
  const id = req.params.id;
  if (id) {
    let usuario = await usuarioModel.findByPk(id);
    if (usuario) {
      res.json({
        status: "ok",
        usuario: usuario,
      });
    } else {
      res.json({
        status: "fail",
        usuario: "Usuario não encontrado",
      });
    }
  } else {
    let usuarios = await usuarioModel.findAll();
    res.json({
      status: "ok",
      usuarios: usuarios,
    });
  }
};

const atualizarUsuario = async (req, res) => {
  const id = req.params.id;
  let novoUsuario = req.body;

  let resultado = await usuarioModel.update(novoUsuario, {
    where: {
      id: id,
    },
  });

  if(resultado[0] === 1){
    res.json({
      status: "ok",
      usuario: "Usuario atualizado com sucesso",
      novoUsuario: novoUsuario,
    });
  }else{
    res.json({
      status: "ok",
      usuario: "Houve um erro ao atualizar o usuários"
    });
  }

};

const deletarUsuario = async(req, res) => {
  const id = req.params.id;
  let resultado = await usuarioModel.destroy({
    where: {
      id: id
    }
  })

  console.log(resultado);

  if(resultado === 1){
    res.json({
      status: "ok",
      usuario: "Usuario deletado com sucesso!",
    });
  }else{
    res.json({
      status: "fail",
      usuario: "Erro ao deletar o usuário",
    });

  }

};

module.exports = {
  inserirUsuario,
  lerUsuarios,
  atualizarUsuario,
  deletarUsuario,
};
