import React, { useState } from "react";
import "./propertyList.css";
import Navbar from "../../components/navbar/Navbar";

function ListProperty() {
  const [lists, setLists] = useState([
    { id: 1, name: "Hotels", properties: [] },
    { id: 2, name: "Apartments", properties: [] },
    { id: 3, name: "Villas", properties: [] },
    { id: 4, name: "Budget Hotels", properties: [] },
    { id: 5, name: "Eco Hotels", properties: [] },
  ]);

  const [newProperty, setNewProperty] = useState("");
  const [accommodationType, setAccommodationType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [selectedList, setSelectedList] = useState(1);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingFields, setEditingFields] = useState({});
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [search, setSearch] = useState("");

  const accommodationOptions = [
    "Luxury",
    "Deluxe",
    "Standard",
    "Cottage",
    "Eco-Friendly",
  ];

  const addProperty = () => {
    const trimmed = newProperty.trim();
    if (!trimmed || !accommodationType.trim() || !location.trim()) {
      alert("Property name, accommodation type, and location cannot be empty!");
      return;
    }

    const selectedCategory = lists.find(list => list.id === selectedList);
    if (selectedCategory.properties.some((prop) => prop.name === trimmed)) {
      alert("This property already exists in the selected category.");
      return;
    }

    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === selectedList
          ? {
              ...list,
              properties: [
                ...list.properties,
                {
                  name: trimmed,
                  accommodation: accommodationType,
                  location,
                  description,
                  file: filePreview, // Save preview URL
                },
              ],
            }
          : list
      )
    );
    setNewProperty("");
    setAccommodationType("");
    setLocation("");
    setDescription("");
    setFile(null);
    setFilePreview(null);
  };

  const startEditing = (listId, index, prop) => {
    setEditingIndex({ listId, index });
    setEditingFields({
      name: prop.name,
      accommodation: prop.accommodation,
      location: prop.location,
      description: prop.description || "",
      file: prop.file,
    });
  };

  const saveEdit = () => {
    const { name, accommodation, location, description, file } = editingFields;
    if (!name.trim() || !accommodation.trim() || !location.trim()) {
      alert("Property name, accommodation type, and location cannot be empty!");
      return;
    }
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === editingIndex.listId
          ? {
              ...list,
              properties: list.properties.map((prop, i) =>
                i === editingIndex.index
                  ? { name, accommodation, location, description, file }
                  : prop
              ),
            }
          : list
      )
    );
    setEditingIndex(null);
    setEditingFields({});
  };

  const deleteProperty = (listId, index) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              properties: list.properties.filter((_, i) => i !== index),
            }
          : list
      )
    );
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      setFilePreview(URL.createObjectURL(file));
    } else {
      setFilePreview(null);
    }
  };

  // Search filter logic
  const filterProperties = (properties) => {
    if (!search.trim()) return properties;
    return properties.filter(
      (prop) =>
        prop.name.toLowerCase().includes(search.toLowerCase()) ||
        prop.location.toLowerCase().includes(search.toLowerCase()) ||
        prop.accommodation.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <>
      <div className="list-property-container">
        <header className="property-header">
          <h2>🏨 Manage Property Categories</h2>
          <div className="property-controls">
            <select
              value={selectedList}
              onChange={(e) => setSelectedList(parseInt(e.target.value))}
              className="property-select"
              aria-label="Choose a category"
            >
              {lists.map((list) => (
                <option key={list.id} value={list.id}>
                  {list.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={newProperty}
              onChange={(e) => setNewProperty(e.target.value)}
              placeholder="📝 Property name"
              className="property-input"
            />
            <select
              value={accommodationType}
              onChange={(e) => setAccommodationType(e.target.value)}
              className="property-select"
              aria-label="Choose accommodation type"
            >
              <option value="">Select Accommodation Type</option>
              {accommodationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="📍 Location"
              className="property-input"
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="📝 Description (optional)"
              className="property-input"
            />
            <input
              type="file"
              onChange={handleFileChange}
              className="property-file-input"
              title="Choose a file to attach"
              accept="image/*"
            />
            {filePreview && (
              <img
                src={filePreview}
                alt="Preview"
                className="property-image-preview"
              />
            )}
            <button
              onClick={addProperty}
              className="property-add-btn"
              disabled={
                !newProperty.trim() ||
                !accommodationType.trim() ||
                !location.trim()
              }
              title="Add new property"
            >
              ➕ Add
            </button>
          </div>
          <div className="property-search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔍 Search properties..."
              className="property-input"
            />
          </div>
        </header>

        <div className="property-cards-row">
          {lists.map((list) => (
            <div key={list.id} className="property-card">
              <div className="property-card-header">
                {list.name}{" "}
                <span className="property-count">
                  ({list.properties.length})
                </span>
              </div>
              <div className="property-card-body">
                {filterProperties(list.properties).length === 0 ? (
                  <div className="property-empty">No properties found.</div>
                ) : (
                  <ul className="property-items">
                    {filterProperties(list.properties).map((prop, index) => (
                      <li key={`${list.id}-${index}`} className="property-item">
                        {editingIndex &&
                        editingIndex.listId === list.id &&
                        editingIndex.index === index ? (
                          <>
                            <input
                              type="text"
                              value={editingFields.name}
                              onChange={(e) =>
                                setEditingFields((f) => ({
                                  ...f,
                                  name: e.target.value,
                                }))
                              }
                              className="property-edit-input"
                              placeholder="Name"
                            />
                            <select
                              value={editingFields.accommodation}
                              onChange={(e) =>
                                setEditingFields((f) => ({
                                  ...f,
                                  accommodation: e.target.value,
                                }))
                              }
                              className="property-edit-input"
                              aria-label="Accommodation type"
                            >
                              {accommodationOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <input
                              type="text"
                              value={editingFields.location}
                              onChange={(e) =>
                                setEditingFields((f) => ({
                                  ...f,
                                  location: e.target.value,
                                }))
                              }
                              className="property-edit-input"
                              placeholder="Location"
                            />
                            <input
                              type="text"
                              value={editingFields.description}
                              onChange={(e) =>
                                setEditingFields((f) => ({
                                  ...f,
                                  description: e.target.value,
                                }))
                              }
                              className="property-edit-input"
                              placeholder="Description"
                            />
                            <button
                              onClick={saveEdit}
                              className="property-save-btn"
                              disabled={
                                !editingFields.name.trim() ||
                                !editingFields.accommodation.trim() ||
                                !editingFields.location.trim()
                              }
                              title="Save"
                            >
                              💾
                            </button>
                          </>
                        ) : (
                          <>
                            {prop.file && (
                              <img
                                src={prop.file}
                                alt="Property"
                                className="property-image-thumb"
                              />
                            )}
                            <span>
                              <strong>{prop.name}</strong> ({prop.accommodation})
                            </span>
                            <span>📍 {prop.location}</span>
                            {prop.description && (
                              <span className="property-desc">
                                📝 {prop.description}
                              </span>
                            )}
                            <button
                              onClick={() =>
                                startEditing(list.id, index, prop)
                              }
                              className="property-edit-btn"
                              title="Edit"
                            >
                              ✏️
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => deleteProperty(list.id, index)}
                          className="property-delete-btn"
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListProperty;
