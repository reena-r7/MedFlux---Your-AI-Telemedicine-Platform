/*import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import DoctorDetails from "../DoctorDetails/DoctorDetails";
import { FilterContext } from "../../context/FilterContext";

function ConsultDoctor() {
  const { doctorSpec, setDoctorSpec } = useContext(FilterContext);
  const [doctors, setDoctors] = useState([]);
  const [filteredItems, setFilteredItems] = useState(doctors);
  const [selectedDoctor, setSelectedDoctor] = useState(doctorSpec);
  const [showDoctorDetails, setShowDoctorDetails] = useState(false);
  const [DoctorDet, setDoctorDet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "doctors"));
        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setDoctors(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const notify = (item) => {
    setDoctorDet(item); // Set the selected doctor data
    setShowDoctorDetails(true); // Show DoctorDetails component
  };

  const filters = [
    "Dermatologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Rheumatologist",
    "Neurologist",
    "Pulmonologist",
    "Cardiologist",
  ];

  const handleFilterChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const filterItems = () => {
    if (selectedDoctor) {
      setFilteredItems(
        doctors.filter((doctor) => doctor.specialisation === selectedDoctor)
      );
    } else {
      setFilteredItems(doctors);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedDoctor, doctors]);

  const openExternalService = () => {
    window.open("https://www.practo.com/", "_blank");
  };

  return (
    <>
      {!showDoctorDetails && (
        <DashboardStyled>
          <div className="heading">
            <h2>Consult Doctor</h2>
          </div>
          <InnerLayout>
            <div>
              <select
                value={selectedDoctor}
                onChange={handleFilterChange}
                className="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Select a filter</option>
                {filters.map((filter, idx) => (
                  <option key={`filter-${idx}`} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>

              <div className="flex flex-col space-y-4 mt-4 w-full">
                {filteredItems.map((item, idx) => {
                  const randomRating = Math.floor(Math.random() * 5) + 1;
                  return (
                    <div key={`items-${idx}`} className="w-full lg:flex">
                      <div
                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-lg lg:rounded-t-none lg:rounded-lg text-center overflow-hidden"
                        style={{
                          backgroundImage: `url(${item.imageUri})`,
                        }}
                      ></div>

                      <div className="border-r  border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
                        <div className="mb-8 flex">
                          <div className="ml-4">
                            <p className="text-gray-900 font-bold text-xl mb-2">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-600 flex items-center">
                              {item.specialisation}
                            </p>
                            <p className="text-gray-700 text-base">
                              {item.experience}
                            </p>

                            <div className="flex items-center mt-2">
                              {[...Array(randomRating)].map((_, i) => (
                                <FaStar
                                  key={`star-${i}`}
                                  className="text-yellow-500"
                                />
                              ))}
                              {[...Array(5 - randomRating)].map((_, i) => (
                                <FaStar
                                  key={`star-empty-${i}`}
                                  className="text-gray-400"
                                />
                              ))}
                            </div>
                            <div className="flex items-center mt-4">
                              <div className="text-sm">
                                <p className="text-gray-900 leading-none">
                                  {item.address}
                                </p>
                                <p className="text-gray-600">{item.timings}</p>
                                <button
                                  onClick={() => notify(item)}
                                  className="bg-purple-500 mt-2 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                                >
                                  See All Timings
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={openExternalService}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4"
              >
                Explore More Doctors on Practo
              </button>
            </div>
            <ToastContainer />
          </InnerLayout>
        </DashboardStyled>
      )}
      {showDoctorDetails && <DoctorDetails DoctorDet={DoctorDet} />}
    </>
  );
}

const DashboardStyled = styled.div`
  .heading h2 {
    font-size: 29px;
    color: darkviolet;
    font-weight: 605;
    margin: 25px -17px;
    padding: 1rem 1.5rem;
    width: 100%;
  }
`;

export default ConsultDoctor;*/
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { FilterContext } from "../../context/FilterContext";

function ConsultDoctor() {
  const { doctorSpec, setDoctorSpec } = useContext(FilterContext);
  const [doctors, setDoctors] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(doctorSpec);
  const [showDoctorDetails, setShowDoctorDetails] = useState(null); // Modify to store selected doctor for details

  // Fetch doctor data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "doctors"));
        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setDoctors(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Function to filter doctors based on the selected speciality
  useEffect(() => {
    const filterDoctors = () => {
      if (selectedDoctor) {
        // Filter doctors by selected speciality
        setFilteredItems(
          doctors.filter((doctor) => doctor.speciality === selectedDoctor)
        );
      } else {
        // If no speciality is selected, show all doctors
        setFilteredItems(doctors);
      }
    };

    filterDoctors();
  }, [selectedDoctor, doctors]);

  const notify = (item) => {
    setShowDoctorDetails(item); // Set the selected doctor to show details
  };

  const filters = [
    "Dermatologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Rheumatologist",
    "Neurologist",
    "Pulmonologist",
    "Cardiologist",
  ];

  const handleFilterChange = (event) => {
    setSelectedDoctor(event.target.value); // Update selected speciality
  };

  const openExternalService = () => {
    window.open("https://www.practo.com/", "_blank");
  };

  return (
    <>
      <DashboardStyled>
        <div className="heading">
          <h2>Consult Doctor</h2>
        </div>
        <InnerLayout>
          <div>
            <select
              value={selectedDoctor}
              onChange={handleFilterChange}
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="">Select a filter</option>
              {filters.map((filter, idx) => (
                <option key={`filter-${idx}`} value={filter}>
                  {filter}
                </option>
              ))}
            </select>

            <div className="flex flex-col space-y-4 mt-4 w-full">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const randomRating = Math.floor(Math.random() * 5) + 1;
                  return (
                    <div key={`items-${idx}`} className="w-full lg:flex">
                      <div
                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-lg lg:rounded-t-none lg:rounded-lg text-center overflow-hidden"
                        style={{
                          backgroundImage: `url(${item.imageUri})`,
                        }}
                      ></div>

                      <div className="border-r  border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
                        <div className="mb-8 flex">
                          <div className="ml-4">
                            <p className="text-gray-900 font-bold text-xl mb-2">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-600 flex items-center">
                              {item.speciality}
                            </p>
                            <p className="text-gray-700 text-base">
                              {item.experience}
                            </p>

                            <div className="flex items-center mt-2">
                              {[...Array(randomRating)].map((_, i) => (
                                <FaStar
                                  key={`star-${i}`}
                                  className="text-yellow-500"
                                />
                              ))}
                              {[...Array(5 - randomRating)].map((_, i) => (
                                <FaStar
                                  key={`star-empty-${i}`}
                                  className="text-gray-400"
                                />
                              ))}
                            </div>
                            <div className="flex items-center mt-4">
                              <div className="text-sm">
                                <p className="text-gray-900 leading-none">
                                  {item.address}
                                </p>
                                <p className="text-gray-600">{item.timings}</p>
                                <button
                                  onClick={() => notify(item)} // Set the selected doctor details to show
                                  className="bg-purple-500 mt-2 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                                >
                                  Learn More
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No doctors found for the selected speciality.</p>
              )}
            </div>
            <button
              onClick={openExternalService}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4"
            >
              Explore More Doctors on Practo
            </button>
          </div>

          {showDoctorDetails && (
            <div className="doctor-details mt-8">
              <h3>Doctor Details</h3>
              <div>
                <p><strong>Name:</strong> {showDoctorDetails.name}</p>
                <p><strong>Specialisation:</strong> {showDoctorDetails.speciality}</p>
                <p><strong>Experience:</strong> {showDoctorDetails.experience}</p>
                <p><strong>Timings:</strong> {showDoctorDetails.timings}</p>
                <p><strong>Address:</strong> {showDoctorDetails.address}</p>
                <p><strong>Description:</strong> {showDoctorDetails.description}</p>
                {/* You can add more fields as needed */}
                <button
                  onClick={() => setShowDoctorDetails(null)} // Hide the details when back is clicked
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                >
                  Back to List
                </button>
              </div>
            </div>
          )}
        </InnerLayout>
        <ToastContainer />
      </DashboardStyled>
    </>
  );
}

const DashboardStyled = styled.div`
  .heading h2 {
    font-size: 29px;
    color: darkviolet;
    font-weight: 605;
    margin: 25px -17px;
    padding: 1rem 1.5rem;
    width: 100%;
  }

  .doctor-details {
    background: #f8f8f8;
    padding: 20px;
    border-radius: 8px;
  }
`;

export default ConsultDoctor;

