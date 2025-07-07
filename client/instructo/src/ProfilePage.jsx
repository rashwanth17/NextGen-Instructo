import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BookOpen, CheckCircle, Users, Trophy, Star } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/user/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("👤 Received user data:", res.data); // for debugging
        setUser(res.data);
        setLoading(false);
      } catch (err) {
        console.error("❌ Failed to fetch profile", err);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div className="text-white p-8">Loading...</div>;
  }

  return (
    <div className="bg-gray-950 min-h-screen">
      <Header />
      <main className="p-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="text-gray-400 text-sm">
              Welcome, {user.username} (ID: {user._id})
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30 flex items-center gap-4">
            <BookOpen className="w-6 h-6 text-purple-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Age</h3>
              <p className="text-gray-300">{user.age}</p>
            </div>
          </div>
          <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30 flex items-center gap-4">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
              <p className="text-gray-300">{user.email}</p>
            </div>
          </div>
          <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30 flex items-center gap-4">
            <Trophy className="w-6 h-6 text-blue-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Joined</h3>
              <p className="text-gray-300">{new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-500/30 flex items-center gap-4">
            <Users className="w-6 h-6 text-yellow-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">School/College</h3>
              <p className="text-gray-300">{user.institution}</p>
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <p>
                <span className="font-medium text-white">Username:</span> {user.username}
              </p>
              <p>
                <span className="font-medium text-white">Email:</span> {user.email}
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium text-white">Age:</span> {user.age}
              </p>
              <p>
                <span className="font-medium text-white">School/College:</span> {user.institution}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
