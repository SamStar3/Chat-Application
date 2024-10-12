import { create } from 'zustand'
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export const useUserStore = create((set) => ({
  currectUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if(!uid) return set({currectUser:null, isLoading: false});

    try{

      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()) {
        set({currectUser:docSnap.data(), isLoading:false});
      }else{
        set({ currectUser: null, isLoading: false});
      }

    }catch(err) {
      console.log(err)
      return set({ currectUser: null, isLoading: false });
    }
  }
}))
