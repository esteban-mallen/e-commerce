import {db} from "./firebase"
import {collection, getDocs, query, orderBy } from "firebase/firestore"

export const getCategories = async () => {
    const categoriesRef = collection(db, "categories");
    const q = query(categoriesRef, orderBy("id"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data());
}
