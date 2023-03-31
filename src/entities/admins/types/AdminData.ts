import { AdminEntity } from "../admin.entity"

export interface AdminData extends Omit<AdminEntity, 'id'> {}