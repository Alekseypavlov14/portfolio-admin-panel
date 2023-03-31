import { ADMINS_COLLECTION_PATH } from './../const'
import { collection } from "firebase/firestore"
import { db } from "@shared/api/firebase"

export const ADMINS_COLLECTION = collection(db, ADMINS_COLLECTION_PATH)