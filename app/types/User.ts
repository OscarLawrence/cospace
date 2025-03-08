
import { AvatarSettingsI } from './Avatar';

export interface UserI {
    id: string;
    name: string;
    info: string;
    avatar?: string;
    avatarSettings?: AvatarSettingsI;
}