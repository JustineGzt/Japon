import dragonTee from '../assets/vetement/mens-box-tee-white-front-6a877664f318c.png'
import kitsuneTee from '../assets/vetement/mens-box-tee-white-front-6a8776dfd40c0.png'
import raijinTee from '../assets/vetement/mens-box-tee-white-front-6a877786e7371.png'
import serpentTee from '../assets/vetement/mens-box-tee-white-front-6a87785101d88.png'

export type Product = {
  name: string
  note?: string
  collection: string
  photo: string
}

export const products: Product[] = [
  { name: 'Kyoto Dragon T-Shirt', collection: 'Ancient Myth', photo: dragonTee },
  { name: 'Kitsune Path T-Shirt', note: '(Inari Shrine)', collection: 'Ancient Myth', photo: kitsuneTee },
  { name: 'Raijin Embroidered Jacket', collection: 'Guardian Spirit', photo: raijinTee },
  { name: "Serpent's Realm T-Shirt", note: '(Shrine Gardens)', collection: 'Guardian Spirit', photo: serpentTee },
]
