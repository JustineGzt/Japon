import section2 from '../assets/japon/section2.jpg'
import { products } from '../data/products'

type Product = {
  name: string
  note?: string
  art: 'tshirt' | 'jacket' | 'tote' | 'photo'
  photo?: string
}

const columns: { label: string; products: Product[] }[] = Array.from(
  new Set(products.map((p) => p.collection)),
).map((label) => ({
  label,
  products: products
    .filter((p) => p.collection === label)
    .map((p) => ({ name: p.name, note: p.note, art: 'photo' as const, photo: p.photo })),
}))

function DragonArt() {
  return (
    <svg viewBox="0 0 260 260" aria-hidden="true" className="h-full w-full">
      <path
        d="M70 40 L100 22 Q130 34 160 22 L190 40 L220 68 L198 92 L182 78 L182 236 L78 236 L78 78 L62 92 L40 68 Z"
        fill="#fbf7ef"
        stroke="#8a1f2a"
        strokeWidth={3}
      />
      <text x="130" y="98" textAnchor="middle" fontSize="34" fontWeight="700" fill="#8a1f2a">
        SYOTO
      </text>
      <text x="130" y="112" textAnchor="middle" fontSize="6" fill="#8a1f2a" letterSpacing="1">
        EST. KYOTO · DRAGON OF LEGENDS
      </text>
      <path
        d="M95 190 Q80 170 100 158 Q90 140 110 132 Q100 116 122 112 Q135 96 155 108 Q170 100 178 118 Q192 116 188 134 Q200 144 186 156 Q192 172 172 174 Q168 190 148 182 Q142 198 122 190 Q112 200 95 190Z"
        fill="none"
        stroke="#4a6c8a"
        strokeWidth={3}
      />
      <circle cx="150" cy="112" r="3" fill="#8a1f2a" />
      <rect x="106" y="196" width="48" height="14" fill="#8a1f2a" />
      <circle cx="130" cy="222" r="16" fill="#c3402f" />
      <path d="M114 222 L100 222 M160 222 L146 222" stroke="#c3402f" strokeWidth={3} />
      <text x="130" y="227" textAnchor="middle" fontSize="14" fill="#fbf7ef">
        京都
      </text>
    </svg>
  )
}

function ToteArt() {
  return (
    <svg viewBox="0 0 260 260" aria-hidden="true" className="h-full w-full">
      <path d="M84 92 L176 92 L188 236 L72 236 Z" fill="#fbf7ef" stroke="#8a1f2a" strokeWidth={3} />
      <path
        d="M100 92 Q100 56 130 56 Q160 56 160 92"
        fill="none"
        stroke="#8a1f2a"
        strokeWidth={6}
        strokeLinecap="round"
      />
      <text x="130" y="132" textAnchor="middle" fontSize="20" fontWeight="700" fill="#8a1f2a">
        SYOTO
      </text>
      <path
        d="M105 205 Q94 188 108 178 Q100 164 116 158 Q108 148 124 144 Q132 132 148 140 Q160 134 166 148 Q178 146 174 160 Q184 168 172 178 Q176 190 160 190 Q156 202 140 196 Q134 208 118 202 Q110 210 105 205Z"
        fill="none"
        stroke="#4a6c8a"
        strokeWidth={2.5}
      />
      <circle cx="146" cy="148" r="2.4" fill="#8a1f2a" />
      <text x="130" y="222" textAnchor="middle" fontSize="11" fill="#8a1f2a">
        京都
      </text>
    </svg>
  )
}

function JacketArt() {
  return (
    <svg viewBox="0 0 260 260" aria-hidden="true" className="h-full w-full">
      <path
        d="M92 30 L130 20 L168 30 L204 54 L222 100 L198 112 L188 84 L188 236 L72 236 L72 84 L62 112 L38 100 Z"
        fill="#221e1b"
        stroke="#e6c069"
        strokeWidth={3}
      />
      <path d="M204 54 L222 100 L198 112 L188 84 Z" fill="#cfa64f" />
      <path d="M56 54 L38 100 L62 112 L72 84 Z" fill="#cfa64f" />
      <rect x="92" y="30" width="76" height="8" fill="#8a1f2a" />
      <rect x="96" y="52" width="26" height="14" rx="2" fill="#e6c069" />
      <text x="109" y="63" textAnchor="middle" fontSize="10" fill="#221e1b">
        雷神
      </text>
      <rect x="138" y="52" width="26" height="14" rx="2" fill="#e6c069" />
      <text x="151" y="63" textAnchor="middle" fontSize="10" fill="#221e1b">
        奈良
      </text>
      <circle cx="130" cy="120" r="42" fill="none" stroke="#c3402f" strokeWidth={2} opacity={0.5} />
      <path
        d="M130 84 Q150 96 152 118 Q168 122 164 140 Q176 150 164 162 Q166 178 148 176 Q142 190 126 182 Q114 192 104 178 Q88 180 92 162 Q78 152 90 140 Q86 122 104 118 Q108 96 130 84Z"
        fill="#f6ede0"
        stroke="#c3402f"
        strokeWidth={2}
      />
      <circle cx="118" cy="126" r="4" fill="#221e1b" />
      <circle cx="142" cy="126" r="4" fill="#221e1b" />
      <path d="M116 144 Q130 152 144 144" stroke="#c3402f" strokeWidth={2} fill="none" />
      <text x="130" y="186" textAnchor="middle" fontSize="26" fontWeight="700" fill="#c3402f">
        NARA
      </text>
    </svg>
  )
}

const arts = { tshirt: DragonArt, jacket: JacketArt, tote: ToteArt }

export default function ProductSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#6d1420] bg-cover bg-center py-10 sm:py-12 md:py-14"
      style={{ backgroundImage: `url(${section2})` }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 sm:mb-8 sm:justify-between md:mb-10">
          {columns.map((col) => (
            <span
              key={col.label}
              className="rounded-full bg-amber-300 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[#2a1012] shadow-[0_4px_0_rgba(0,0,0,0.18)] sm:px-6 sm:py-2 sm:text-sm md:text-base"
            >
              {col.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 md:gap-x-10 md:gap-y-14">
          {[0, 1].map((row) => (
            <>
              {columns.map((col) => {
                const product = col.products[row]
                const isDark = product.art === 'jacket'
                return (
                  <div key={`${col.label}-${row}`} className="mx-auto flex w-full max-w-xs flex-col items-center sm:max-w-none">
                    <div
                      className={`aspect-square w-full rounded-2xl border-[3px] p-5 shadow-[0_18px_34px_-14px_rgba(0,0,0,0.55)] sm:p-6 ${
                        isDark
                          ? 'border-amber-300 bg-gradient-to-br from-[#2b2622] to-[#1c1917]'
                          : 'border-amber-300 bg-[#f6ede0]'
                      }`}
                    >
                      {product.art === 'photo' && product.photo ? (
                        <img src={product.photo} alt={product.name} className="h-full w-full object-contain" />
                      ) : (
                        (() => {
                          const Art = arts[product.art as 'tshirt' | 'jacket' | 'tote']
                          return <Art />
                        })()
                      )}
                    </div>
                    <div className="mt-4 text-center sm:mt-5">
                      <h3 className="text-base font-black uppercase leading-tight text-[#f6ede0] sm:text-lg md:text-xl">
                        {product.name}
                      </h3>
                      {product.note && (
                        <p className="mt-1 text-xs italic text-amber-200/80">{product.note}</p>
                      )}
                      <p className="mt-1 text-lg font-black text-amber-300 sm:text-xl md:text-2xl">{product.price}</p>
                    </div>
                  </div>
                )
              })}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
