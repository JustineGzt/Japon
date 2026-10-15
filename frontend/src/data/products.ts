import dragonTee from '../assets/vetement/mens-box-tee-white-front-6a877664f318c.png'
import kitsuneTee from '../assets/vetement/mens-box-tee-white-front-6a8776dfd40c0.png'
import raijinTee from '../assets/vetement/mens-box-tee-white-front-6a877786e7371.png'
import serpentTee from '../assets/vetement/mens-box-tee-white-front-6a87785101d88.png'
import sereniteBlancTee from '../assets/vetement/mens-box-tee-white-front-serenite.png'
import sereniteNoirTee from '../assets/vetement/mens-box-tee-white-front-serenite-bw.png'
import sereniteBlancGrisTee from '../assets/vetement/mens-box-tee-white-front-serenite-ww.png'

/** Toutes les images rangées dans assets/vetement/<modèle>/<couleur>/, triées par nom de fichier */
const galleryImages = import.meta.glob<string>('../assets/vetement/*/*/*.png', { eager: true, import: 'default' })

function gallery(folder: string): string[] {
  const prefix = `../assets/vetement/${folder}/`
  return Object.keys(galleryImages)
    .filter((path) => path.startsWith(prefix))
    .sort()
    .map((path) => galleryImages[path])
}

const hanaNoir = gallery('hana/black')
const hanaMarine = gallery('hana/navy')
const hanaBlanc = gallery('hana/white')
const ryuNoir = gallery('ryu/black')
const ryuMarine = gallery('ryu/navy')
const ryuBlanc = gallery('ryu/white')
const hanaVioletNoir = gallery('hana-violet/black')
const hanaVioletMarine = gallery('hana-violet/navy')
const hanaVioletBlanc = gallery('hana-violet/white')
const hanaArgentNoir = gallery('hana-argent/black')
const hanaArgentMarine = gallery('hana-argent/navy')
const hanaArgentBlanc = gallery('hana-argent/white')
const ryuRougeNoir = gallery('ryu-rouge/black')
const ryuRougeMarine = gallery('ryu-rouge/navy')
const ryuRougeBlanc = gallery('ryu-rouge/white')
const tsuruBlanc = gallery('tsuru/white')
const koiBlanc = gallery('koi/white')
const bronzeNoir = gallery('bronze/black')
const bronzeBlanc = gallery('bronze/white')
const kumoNoir = gallery('kumo/black')
const kumoMarine = gallery('kumo/navy')
const kumoBlanc = gallery('kumo/white')
const kumoOrNoir = gallery('kumo-or/black')
const kumoOrMarine = gallery('kumo-or/navy')
const kumoOrBlanc = gallery('kumo-or/white')

export type Product = {
  slug: string
  name: string
  note?: string
  collection: string
  photo: string
  /** Vues supplémentaires affichées sur la fiche produit (la première est la photo principale) */
  gallery?: string[]
  price: string
  description: string
  /** Les produits partageant le même variantGroup sont proposés comme choix de couleur */
  variantGroup?: string
  color?: { label: string; swatch: string }
}

export const products: Product[] = [
  {
    slug: 'kyoto-dragon-t-shirt',
    name: 'Kyoto Dragon T-Shirt',
    collection: 'Ancient Myth',
    photo: dragonTee,
    price: '39€',
    description:
      "T-shirt en coton brodé inspiré du dragon protecteur de Kyoto, symbole de sagesse et de puissance dans la mythologie japonaise.",
  },
  {
    slug: 'kitsune-path-t-shirt',
    name: 'Kitsune Path T-Shirt',
    note: '(Inari Shrine)',
    collection: 'Ancient Myth',
    photo: kitsuneTee,
    price: '39€',
    description:
      "Rendez hommage au renard messager du sanctuaire Inari avec ce t-shirt en coton doux, orné d'un motif Kitsune traditionnel.",
  },
  {
    slug: 'raijin-embroidered-jacket',
    name: 'Raijin Embroidered Jacket',
    collection: 'Guardian Spirit',
    photo: raijinTee,
    price: '69€',
    description:
      'Veste brodée représentant Raijin, le dieu du tonnerre, pour un style affirmé mêlant tradition japonaise et coupe moderne.',
  },
  {
    slug: 'serpents-realm-t-shirt',
    name: "Serpent's Realm T-Shirt",
    note: '(Shrine Gardens)',
    collection: 'Guardian Spirit',
    photo: serpentTee,
    price: '39€',
    description:
      "T-shirt inspiré des jardins sacrés des sanctuaires japonais, orné du motif du serpent gardien.",
  },
  {
    slug: 'serenite-t-shirt-blanc',
    variantGroup: 'serenite',
    color: { label: 'Blanc / Noir', swatch: 'linear-gradient(135deg, #ffffff 50%, #111111 50%)' },
    name: 'Sérénité T-Shirt Blanc',
    note: '(静)',
    collection: 'Zen Spirit',
    photo: sereniteBlancTee,
    price: '39€',
    description:
      "T-shirt blanc en coton brodé du kanji 静 (sérénité), pour une allure épurée inspirée du calme des jardins zen.",
  },
  {
    slug: 'serenite-t-shirt-noir',
    variantGroup: 'serenite',
    color: { label: 'Noir / Blanc', swatch: 'linear-gradient(135deg, #111111 50%, #ffffff 50%)' },
    name: 'Sérénité T-Shirt Noir',
    note: '(静)',
    collection: 'Zen Spirit',
    photo: sereniteNoirTee,
    price: '39€',
    description:
      "T-shirt noir en coton brodé du kanji 静 (sérénité), pour un style sobre et intemporel inspiré du calme des jardins zen.",
  },
  {
    slug: 'serenite-t-shirt-gris',
    variantGroup: 'serenite',
    color: { label: 'Blanc / Blanc', swatch: 'linear-gradient(135deg, #ffffff 50%, #e5e5e5 50%)' },
    name: 'Sérénité T-Shirt Blanc Ton sur Ton',
    note: '(静)',
    collection: 'Zen Spirit',
    photo: sereniteBlancGrisTee,
    price: '39€',
    description:
      "T-shirt blanc en coton brodé du kanji 静 (sérénité) en ton sur ton, pour un rendu subtil et minimaliste inspiré du calme des jardins zen.",
  },
  {
    slug: 'hana-t-shirt-noir',
    variantGroup: 'hana',
    color: { label: 'Noir', swatch: '#111111' },
    name: 'Hana T-Shirt Noir',
    note: '(花)',
    collection: 'Sakura Bloom',
    photo: hanaNoir[0],
    gallery: hanaNoir,
    price: '39€',
    description:
      "T-shirt noir en coton brodé d'une fleur de cerisier rouge sur le kanji 花 (fleur) ton sur ton, hommage à l'éphémère beauté du hanami.",
  },
  {
    slug: 'hana-t-shirt-marine',
    variantGroup: 'hana',
    color: { label: 'Bleu marine', swatch: '#1f2a36' },
    name: 'Hana T-Shirt Bleu Marine',
    note: '(花)',
    collection: 'Sakura Bloom',
    photo: hanaMarine[0],
    gallery: hanaMarine,
    price: '39€',
    description:
      "T-shirt bleu marine en coton brodé d'une fleur de cerisier rouge sur le kanji 花 (fleur), hommage à l'éphémère beauté du hanami.",
  },
  {
    slug: 'hana-t-shirt-blanc',
    variantGroup: 'hana',
    color: { label: 'Blanc', swatch: '#ffffff' },
    name: 'Hana T-Shirt Blanc',
    note: '(花)',
    collection: 'Sakura Bloom',
    photo: hanaBlanc[0],
    gallery: hanaBlanc,
    price: '39€',
    description:
      "T-shirt blanc en coton brodé d'une fleur de cerisier rouge sur le kanji 花 (fleur) noir, hommage à l'éphémère beauté du hanami.",
  },
  {
    slug: 'ryu-t-shirt-noir',
    variantGroup: 'ryu',
    color: { label: 'Noir', swatch: '#111111' },
    name: 'Ryū T-Shirt Noir',
    note: '(龍)',
    collection: 'Ancient Myth',
    photo: ryuNoir[0],
    gallery: ryuNoir,
    price: '39€',
    description:
      "T-shirt noir en coton brodé d'un dragon argenté enroulé autour du kanji 龍 (dragon), symbole de force et de protection dans la mythologie japonaise.",
  },
  {
    slug: 'ryu-t-shirt-marine',
    variantGroup: 'ryu',
    color: { label: 'Bleu marine', swatch: '#1f2a36' },
    name: 'Ryū T-Shirt Bleu Marine',
    note: '(龍)',
    collection: 'Ancient Myth',
    photo: ryuMarine[0],
    gallery: ryuMarine,
    price: '39€',
    description:
      "T-shirt bleu marine en coton brodé d'un dragon argenté enroulé autour du kanji 龍 (dragon), symbole de force et de protection dans la mythologie japonaise.",
  },
  {
    slug: 'ryu-t-shirt-blanc',
    variantGroup: 'ryu',
    color: { label: 'Blanc', swatch: '#ffffff' },
    name: 'Ryū T-Shirt Blanc',
    note: '(龍)',
    collection: 'Ancient Myth',
    photo: ryuBlanc[0],
    gallery: ryuBlanc,
    price: '39€',
    description:
      "T-shirt blanc en coton brodé du kanji 龍 (dragon) noir entouré d'un dragon gris, symbole de force et de protection dans la mythologie japonaise.",
  },
  {
    slug: 'hana-violet-t-shirt-noir',
    variantGroup: 'hana-violet',
    color: { label: 'Noir', swatch: '#111111' },
    name: 'Hana Violet T-Shirt Noir',
    note: '(花)',
    collection: 'Sakura Bloom',
    photo: hanaVioletNoir[0],
    gallery: hanaVioletNoir,
    price: '39€',
    description:
      "T-shirt noir en coton brodé d'une fleur de cerisier violette sur le kanji 花 (fleur) ton sur ton, une version nocturne et mystérieuse du hanami.",
  },
  {
    slug: 'hana-violet-t-shirt-marine',
    variantGroup: 'hana-violet',
    color: { label: 'Bleu marine', swatch: '#1f2a36' },
    name: 'Hana Violet T-Shirt Bleu Marine',
    note: '(花)',
    collection: 'Sakura Bloom',
    photo: hanaVioletMarine[0],
    gallery: hanaVioletMarine,
    price: '39€',
    description:
      "T-shirt bleu marine en coton brodé d'une fleur de cerisier violette sur le kanji 花 (fleur), une version nocturne et mystérieuse du hanami.",
  },
  {
    slug: 'hana-violet-t-shirt-blanc',
    variantGroup: 'hana-violet',
    color: { label: 'Blanc', swatch: '#ffffff' },
    name: 'Hana Violet T-Shirt Blanc',
    note: '(花)',
    collection: 'Sakura Bloom',
    photo: hanaVioletBlanc[0],
    gallery: hanaVioletBlanc,
    price: '39€',
    description:
      "T-shirt blanc en coton brodé d'une fleur de cerisier violette sur le kanji 花 (fleur) noir, une version nocturne et mystérieuse du hanami.",
  },
  {
    slug: 'hana-argent-t-shirt-noir',
    variantGroup: 'hana-argent',
    color: { label: 'Noir', swatch: '#111111' },
    name: 'Hana Argent T-Shirt Noir',
    note: '(花)',
    collection: 'Sakura Bloom',
    photo: hanaArgentNoir[0],
    gallery: hanaArgentNoir,
    price: '39€',
    description:
      "T-shirt noir en coton brodé d'une fleur de cerisier argentée sur le kanji 花 (fleur) ton sur ton, pour une touche lumineuse et raffinée.",
  },
  {
    slug: 'hana-argent-t-shirt-marine',
    variantGroup: 'hana-argent',
    color: { label: 'Bleu marine', swatch: '#1f2a36' },
    name: 'Hana Argent T-Shirt Bleu Marine',
    note: '(花)',
    collection: 'Sakura Bloom',
    photo: hanaArgentMarine[0],
    gallery: hanaArgentMarine,
    price: '39€',
    description:
      "T-shirt bleu marine en coton brodé d'une fleur de cerisier argentée sur le kanji 花 (fleur), pour une touche lumineuse et raffinée.",
  },
  {
    slug: 'hana-argent-t-shirt-blanc',
    variantGroup: 'hana-argent',
    color: { label: 'Blanc', swatch: '#ffffff' },
    name: 'Hana Argent T-Shirt Blanc',
    note: '(花)',
    collection: 'Sakura Bloom',
    photo: hanaArgentBlanc[0],
    gallery: hanaArgentBlanc,
    price: '39€',
    description:
      "T-shirt blanc en coton brodé d'une fleur de cerisier argentée sur le kanji 花 (fleur) noir, pour une touche lumineuse et raffinée.",
  },
  {
    slug: 'kumo-t-shirt-noir',
    variantGroup: 'kumo',
    color: { label: 'Noir', swatch: '#111111' },
    name: 'Kumo T-Shirt Noir',
    note: '(蜘蛛)',
    collection: 'Ancient Myth',
    photo: kumoNoir[0],
    gallery: kumoNoir,
    price: '39€',
    description:
      "T-shirt noir en coton brodé d'une araignée rouge sur le kanji 蜘蛛 (araignée) argenté, inspiré des yōkai tisseurs des légendes japonaises.",
  },
  {
    slug: 'kumo-t-shirt-marine',
    variantGroup: 'kumo',
    color: { label: 'Bleu marine', swatch: '#1f2a36' },
    name: 'Kumo T-Shirt Bleu Marine',
    note: '(蜘蛛)',
    collection: 'Ancient Myth',
    photo: kumoMarine[0],
    gallery: kumoMarine,
    price: '39€',
    description:
      "T-shirt bleu marine en coton brodé d'une araignée rouge sur le kanji 蜘蛛 (araignée) argenté, inspiré des yōkai tisseurs des légendes japonaises.",
  },
  {
    slug: 'kumo-t-shirt-blanc',
    variantGroup: 'kumo',
    color: { label: 'Blanc', swatch: '#ffffff' },
    name: 'Kumo T-Shirt Blanc',
    note: '(蜘蛛)',
    collection: 'Ancient Myth',
    photo: kumoBlanc[0],
    gallery: kumoBlanc,
    price: '39€',
    description:
      "T-shirt blanc en coton brodé d'une araignée rouge sur le kanji 蜘蛛 (araignée) gris, inspiré des yōkai tisseurs des légendes japonaises.",
  },
  {
    slug: 'kumo-or-t-shirt-noir',
    variantGroup: 'kumo-or',
    color: { label: 'Noir', swatch: '#111111' },
    name: 'Kumo Or T-Shirt Noir',
    note: '(蜘蛛)',
    collection: 'Ancient Myth',
    photo: kumoOrNoir[0],
    gallery: kumoOrNoir,
    price: '39€',
    description:
      "T-shirt noir en coton brodé d'une araignée dorée sur le kanji 蜘蛛 (araignée) ton sur ton, inspiré des yōkai tisseurs des légendes japonaises.",
  },
  {
    slug: 'kumo-or-t-shirt-marine',
    variantGroup: 'kumo-or',
    color: { label: 'Bleu marine', swatch: '#1f2a36' },
    name: 'Kumo Or T-Shirt Bleu Marine',
    note: '(蜘蛛)',
    collection: 'Ancient Myth',
    photo: kumoOrMarine[0],
    gallery: kumoOrMarine,
    price: '39€',
    description:
      "T-shirt bleu marine en coton brodé d'une araignée dorée sur le kanji 蜘蛛 (araignée), inspiré des yōkai tisseurs des légendes japonaises.",
  },
  {
    slug: 'kumo-or-t-shirt-blanc',
    variantGroup: 'kumo-or',
    color: { label: 'Blanc', swatch: '#ffffff' },
    name: 'Kumo Or T-Shirt Blanc',
    note: '(蜘蛛)',
    collection: 'Ancient Myth',
    photo: kumoOrBlanc[0],
    gallery: kumoOrBlanc,
    price: '39€',
    description:
      "T-shirt blanc en coton brodé d'une araignée dorée sur le kanji 蜘蛛 (araignée) noir, inspiré des yōkai tisseurs des légendes japonaises.",
  },
  {
    slug: 'ryu-rouge-t-shirt-noir',
    variantGroup: 'ryu-rouge',
    color: { label: 'Noir', swatch: '#111111' },
    name: 'Ryū Rouge T-Shirt Noir',
    note: '(龍)',
    collection: 'Ancient Myth',
    photo: ryuRougeNoir[0],
    gallery: ryuRougeNoir,
    price: '39€',
    description:
      "T-shirt noir en coton brodé d'un dragon rouge enroulé autour du kanji 龍 (dragon) ton sur ton, symbole de force et de passion.",
  },
  {
    slug: 'ryu-rouge-t-shirt-marine',
    variantGroup: 'ryu-rouge',
    color: { label: 'Bleu marine', swatch: '#1f2a36' },
    name: 'Ryū Rouge T-Shirt Bleu Marine',
    note: '(龍)',
    collection: 'Ancient Myth',
    photo: ryuRougeMarine[0],
    gallery: ryuRougeMarine,
    price: '39€',
    description:
      "T-shirt bleu marine en coton brodé d'un dragon rouge enroulé autour du kanji 龍 (dragon), symbole de force et de passion.",
  },
  {
    slug: 'ryu-rouge-t-shirt-blanc',
    variantGroup: 'ryu-rouge',
    color: { label: 'Blanc', swatch: '#ffffff' },
    name: 'Ryū Rouge T-Shirt Blanc',
    note: '(龍)',
    collection: 'Ancient Myth',
    photo: ryuRougeBlanc[0],
    gallery: ryuRougeBlanc,
    price: '39€',
    description:
      "T-shirt blanc en coton brodé d'un dragon rouge enroulé autour du kanji 龍 (dragon) noir, symbole de force et de passion.",
  },
  {
    slug: 'tsuru-t-shirt',
    color: { label: 'Blanc', swatch: '#ffffff' },
    name: 'Tsuru T-Shirt',
    note: '(鶴)',
    collection: 'Zen Spirit',
    photo: tsuruBlanc[0],
    gallery: tsuruBlanc,
    price: '39€',
    description:
      "T-shirt blanc en coton brodé de deux grues en vol devant un soleil rouge, symbole de longévité et de bonheur au Japon.",
  },
  {
    slug: 'koi-t-shirt',
    color: { label: 'Blanc', swatch: '#ffffff' },
    name: 'Koi T-Shirt',
    note: '(鯉)',
    collection: 'Zen Spirit',
    photo: koiBlanc[0],
    gallery: koiBlanc,
    price: '39€',
    description:
      "T-shirt blanc en coton brodé de deux carpes koï tournoyant en cercle, symbole de persévérance et d'harmonie.",
  },
  // TODO : nom et description provisoires, motif à confirmer
  {
    slug: 'bronze-t-shirt-noir',
    variantGroup: 'bronze',
    color: { label: 'Noir', swatch: '#111111' },
    name: 'Bronze T-Shirt Noir',
    collection: 'Zen Spirit',
    photo: bronzeNoir[0],
    gallery: bronzeNoir,
    price: '39€',
    description: 'T-shirt noir en coton brodé côté cœur d\'un motif couleur bronze.',
  },
  {
    slug: 'bronze-t-shirt-blanc',
    variantGroup: 'bronze',
    color: { label: 'Blanc', swatch: '#ffffff' },
    name: 'Bronze T-Shirt Blanc',
    collection: 'Zen Spirit',
    photo: bronzeBlanc[0],
    gallery: bronzeBlanc,
    price: '39€',
    description: 'T-shirt blanc en coton brodé côté cœur d\'un motif couleur bronze.',
  },
]

/** Nom affiché dans les listes pour un modèle décliné en plusieurs couleurs */
const variantGroupNames: Record<string, string> = {
  serenite: 'Sérénité T-Shirt',
  hana: 'Hana T-Shirt',
  ryu: 'Ryū T-Shirt',
  'hana-violet': 'Hana Violet T-Shirt',
  'hana-argent': 'Hana Argent T-Shirt',
  kumo: 'Kumo T-Shirt',
  'kumo-or': 'Kumo Or T-Shirt',
  'ryu-rouge': 'Ryū Rouge T-Shirt',
  bronze: 'Bronze T-Shirt',
}

/**
 * Produits à afficher dans les listes : une seule carte par modèle,
 * la couleur se choisit ensuite sur la fiche produit.
 */
export const catalogProducts: Product[] = products
  .filter((p, i) => !p.variantGroup || products.findIndex((q) => q.variantGroup === p.variantGroup) === i)
  .map((p) => (p.variantGroup ? { ...p, name: variantGroupNames[p.variantGroup] ?? p.name } : p))
