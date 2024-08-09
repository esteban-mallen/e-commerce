import {db} from "./firebase"
import {collection, getDocs} from "firebase/firestore"

export const getCategories = async () => {
    const categoriesRef = collection(db, "categories");
    const snapshot = await getDocs(categoriesRef);
    return snapshot.docs.map(doc => doc.data());
}
