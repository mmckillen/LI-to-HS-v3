export default function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS,POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { spans } = req.body;

    if (!spans || !Array.isArray(spans)) {
      return res.status(400).json({ error: "Invalid request body. Expected { spans: string[] }" });
    }

    console.log(`Received ${spans.length} spans from LinkedIn profile`);

    // Mock response
    const mockResponse = {
      firstName: "Jane",
      lastName: "Doe",
      currentCompany: "Acme Inc.",
      currentRole: "Senior Product Manager",
      headline: "Driving product innovation | Tech enthusiast | MBA",
      connectionType: "2nd"
    };

    // Return the processed data
    return res.status(200).json(mockResponse);
  } catch (error) {
    console.error("Error processing profile data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
