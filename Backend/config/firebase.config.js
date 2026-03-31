const admin = require("firebase-admin");
const { getAuth } = require("firebase-admin/auth");
const base64FirebaseAccount = process.env.FIREBASE_SECRET;

if (!base64ServiceAccount) {
  console.error("FIREBASE_SECRET is missing in .env");
}
const decodedJson = Buffer.from(base64FirebaseAccount, "base64").toString(
  "utf-8",
);
const firebaseAccount = JSON.parse(decodedJson);

admin.initializeApp({
  credential: admin.credential.cert(firebaseAccount),
});
const fireBaseAuth = getAuth();
module.exports = { fireBaseAuth };
