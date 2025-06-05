const getMessage = (req, res) => {
  res.json({ message: "Hello from the API" });
};

const getWelcome = (req, res) => {
  res.json({ message: "Hello world!" });
};

module.exports = { getMessage, getWelcome };
