/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
const functions = require("firebase-functions");

admin.initializeApp();

exports.getAllBooks = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const snapshot = await admin.firestore().collection("books").get();
      const books = snapshot.docs.map((doc) => doc.data());
      res.json(books);
    } catch (error) {
      console.error("Error fetching books: ", error);
      res.status(500).send("Failed to fetch books");
    }
  });
});

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      res.status(200).send({count});
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});

exports.addBook = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }
    try {
      const {title, author} = req.body;
      const capitalizedTitle = title.toUpperCase();
      const capitalizedAuthor = author.toUpperCase();

      const bookRef = admin.firestore().collection("addBooks").doc();
      await bookRef.set({
        title: capitalizedTitle,
        author: capitalizedAuthor,
      });

      res.status(200).send({message: "Book added successfully",
        id: bookRef.id});
    } catch (error) {
      console.error("Error adding book:", error);
      res.status(500).send("Error adding book");
    }
  });
});

