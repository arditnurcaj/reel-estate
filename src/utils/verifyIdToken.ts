import * as admin from "firebase-admin";

const verifyIdToken = (token: string) => {
  const firebasePrivateKey: string = process.env.FIREBASE_PRIVATE_KEY ?? "";

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: firebasePrivateKey.replace(/\\n/g, "\n"),
      }),
    });
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch(() => null);
};

export default verifyIdToken;