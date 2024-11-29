import { useMyContext } from "../../MyContext";

export default function AboutSectionDisplay({ handleSave, aboutSection, onDelete }) {
    const { id, motto, history, vision, mission } = aboutSection;
    const {
        editedItem,
        editingId,
        handleCancel,
        handleInputChange,
        handleEdit,} = useMyContext()


    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-4">
          {editingId === id ? (
            <>
            <div>
                <label className="block text-sm font-semibold text-gray-800">Motto</label>
                <textarea
                    name="motto"
                    value={editedItem.motto}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-800">History</label>
                <textarea
                    name="history"
                    value={editedItem.history}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-800">Vision</label>
                <textarea
                    name="vision"
                    value={editedItem.vision}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-800">Mission</label>
                <textarea
                    name="mission"
                    value={editedItem.mission}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
            </>):(
            <>
            <div>
                <label className="block text-sm font-medium text-gray-500">Motto</label>
                <p className="text-gray-800">{motto}</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-500">History</label>
                <p className="text-gray-800">{history}</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-500">Vision</label>
                <p className="text-gray-800">{vision}</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-500">Mission</label>
                <p className="text-gray-800">{mission}</p>
            </div>
            <div className="flex justify-between">
                <button
                    onClick={() => handleEdit(aboutSection)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Delete
                </button>
            </div>
            </>)}
        </div>
    );
}
