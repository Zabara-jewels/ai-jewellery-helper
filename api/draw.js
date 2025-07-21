export default async (req, res) => {
  console.log("TEST 1: Function started!");
  res.json({ working: true, logs: "Check Vercel Runtime logs" });
};
