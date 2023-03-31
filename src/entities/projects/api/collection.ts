import { PROJECTS_COLLECTION_PATH } from '../const'
import { collection } from 'firebase/firestore'
import { db } from '@shared/api/firebase'

export const PROJECTS_COLLECTION = collection(db, PROJECTS_COLLECTION_PATH)