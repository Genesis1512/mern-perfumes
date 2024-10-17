import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/perfumes-list.css'; 
const PerfumeList = () => {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        // Fetch perfumes from the backend API
        const fetchPerfumes = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/perfumes'); 
                const data = await response.json();
                setPerfumes(data);
            } catch (error) {
                console.error('Error fetching perfumes:', error);
            }
        };

        fetchPerfumes();
    }, []);

    return (
        <div className="perfume-list-container">
            <h1>Perfume Collection</h1>
            <div className="card-container">
                {perfumes.map((perfume) => (
                    <div key={perfume._id} className="perfume-card">
                        <img className='image' src={perfume.imageUrl} alt={perfume.name} />
                        <h2>{perfume.name}</h2>
                        <p>{perfume.description.slice(0, 50)}...</p> {/* Displaying short description */}
                        <p>Price: ${perfume.price}</p>
                        <Link to={`/perfume/${perfume._id}`} className="view-details">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerfumeList;
