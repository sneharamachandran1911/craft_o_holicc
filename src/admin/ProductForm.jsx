import { useState } from "react";
import api from "../api/AxiosInstance";
import "../css/ProductForm.css";

function ProductForm() {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        stock: true,
        description: "",
    });

    const [images, setImages] = useState([""]);
    const [videos, setVideos] = useState([""]);
    const [colors, setColors] = useState([""]);

    const [status, setStatus] = useState({ loading: false, error: "", success: "" });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // Generic handlers for dynamic list fields (images, videos, colors)
    const handleListChange = (setter, list, index, value) => {
        const updated = [...list];
        updated[index] = value;
        setter(updated);
    };

    const addListItem = (setter, list) => {
        setter([...list, ""]);
    };

    const removeListItem = (setter, list, index) => {
        if (list.length === 1) return;
        setter(list.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: "", success: "" });

        if (!formData.name || !formData.category || !formData.price) {
            setStatus({ loading: false, error: "Name, category and price are required.", success: "" });
            return;
        }

        // Build the payload matching your entity structure
        const payload = {
            name: formData.name,
            category: formData.category,
            price: parseFloat(formData.price),
            stock: formData.stock,
            description: formData.description,
            images: images
                .filter((url) => url.trim() !== "")
                .map((url) => ({ imageUrl: url })),
            videos: videos
                .filter((url) => url.trim() !== "")
                .map((url) => ({ videoUrl: url })),
            colors: colors
                .filter((c) => c.trim() !== "")
                .map((c) => ({ colorName: c })),
        };

        try {
            await api.post("/products", payload);
            setStatus({ loading: false, error: "", success: "Product added successfully!" });
            setFormData({ name: "", category: "", price: "", stock: true, description: "" });
            setImages([""]);
            setVideos([""]);
            setColors([""]);
        } catch (err) {
            console.error(err);
            setStatus({ loading: false, error: "Failed to add product. Check the console.", success: "" });
        }
    };

    return (
        <div className="add-product-page">
            <div className="add-product-card">
                <p className="add-product-tagline">craft-o-holic admin</p>
                <h1 className="add-product-heading">Add a new product</h1>
                <p className="add-product-desc">
                    Fill in the details below to list a new handmade piece.
                </p>

                <form className="add-product-form" onSubmit={handleSubmit}>
                    {status.error && <p className="form-error">{status.error}</p>}
                    {status.success && <p className="form-success">{status.success}</p>}

                    <div className="form-row">
                        <label className="form-label">
                            Product name
                            <input
                                type="text"
                                name="name"
                                className="form-input"
                                placeholder="e.g. Sunflower Bouquet"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </label>

                        <label className="form-label">
                            Category
                            <input
                                type="text"
                                name="category"
                                className="form-input"
                                placeholder="e.g. Bouquets"
                                value={formData.category}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="form-row">
                        <label className="form-label">
                            Price (Rs)
                            <input
                                type="number"
                                name="price"
                                className="form-input"
                                placeholder="e.g. 599"
                                value={formData.price}
                                onChange={handleChange}
                                min="0"
                                step="0.01"
                            />
                        </label>

                        <label className="form-label form-checkbox-label">
                            <input
                                type="checkbox"
                                name="stock"
                                checked={formData.stock}
                                onChange={handleChange}
                            />
                            In stock
                        </label>
                    </div>

                    <label className="form-label">
                        Description
                        <textarea
                            name="description"
                            className="form-textarea"
                            placeholder="Describe the product..."
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                        />
                    </label>

                    {/* Images */}
                    <div className="form-list-section">
                        <p className="form-list-heading">Image URLs</p>
                        {images.map((url, index) => (
                            <div className="form-list-row" key={index}>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="https://... or /image.jpg"
                                    value={url}
                                    onChange={(e) => handleListChange(setImages, images, index, e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="form-list-remove"
                                    onClick={() => removeListItem(setImages, images, index)}
                                    disabled={images.length === 1}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="form-list-add"
                            onClick={() => addListItem(setImages, images)}
                        >
                            + Add another image
                        </button>
                    </div>

                    {/* Videos */}
                    <div className="form-list-section">
                        <p className="form-list-heading">Video URL (optional)</p>
                        {videos.map((url, index) => (
                            <div className="form-list-row" key={index}>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="https://..."
                                    value={url}
                                    onChange={(e) => handleListChange(setVideos, videos, index, e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="form-list-remove"
                                    onClick={() => removeListItem(setVideos, videos, index)}
                                    disabled={videos.length === 1}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="form-list-add"
                            onClick={() => addListItem(setVideos, videos)}
                        >
                            + Add another video
                        </button>
                    </div>

                    {/* Colors */}
                    <div className="form-list-section">
                        <p className="form-list-heading">Colors</p>
                        {colors.map((color, index) => (
                            <div className="form-list-row" key={index}>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="e.g. Yellow"
                                    value={color}
                                    onChange={(e) => handleListChange(setColors, colors, index, e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="form-list-remove"
                                    onClick={() => removeListItem(setColors, colors, index)}
                                    disabled={colors.length === 1}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="form-list-add"
                            onClick={() => addListItem(setColors, colors)}
                        >
                            + Add another color
                        </button>
                    </div>

                    <button type="submit" className="form-submit" disabled={status.loading}>
                        {status.loading ? "Adding..." : "Add product"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProductForm;