const unknown = async (req, res) => {
  res.status(400).json({ error: "Unknown API endpoint !" });
};

export default unknown;
