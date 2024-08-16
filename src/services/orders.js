import {db} from "./firebase"
import {collection, addDoc, getDoc, doc} from "firebase/firestore"

export const createOrder = async (order) => {
    const ordersRef = collection(db, "orders")
    const createdOrder = await addDoc(ordersRef, order);
    return createdOrder.id;
}

export const getOrder = async (orderId) => {
    const orderRef = doc(db, "orders", orderId);
    const docSnapshot = await getDoc(orderRef);
    return {
        ...docSnapshot.data(),
        firebaseId: docSnapshot.id,
    }
}
