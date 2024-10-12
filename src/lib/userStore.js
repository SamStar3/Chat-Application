import { create } from 'zustand';
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export const useUserStore = create((set) => ({
  currentUser: null, 
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ currentUser: null, isLoading: false }); // Fixed typo here as well

    // set({ isLoading: true }); // Set loading to true before fetching

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(), isLoading: false }); // Set user data if document exists
        
      } else {
        set({ currentUser: null, isLoading: false }); // If no document, set currentUser to null
      }

    } catch (err) {
      console.log(err);
      return set({ currentUser: null, isLoading: false }); // In case of error, reset currentUser and isLoading
    }
  }
}));
