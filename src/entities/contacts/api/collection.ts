import { CONTACTS_COLLECTION_PATH } from './../const'
import { collection } from 'firebase/firestore'
import { db } from '@shared/api/firebase'

export const CONTACTS_COLLECTION = collection(db, CONTACTS_COLLECTION_PATH)