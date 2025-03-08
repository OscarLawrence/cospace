
interface AvatarBaseSettingsI {
    seed: string
}

interface AvatarCollectionSettingsI {
    collection: string
}

export interface AvatarSettingsI extends AvatarBaseSettingsI, AvatarCollectionSettingsI { }