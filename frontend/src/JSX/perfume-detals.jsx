import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/perfume-details.css'; 
import ShareButtons from './Share-botton.jsx';

const PerfumeDetail = () => {
    const { id } = useParams(); //  perfume ID from the URL
    const [perfume, setPerfume] = useState(null);
    const [newReview, setNewReview] = useState({
        username: '',
        comment: '',
        rating: 1, 
    });

    useEffect(() => {
        const fetchPerfume = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/perfumes/${id}`);
                const data = await response.json();
                setPerfume(data);
            } catch (error) {
                console.error('Error fetching perfume details:', error);
            }
        };

        fetchPerfume();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/perfumes/${id}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReview),
            });

            if (response.ok) {
                const addedReview = await response.json();
                setPerfume((prev) => ({
                    ...prev,
                    reviews: [...prev.reviews, addedReview],
                }));
                setNewReview({ username: '', comment: '', rating: 1 }); // Reset form
            } else {
                console.error('Error adding review:', await response.json());
            }
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    if (!perfume) return <div>Loading...</div>;

    const currentUrl = window.location.href; // Get the current URL for sharing
    const perfumeName = perfume.name; // Use the perfume name for the share title

    return (
        // formt get reques about particular id
        <div className='main2'>
            <div className='tupper'>
                <h1 className='name'>{perfume.name}</h1>
                <div className='format'>
                    <img className='image' src={perfume.imageUrl} alt={perfume.name} />
                    <div className='content'>
                        <p>{perfume.description}</p>
                        <p>Price: ${perfume.price}</p>
                    </div>
                </div>
            </div>

            {/* Add Share Buttons Here */}
            <ShareButtons url={currentUrl} title={perfumeName} />

            <h2 className='tapo'>Reviews:</h2>
            <table className="review-table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Comment</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {/* get request of all reviews */}
                    {perfume.reviews.map((review, index) => (
                        <tr key={index}>
                            <td><strong>{review.username}</strong></td>
                            <td>{review.comment}</td>
                            <td>
                                {Array.from({ length: review.rating }, (_, i) => (
                                    <span key={i} className={i < review.rating ? 'star filled' : 'star'}>
                                        ★
                                    </span>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* post reques for reviews */}

            <h2>Add a Review:</h2>

            <form onSubmit={handleSubmit} className='form'>
                <div className='imput'>
                    <input
                        type="text"
                        name="username"
                        placeholder="Your Name"
                        value={newReview.username}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="comment"
                        placeholder="Your Review"
                        value={newReview.comment}
                        onChange={handleInputChange}
                        required
                    />
                    <select
                        name="rating"
                        value={newReview.rating}
                        onChange={handleInputChange}
                    >
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                </div>
                <button className='button' type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default PerfumeDetail;
