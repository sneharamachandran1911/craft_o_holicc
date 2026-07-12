import { useState, useMemo } from 'react'
import '../css/CustomOrder.css'
import flowersData, { WRAPPING_FEE } from '../data/flowersData'

function CustomOrder() {
    const [selections, setSelections] = useState({})
    const [zoomedImage, setZoomedImage] = useState(null)

    const updateQuantity = (flower, delta) => {
        setSelections((prev) => {
            const current = prev[flower.id]
            const currentQty = current?.qty || 0
            const nextQty = Math.max(0, currentQty + delta)

            if (nextQty === 0) {
                const updated = { ...prev }
                delete updated[flower.id]
                return updated
            }

            return {
                ...prev,
                [flower.id]: {
                    qty: nextQty,
                    colorId: current?.colorId || flower.colorOptions[0].id
                }
            }
        })
    }

    const updateColor = (flowerId, colorId) => {
        setSelections((prev) => {
            if (!prev[flowerId]) return prev
            return {
                ...prev,
                [flowerId]: { ...prev[flowerId], colorId }
            }
        })
    }

    const selectedFlowers = useMemo(() => {
        return Object.entries(selections)
            .map(([id, sel]) => {
                const flower = flowersData.find((f) => f.id === id)
                if (!flower) return null
                const color = flower.colorOptions.find((c) => c.id === sel.colorId) || flower.colorOptions[0]
                return { ...flower, qty: sel.qty, color }
            })
            .filter(Boolean)
    }, [selections])

    const totalStems = selectedFlowers.reduce((sum, f) => sum + f.qty, 0)

    const flowersTotal = useMemo(() => {
        return selectedFlowers.reduce((sum, f) => sum + f.price * f.qty, 0)
    }, [selectedFlowers])

    const wrappingFee = totalStems > 0 ? WRAPPING_FEE : 0
    const totalPrice = flowersTotal + wrappingFee

    const bouquetDots = []
    selectedFlowers.forEach((f) => {
        for (let i = 0; i < f.qty; i++) {
            bouquetDots.push({ image: f.color.image, hex: f.color.hex, name: `${f.name} (${f.color.name})`, key: `${f.id}-${f.color.id}-${i}` })
        }
    })

    return (
        <div className="custom-order">

            <div className="custom-intro">
                <p className="custom-tagline">build it stem by stem</p>
                <h1 className="custom-heading">Design your own bouquet</h1>
                <p className="custom-desc">
                    Pick your flowers, choose a color for each, set the quantity,
                    and watch your bouquet and its price come together in real time.
                </p>
            </div>

            <div className="custom-layout">

                <div className="flower-grid">
                    {flowersData.map((flower) => {
                        const sel = selections[flower.id]
                        const qty = sel?.qty || 0
                        const activeColorId = sel?.colorId || flower.colorOptions[0].id
                        const activeColor = flower.colorOptions.find((c) => c.id === activeColorId) || flower.colorOptions[0]

                        return (
                            <div className={`flower-card ${qty > 0 ? 'flower-card-active' : ''}`} key={flower.id}>
                                <div
                                    className="flower-circle"
                                    onClick={() => setZoomedImage({ src: activeColor.image, name: `${flower.name} — ${activeColor.name}` })}
                                >
                                    <img src={activeColor.image} alt={`${flower.name} in ${activeColor.name}`} />
                                </div>

                                <div className="flower-info">
                                    <p className="flower-name">{flower.name}</p>
                                    <p className="flower-desc">{flower.description}</p>
                                    <p className="flower-price">Rs {flower.price}</p>

                                    <div className="color-swatches">
                                        {flower.colorOptions.map((color) => (
                                            <button
                                                key={color.id}
                                                className={`color-swatch ${activeColorId === color.id ? 'color-swatch-active' : ''}`}
                                                style={{ background: color.hex }}
                                                title={color.name}
                                                aria-label={`${color.name} ${flower.name}`}
                                                onClick={() => updateColor(flower.id, color.id)}
                                            ></button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flower-stepper">
                                    <button
                                        className="stepper-btn"
                                        onClick={() => updateQuantity(flower, -1)}
                                        disabled={qty === 0}
                                    >
                                        −
                                    </button>
                                    <span className="stepper-count">{qty}</span>
                                    <button
                                        className="stepper-btn"
                                        onClick={() => updateQuantity(flower, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="bouquet-panel">
                    <p className="bouquet-eyebrow">your bouquet</p>

                    <div className="bouquet-preview">
                        {bouquetDots.length === 0 ? (
                            <p className="bouquet-empty">Add flowers to see your bouquet take shape.</p>
                        ) : (
                            <div className="bouquet-dots">
                                {bouquetDots.map((dot) => (
                                    <div
                                        key={dot.key}
                                        className="bouquet-dot"
                                        title={dot.name}
                                        onClick={() => setZoomedImage({ src: dot.image, name: dot.name })}
                                    >
                                        <img src={dot.image} alt={dot.name} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="bouquet-summary">
                        {selectedFlowers.length === 0 ? (
                            <p className="bouquet-empty-line">No flowers selected yet.</p>
                        ) : (
                            <>
                                {selectedFlowers.map((f) => (
                                    <div className="bouquet-line" key={f.id}>
                                        <span>{f.name} ({f.color.name}) × {f.qty}</span>
                                        <span>Rs {f.price * f.qty}</span>
                                    </div>
                                ))}
                                <div className="bouquet-line bouquet-line-wrap">
                                    <span>Bouquet wrapping</span>
                                    <span>Rs {wrappingFee}</span>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="bouquet-total">
                        <span>Total ({totalStems} stems)</span>
                        <span className="bouquet-total-price">Rs {totalPrice}</span>
                    </div>

                    <button className="bouquet-cta" disabled={totalStems === 0}>
                        Add bouquet to cart
                    </button>
                </div>

            </div>

            {zoomedImage && (
                <div className="zoom-overlay" onClick={() => setZoomedImage(null)}>
                    <div className="zoom-box" onClick={(e) => e.stopPropagation()}>
                        <button className="zoom-close" onClick={() => setZoomedImage(null)}>×</button>
                        <img src={zoomedImage.src} alt={zoomedImage.name} />
                        <p className="zoom-caption">{zoomedImage.name}</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default CustomOrder