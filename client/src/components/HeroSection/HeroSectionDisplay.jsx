import { useState } from "react";
import { useMyContext } from "../../MyContext";

export default function HeroSectionDisplay() {
    const [error, setError] = useState(null)
    const { 
        heroSections, 
        setHeroSections,
        editedItem,
        editingId,
        setEditedItem,
        setEditingId,
        handleCancel,
        handleInputChange,
        handleEdit
     } = useMyContext();

    const handleSave = () => {
        fetch(`http://[::1]:3000/hero_sections/${editingId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedItem),
        })
            .then((res) => res.json())
            .then((updatedItem) => {
                setHeroSections((prevDetails) =>
                    prevDetails.map((item) =>
                        item.id === editingId ? updatedItem : item
                    )
                );
                setEditingId(null);
                setEditedItem(null);
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleDelete = (id) => {
        fetch(`http://[::1]:3000/hero_sections/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                // Remove the deleted item from the state
                setHeroSections((prevDetails) =>
                    prevDetails.filter((item) => item.id !== id)
                );
            })
            .catch((error) => {
                setError(error);
            });
    };

    if (!heroSections || heroSections.length < 1)
        return <h1 className="text-2xl font-bold text-center p-4">Nothing to show</h1>;

    return (
        <div className="container mx-auto px-4 py-8">
            {error && (
                <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    {error.message}
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {heroSections.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6 space-y-4">
                            {editingId === item.id ? (
                                <>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={editedItem.title}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 rounded px-2 py-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Subtitle</label>
                                        <input
                                            type="text"
                                            name="subtitle"
                                            value={editedItem.subtitle}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 rounded px-2 py-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Subtext</label>
                                        <textarea
                                            name="subtext"
                                            value={editedItem.subtext}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 rounded px-2 py-1"
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <button
                                            onClick={handleSave}
                                            className="bg-green-500 text-white px-4 py-2 rounded"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={handleCancel}
                                            className="bg-red-500 text-white px-4 py-2 rounded"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
                                        <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Subtitle</label>
                                        <p className="text-base text-gray-700">{item.subtitle}</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-1">Subtext</label>
                                        <p className="text-sm text-gray-600">{item.subtext}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="bg-blue-500 text-white px-4 py-2 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded ml-auto"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
