import { useEffect } from "react";
import AboutSectionDisplay from "./AboutSectionDisplay";
import AboutSectionForm from "./AboutSectionForm";
import { useMyContext } from "../../MyContext";

export default function AboutSectionManager() {
    const { 
        aboutSections, 
        setAboutSections, 
        error,
        editedItem,
        editingId,
        setEditedItem,
        setEditingId,
        setError } = useMyContext();
   
// setHeroSections
    useEffect(() => {
        fetch("http://[::1]:3000/home_page_details")
            .then((res) => res.json())
            .then((data) => setAboutSections(data))
            .catch((e) => setError(e));
    }, []);


    const handleSave = () => {
        fetch(`http://[::1]:3000/home_page_details/${editingId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedItem),
        })
            .then((res) => res.json())
            .then((updatedItem) => {
                setAboutSections((prevDetails) =>
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
        }

    const handleDelete = (id) => {
        fetch(`http://[::1]:3000/home_page_details/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                setAboutSections((prev) => prev.filter((section) => section.id !== id));
            })
            .catch(setError);
    };

    return (
        <div className="container mx-auto px-6 py-12">
            {error && (
                <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
                    role="alert"
                >
                    {"An error occurred while loading the data."}
                </div>
            )}

            {aboutSections.length < 1 ? (
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">No About Sections Found</h1>
                    <p className="text-gray-700 mb-4">
                        It seems there are no About Sections available. You can add a new one below.
                    </p>
                    <AboutSectionForm />
                </div>
            ) : (
                <>
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">Manage About Sections</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {aboutSections.map((section) => (
                            <AboutSectionDisplay
                                key={section.id}
                                aboutSection={section}
                                onDelete={handleDelete}
                                handleSave={handleSave}
                            />
                        ))}
                    </div>
                    <div>
                        <AboutSectionForm />
                    </div>
                </>
            )}
        </div>
    );
}
