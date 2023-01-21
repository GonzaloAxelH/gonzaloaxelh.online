import {
    collection
    , addDoc,
  query,
  where,
  getDocs,
    setDoc,
  doc,
  arrayUnion,
  updateDoc,
  arrayRemove,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/settings/firebase";

export const getComments = async () => {
    const q = query(
      collection(db, "comments"),
      where("idBlog", "==", "blog-id-1")
    );
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
  
        console.log(doc.id, " => ", doc.data());
        
        
    });

    return "success"
        
};

export const addSubComment = async ({
  comment,
  idUser,
  emailUser,
  idcomment,
}: any) => {
  const washingtonRef = doc(db, "comments", idcomment);
  await updateDoc(washingtonRef, {
    replies: arrayUnion({ comment, idUser, emailUser }),
  });
};


export const deleteSubComment = async (comment: any, idcomment:any) => {
  const washingtonRef = doc(db, "comments", idcomment);
  await updateDoc(washingtonRef, {
    replies: arrayRemove(comment),
  });
};

export const deleteComment = async () => {
    await deleteDoc(doc(db, "cities", "DC"));
}


export const addComment = async () => { 
    const docRef = await addDoc(collection(db, "comments"), {
      comment: "Tokyo",
        emailUser: "Japan",
        idBlog: "asdasda",
        idUser: "adasd",
        type:"index"

    });
    console.log("Document written with ID: ", docRef.id);
}


export const editComment = async (newCommentString:any,idComment:any) => {
  const washingtonRef = doc(db, "comments", idComment);
  //order by date update or created
  await updateDoc(washingtonRef, {
    comment: newCommentString,
  });
}


export const editReplyComment = async (comment:any,idComment:any,idCommentReply:any) => {
const washingtonRef = doc(db, "comments", idComment);

    const allReplyComments = []

    const filterCommentsAndRemoveById :any= []
    
    const addNewComment = [...filterCommentsAndRemoveById, {
         comment: "Tokyo",
        emailUser: "Japan",
        idBlog: "asdasda",
        idUser: "adasd",
        type: "index",
        
    }]

    //order by date  or created
    const newReplies :any= []
// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  replies: newReplies,
});
}

