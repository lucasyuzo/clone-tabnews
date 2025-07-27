function status(request, response) {
  response.status(200).json({ chave: "peteca não será terminada" });
}

export default status;
