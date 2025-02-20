import { Loader2, PlusSquare } from 'lucide-react';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../lib/supabase';
import { useUser } from '@clerk/clerk-react'; // Ensure you get user info from Clerk
import { useAuth } from "@clerk/clerk-react"; 


function AddResume() {
  const { getToken } = useAuth(); 
  const { user } = useUser(); // Get user details from Clerk
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const onCreate = async () => {
    if (!user) return alert("User not found");
  
    setLoading(true);
    const resumeId = uuidv4();
  
    try {
      const token = await getToken({ template: "supabase" });
      console.log("Clerk Supabase Token:", token);

  
      const { data, error } = await supabase
        .from("resumes")
        .insert([
          {
            title: resumeTitle,
            resumeId: resumeId,
            userEmail: user?.primaryEmailAddress?.emailAddress, // Get email from Clerk
            userName: user?.fullName,
          }
        ], {
          headers: { Authorization: `Bearer ${token}` } // Add Authorization Header
        })
        .select("*"); // Ensure you get the inserted data
  
      if (error) throw error;
  
      console.log("Resume created:", data);
      setOpenDialog(false); // Close dialog after success
    } catch (error) {
      console.error("Error creating resume:", error.message);
      alert(error.message); // Show alert if an error occurs
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <div 
        className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px]
                    hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              Add a title for your new resume
              <Input 
                className='my-2' 
                placeholder='Ex. Full Stack Resume' 
                value={resumeTitle}
                onChange={(e) => setResumeTitle(e.target.value)} 
              />
            </DialogDescription>
            <div className='flex justify-end gap-5'>
              <Button onClick={() => setOpenDialog(false)} variant='ghost'>Cancel</Button>
              <Button disabled={!resumeTitle || loading} onClick={onCreate}>
                {loading ? <Loader2 className='animate-spin' /> : 'Create'}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
