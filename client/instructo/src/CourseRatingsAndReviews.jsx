// import React, { useState } from 'react';
// import { FaStar, FaComment, FaPaperPlane } from 'react-icons/fa';

// const CourseRatingsAndReviews = ({ courseId }) => {
//   // Replace this with your actual data fetching logic
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       user: 'Alice Smith',
//       rating: 5,
//       comment: 'Excellent course!  The instructor was very knowledgeable and engaging.  I learned a lot.',
//       date: '2024-07-28',
//     },
//     {
//       id: 2,
//       user: 'Bob Johnson',
//       rating: 4,
//       comment: 'Good course overall.  The materials were helpful, but I wish there were more hands-on exercises.',
//       date: '2024-07-25',
//     },
//     {
//       id: 3,
//       user: 'Charlie Brown',
//       rating: 3,
//       comment: 'The course was okay.  It was a bit basic for me.',
//       date: '2024-07-20',
//     },
//   ]);

//   const [newRating, setNewRating] = useState(0);
//   const [newComment, setNewComment] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitError, setSubmitError] = useState('');


//   const handleRatingChange = (rating) => {
//     setNewRating(rating);
//   };

//   const handleCommentChange = (event) => {
//     setNewComment(event.target.value);
//   };

//   const handleSubmitReview = async () => {
//         if (!newRating) {
//             setSubmitError("Please select a rating.");
//             return;
//         }
//         if (!newComment.trim()) {
//             setSubmitError("Please write a comment.");
//             return;
//         }
//     setSubmitError('');
//     setIsSubmitting(true);
//     // Simulate an API call
//     try {
//       // Replace this with your actual API endpoint
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       const newReview = {
//         id: Date.now(), // Generate a unique ID
//         user: 'You', //  Get the user's name.
//         rating: newRating,
//         comment: newComment,
//         date: new Date().toISOString().split('T')[0], // Get date
//       };

//       setReviews([newReview, ...reviews]);
//       setNewRating(0);
//       setNewComment('');
//     } catch (error) {
//             setSubmitError("Failed to submit review. Please try again.");
//       console.error('Failed to submit review:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <FaStar
//           key={i}
//           className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}
//           size={20}
//         />
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 space-y-6">
//       <h2 className="text-3xl font-semibold">Ratings & Reviews</h2>

//       {/* Display Existing Reviews */}
//       {reviews.length > 0 ? (
//         <div className="space-y-4">
//           {reviews.map((review) => (
//             <div
//               key={review.id}
//               className="bg-[#1f2937] bg-opacity-70 p-4 rounded-xl border border-purple-800/20"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-lg font-semibold text-white">{review.user}</h3>
//                 <p className="text-gray-400 text-sm">{review.date}</p>
//               </div>
//               <div className="flex items-center mb-2">{renderStars(review.rating)}</div>
//               <p className="text-gray-300 leading-relaxed">{review.comment}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-400">No reviews yet.</p>
//       )}

//       {/* Add New Review Section */}
//       <div className="bg-[#1f2937] bg-opacity-70 p-6 rounded-2xl shadow-lg border border-purple-800/20">
//         <h3 className="text-2xl font-semibold mb-4">Add a Review</h3>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-300 mb-2">Your Rating:</label>
//           <div className="flex items-center">
//             {renderStars(newRating).map((star, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleRatingChange(index + 1)}
//                 className="mr-1"
//                 disabled={isSubmitting}
//               >
//                 {React.cloneElement(star, {
//                   className:
//                     index < newRating ? 'text-yellow-400' : 'text-gray-300',
//                 })}
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-300 mb-2">Your Comment:</label>
//           <textarea
//             value={newComment}
//             onChange={handleCommentChange}
//             className="w-full h-32 bg-[#374151] text-white border border-purple-800/20 rounded-md p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
//             placeholder="Write your review here..."
//             disabled={isSubmitting}
//           />
//         </div>
//                 {submitError && (
//                     <p className="text-red-500 text-sm mb-4">{submitError}</p>
//                 )}
//         <button
//           onClick={handleSubmitReview}
//           className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200 flex items-center"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? (
//             <>
//               <FaPaperPlane className="mr-2 animate-pulse" /> Submitting...
//             </>
//           ) : (
//             <>
//               <FaPaperPlane className="mr-2" /> Submit Review
//             </>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseRatingsAndReviews;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar, FaPaperPlane } from 'react-icons/fa';
  const CourseRatingsAndReviews = ({ courseId }) => {
  const [reviews, setReviews] = useState([]);
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/reviews/${courseId}`);
        setReviews(res.data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      }
    };
    fetchReviews();
  }, [courseId]);

  const handleRatingChange = (rating) => setNewRating(rating);
  const handleCommentChange = (e) => setNewComment(e.target.value);

  const handleSubmitReview = async () => {
    if (!newRating) return setSubmitError('Please select a rating.');
    if (!newComment.trim()) return setSubmitError('Please write a comment.');

    setSubmitError('');
    setIsSubmitting(true);

    try {
      const res = await axios.post(
        `http://localhost:3001/api/reviews/${courseId}`,
        {
          rating: newRating,
          comment: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      setReviews([res.data, ...reviews]);
      setNewRating(0);
      setNewComment('');
    } catch (error) {
      console.error('Failed to submit review:', error);
      setSubmitError('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
        size={20}
      />
    ));

  return (
    <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 space-y-6">
      <h2 className="text-3xl font-semibold">Ratings & Reviews</h2>

      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-[#1f2937] bg-opacity-70 p-4 rounded-xl border border-purple-800/20"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">{review.user}</h3>
                <p className="text-gray-400 text-sm">{new Date(review.date).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center mb-2">{renderStars(review.rating)}</div>
              <p className="text-gray-300 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No reviews yet.</p>
      )}

      <div className="bg-[#1f2937] bg-opacity-70 p-6 rounded-2xl shadow-lg border border-purple-800/20">
        <h3 className="text-2xl font-semibold mb-4">Add a Review</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Your Rating:</label>
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <button
                key={i}
                onClick={() => handleRatingChange(i + 1)}
                className="mr-1"
                disabled={isSubmitting}
              >
                <FaStar
                  className={i < newRating ? 'text-yellow-400' : 'text-gray-300'}
                  size={20}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Your Comment:</label>
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            className="w-full h-32 bg-[#374151] text-white border border-purple-800/20 rounded-md p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Write your review here..."
            disabled={isSubmitting}
          />
        </div>

        {submitError && <p className="text-red-500 text-sm mb-4">{submitError}</p>}

        <button
          onClick={handleSubmitReview}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200 flex items-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <FaPaperPlane className="mr-2 animate-pulse" /> Submitting...
            </>
          ) : (
            <>
              <FaPaperPlane className="mr-2" /> Submit Review
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CourseRatingsAndReviews;
