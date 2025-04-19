module.exports = function handler(req, res) {
  try {
    // Simple response that doesn't depend on request body
    const mockResponse = {
      firstName: "Jane",
      lastName: "Doe",
      currentCompany: "Acme Inc.",
      currentRole: "Senior Product Manager",
      headline: "Driving product innovation | Tech enthusiast | MBA",
      connectionType: "2nd",
    }

    return res.status(200).json(mockResponse)
  } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
