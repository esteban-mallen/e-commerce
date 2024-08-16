import {db} from "./firebase"
import {collection, getDocs, doc, getDoc, query, where, addDoc, orderBy} from "firebase/firestore"

export const getAllItems = async () => {
    const itemsRef = collection(db, "items");
    const q = query(itemsRef, orderBy("id"))
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            firebaseId: doc.id,
        }
    });
}

export const getItems = async (categoryId) => {
    const itemsRef = query(
        collection(db, "items"),
        where("category", "==", Number(categoryId)),
    );
    const snapshot = await getDocs(itemsRef);
    return snapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            firebaseId: doc.id,
        }
    });
}

export const getItem = async (id) => {
    const itemRef = doc(db, "items", id);
    const docSnapshot = await getDoc(itemRef);
    return {
        ...docSnapshot.data(),
        firebaseId: docSnapshot.id,
    }
}
