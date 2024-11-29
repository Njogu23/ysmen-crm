import { useState } from "react";
import { useMyContext } from "../../MyContext";

export default function AboutSectionForm() {
    const { showNotification } = useMyContext();
    const [formErrors, setFormErrors] = useState({});
    const [formValues, setFormValues] = useState({
        motto: "",
        history: "",
        vision: "",
        mission: "",
        club_id: "",
    });

    const validateForm = () => {
        const errors = {};
        
        if (!heroSection.title.trim()) {
          errors.title = 'Title is required';
        }
        
        if (!heroSection.subtitle.trim()) {
          errors.subtitle = 'Subtitle is required';
        }
        
        if (!heroSection.subtext.trim()) {
          errors.subtext = 'Subtext is required';
        }
        
        if (!heroSection.image) {
          errors.image = 'Please upload an image';
        }
        
        if (!heroSection.club_id) {
          errors.club_id = 'Club ID is required';
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        // Clear specific field error when user starts typing
    if (formErrors[name]) {
        setFormErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            showNotification('Please fill in all required fields', true);
            return;
          }

          try {
            const response = await fetch("http://[::1]:3000/home_page_details", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValues),
            });

            if (!response.ok) throw new Error('Failed to add About Section!');

            setFormValues({
                motto: "",
                history: "",
                vision: "",
                mission: "",
                club_id: "",
            });
            setFormErrors({});
            showNotification('About section added successfully!', false);
          } catch (error) {
            showNotification(error.message || 'Error creating about section!', true)
          }
        };

    return (
        <div className="container mx-auto px-6 py-10 max-w-3xl bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <label className="block text-sm font-semibold text-gray-800">Motto</label>
                    <textarea
                        name="motto"
                        value={formValues.motto}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-800">History</label>
                    <textarea
                        name="history"
                        value={formValues.history}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-800">Vision</label>
                    <textarea
                        name="vision"
                        value={formValues.vision}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-800">Mission</label>
                    <textarea
                        name="mission"
                        value={formValues.mission}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-800">Club ID</label>
                    <input
                        type="number"
                        name="club_id"
                        value={formValues.club_id}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
