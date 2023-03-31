import { PHONE_NUMBERS_COLLECTION_PATH } from './../const'
import { collection } from 'firebase/firestore'
import { db } from '@shared/api/firebase'

export const PHONE_NUMBERS_COLLECTION = collection(db, PHONE_NUMBERS_COLLECTION_PATH)